import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signInAction } from '../../store/actions/auth'
import './LoginContainer.css'
import { Grid, Button } from '@material-ui/core'

const LoginContainer = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const changeLogin = (value) => setLogin(value)

  const changePassword = (value) => setPassword(value)

  const checkerFail = () => alert('Inputs are not valid')

  const checkerSuccess = () => {
    dispatch(signInAction())
    history.push('/')
  }

  const rulesChecker = () => login && password
    ? checkerSuccess()
    : checkerFail()

  return (
    <Grid container className="login-container">
      <Grid item xs={12}>
        <label>Login</label>
        <input onChange={event => changeLogin(event.target.value)} value={login} className="login-input" />
      </Grid>
      <Grid item xs={12}>
        <label>Password</label>
        <input onChange={event => changePassword(event.target.value)} value={password} className="password-input" />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={rulesChecker} variant="contained" color="primary">
          Sign In
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginContainer

