import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from '../../router/Router'
import { signInAction } from '../../store/actions/auth'
import { getCookie } from '../../core/cookie'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getCookie('token-localhost')
    if (auth) {
      dispatch(signInAction())
    }
  }, [])

  return (
    <Router />
  )
}

export default App
