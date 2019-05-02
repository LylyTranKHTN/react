import * as Types from '../constants/ActionTypes'
import getUsers from '../apis/getusers'

export const actGetUsersRequest = () => {
      return (dispatch) => {
            return getUsers()
      }
} 

export const actGetUsers = (users) => {
      return {
            type: Types.GET_USERS,
            payload: users 
      }
}