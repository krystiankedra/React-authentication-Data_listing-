import {
  SIGN_IN,
  SIGN_OUT
} from '../actions/types'

const initialState = {
  isLogged: false,
  token: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      document.cookie = `token-localhost=${action.payload}`
      return { ...state, isLogged: true, token: action.payload }
    }
    case SIGN_OUT: {
      document.cookie = 'token-localhost='
      return { ...state, isLogged: false, token: null }
    }
    default: {
      return state
    }
  }
}
