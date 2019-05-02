import * as Types from '../constants/ActionTypes'
var initialState = []
const users = (state = initialState, action) => {
      switch (action.type) {
            case Types.GET_USERS:
            {
                  state.page = action.payload.page
                  state.per_page = action.payload.per_page
                  state.total = action.payload.total
                  state.total_pages = action.payload.total_pages
                  state.users = action.payload.data
                  state.numOfUsers = action.payload.data.length
                  return {
                        ...state
                  };
            }
            default: return {...state};
      }
};

export default users;