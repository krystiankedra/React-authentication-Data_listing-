import {
  FETCH_USERS,
  ADD_USER_TO_SELECTED_USERS_LIST,
  REMOVE_USER_FROM_SELECTED_USERS_LIST,
  ADD_USER_TO_USERS_LIST,
  REMOVE_USER_FROM_USERS_LIST,
  CLEAR_USERS_LIST,
  CLEAR_SELECTED_USERS_LIST
} from '../actions/types'

const initState = {
  users: [],
  selectedUsers: []
}

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      return { ...state, users: [...state.users, action.payload] }
    }
    case ADD_USER_TO_SELECTED_USERS_LIST: {
      return { ...state, selectedUsers: [...state.selectedUsers, action.payload] }
    }
    case REMOVE_USER_FROM_SELECTED_USERS_LIST: {
      const updatedSelectedUsers = state.selectedUsers.filter(user => user.id !== action.payload.id)
      return { ...state, selectedUsers: updatedSelectedUsers }
    }
    case ADD_USER_TO_USERS_LIST: {
      return { ...state, users: [...state.users, action.payload] }
    }
    case REMOVE_USER_FROM_USERS_LIST: {
      const updatedUsers = state.users.filter(user => user.id !== action.payload.id)
      return { ...state, users: updatedUsers }
    }
    case CLEAR_USERS_LIST: {
      return { ...state, selectedUsers: [] }
    }
    case CLEAR_SELECTED_USERS_LIST: {
      return { ...state, users: [] }
    }
    default: {
      return state
    }
  }
}
