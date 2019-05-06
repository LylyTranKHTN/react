import {
      LIST_USERS_FAILURE, 
      LIST_USERS_START, 
      LIST_USERS_SUCCESS,
} from './events'

var initialState = {};


const users = (state = initialState, action) => {
      switch (action.type) {
            case LIST_USERS_START: {
                  console.log("Starting .... ")
                  return {
                        status: LIST_USERS_START,
                  };
            }
            case LIST_USERS_SUCCESS: {
                  console.log("Success")
                  return {
                        data: action.payload,
                        status: LIST_USERS_SUCCESS
                  };
            }
            case LIST_USERS_FAILURE: {
                  console.log("Failure")
                  return {
                        status: LIST_USERS_FAILURE,
                        error: action.error,
                  };
            }
            default: return {...state};
      }
};

export default users;
