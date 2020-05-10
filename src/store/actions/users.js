import {
  FETCH_USERS,
  ADD_USER_TO_SELECTED_USERS_LIST,
  REMOVE_USER_FROM_SELECTED_USERS_LIST,
  ADD_USER_TO_USERS_LIST,
  REMOVE_USER_FROM_USERS_LIST,
  CLEAR_USERS_LIST,
  CLEAR_SELECTED_USERS_LIST
} from './types'
import { mergeUsersWithPosts } from '../../api/shared'

export const setUsersAction = () => async dispatch => {
  const iterator = mergeUsersWithPosts()
  for await (const user of iterator) {
    dispatch({ type: FETCH_USERS, payload: user })
  }
}

export const addUserToSelectedUsersListAction = payload => ({
  type: ADD_USER_TO_SELECTED_USERS_LIST,
  payload
})

export const removeUserFromSelectedUsersListAction = payload => ({
  type: REMOVE_USER_FROM_SELECTED_USERS_LIST,
  payload
})

export const addUserToUsersListAction = payload => ({
  type: ADD_USER_TO_USERS_LIST,
  payload
})

export const removeUserFromUsersListAction = payload => ({
  type: REMOVE_USER_FROM_USERS_LIST,
  payload
})

export const clearUsersListAction = () => ({
  type: CLEAR_USERS_LIST
})

export const clearSelectedUsersListAction = () => ({
  type: CLEAR_SELECTED_USERS_LIST
})
