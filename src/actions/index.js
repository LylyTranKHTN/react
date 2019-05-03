import * as Types from '../constants/ActionTypes'
import getUsers from '../apis/getusers'

export const actGetUsersRequest = () => {
      return (dispatch) => {
            return getUsers()
      }
} 

/**
 * action Get Users
 * @param {object} users 
 */
export const actGetUsers = users => (
      {
            type: Types.GET_USERS,
            payload: users 
      }
);