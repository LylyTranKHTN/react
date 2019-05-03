import { Map as MapImmutable } from 'immutable';
import {
      LIST_USERS_FAILURE, 
      LIST_USERS_START, 
      LIST_USERS_SUCCESS,
} from './events'

var initialState = new MapImmutable({ });


const users = (state = initialState, action) => {
      switch (action.type) {
            case LIST_USERS_START: {
                  console.log("Starting .... ")
                  state.status = LIST_USERS_START
                  return {
                        ...state,
                  };
            }
            case LIST_USERS_SUCCESS: {
                  console.log("Success")
                  state.status = LIST_USERS_SUCCESS
                  state.page = action.payload.page
                  state.per_page = action.payload.per_page
                  state.total = action.payload.total
                  state.total_pages = action.payload.total_pages
                  state.users = action.payload.data
                  state.numOfUsers = action.payload.data.length
                  return {
                        ...state,
                  };
            }
            case LIST_USERS_FAILURE: {
                  state.status = LIST_USERS_FAILURE
                  state.error = action.error
                  console.log("Failure")
                  return {
                        ...state,
                  };
            }
            default: return {...state};
      }
};

export default users;
