import {
  SIGN_IN,
  SIGN_OUT
} from './types'
import { v4 as uuidv4 } from 'uuid'

export const signInAction = (payload) => ({
  type: SIGN_IN,
  payload: payload || uuidv4()
})

export const signOutAction = () => ({
  type: SIGN_OUT
})