import {
      LIST_USERS_FAILURE, 
      LIST_USERS_START, 
      LIST_USERS_SUCCESS,
} from './events'
import {
      API_LIST_USER,
} from './constants';
    
export const startListUsers = () => ({
      type: LIST_USERS_START,
});

export const ListUsersSuccess = users => ({
      type: LIST_USERS_SUCCESS,
      payload: users,
});

export const ListUsersFailure = error => ({
      type: LIST_USERS_FAILURE,
      error,
});

export const actGetUsersRequest = () => 
      async (dispatch) => {
            try {
                  dispatch(startListUsers());
                  const url = API_LIST_USER;
                  await fetch(url, {
                        method: "GET",
                        headers: {
                        "Content-Type": "application/json",
                        },
                  })
                  .then(response => response.json())
                  .then(response =>{
                        dispatch(ListUsersSuccess(response))
                  })
            }
            catch (e) {
                  dispatch(ListUsersFailure(e));
            }
      }