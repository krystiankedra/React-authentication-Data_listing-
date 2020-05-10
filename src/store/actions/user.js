import {
  SET_USER,
  CLEAR_USER
} from './types'
import { fetchUserById } from '../../api/users'

export const setUserAction = ({ id }) => async dispatch => {
  const response = await fetchUserById(id)
  dispatch({ type: SET_USER, payload: response })
}

export const clearUserAction = () => ({
  type: CLEAR_USER
})
