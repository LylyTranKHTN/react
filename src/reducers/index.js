import { combineReducers } from 'redux';
import users from '../components/listUsers/reducer'

const appReducers = combineReducers({
      users
})

export default appReducers;