import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { signOutAction } from '../../store/actions/auth'

const LogoutContainer = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const buttonAction = () => {
    dispatch(signOutAction())
    history.push('/login')
  }

  return (
    <Button onClick={buttonAction} variant="contained" color="primary">
      Sign out
    </Button>
  )
}

export default LogoutContainer
