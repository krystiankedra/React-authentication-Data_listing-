import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import UsersContainer from '../components/UsersContainer/UsersContainer'
import UserContainer from '../components/UserContainer/UserContainer'
import ImagesContainer from '../components/ImagesContainer/ImagesContainer'
import HomeContainer from '../components/HomeContainer/HomeContainer'
import Navigation from '../components/Navigation/Navigation'
import LoginContainer from '../components/LoginContainer/LoginContainer'
import LogoutContainer from '../components/LogoutContainer/LogoutContainer'
import { useSelector } from 'react-redux'

const Router = () => {

  const isLogged = useSelector(({ authReducer }) => authReducer.isLogged)

  return (
    <BrowserRouter>
      {isLogged ? <LogoutContainer /> : ''}
      {isLogged ? <Navigation /> : '' }
      <Route path="/" exact component={HomeContainer} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/users" exact component={UsersContainer} />
      <Route path="/users/:id" exact component={UserContainer} />
      <Route path="/images" exact component={ImagesContainer} />
    </BrowserRouter>
  )
}

export default Router
