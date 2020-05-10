import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { usersReducer } from './users'
import { userReducer } from './user'

export default combineReducers({
  authReducer,
  usersReducer,
  userReducer
})
