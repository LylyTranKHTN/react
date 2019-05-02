import * as Types from '../constants/ActionTypes'
var initialState = []
const users = (state = initialState, action) => {
      switch (action.type) {
            case Types.GET_USERS:
            {
                  state.users = action.payload
                  state.numOfUsers = action.payload.length
                  return {
                        ...state
                  };
            }
            default: return {...state};
      }
};

export default users;