import {
  SET_USER,
  CLEAR_USER
} from '../actions/types'

const initState = {
  user: {}
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload }
    }
    case CLEAR_USER: {
      return { ...state, user: {} }
    }
    default: {
      return state
    }
  }
}
