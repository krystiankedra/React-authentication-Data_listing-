import React, { useEffect } from 'react'
import CardWrapper from '../CardWrapper/CardWrapper'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserAction, setUserAction } from '../../store/actions/user'
import { Divider, Button } from '@material-ui/core'

const UserContainer = () => {

  const history = useHistory()
  const route = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    const id = route.params.id
    dispatch(setUserAction({ id }))

    return () => {
      dispatch(clearUserAction())
    }
  }, [])

  const user = useSelector(({ userReducer }) => userReducer.user)

  const navigateToUsersList = () => history.push('/users')

  return (
    <CardWrapper title={user.name}>
      <Button onClick={navigateToUsersList} variant="contained" color="primary">
        Back
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/users">
          Back from Link
        </Link>
      </Button>
      <Divider />
      <p>Username: {user.username}</p>
      <p>Website: {user.website}</p>
      <p>Email: {user.email}</p>
    </CardWrapper>
  )
}

export default UserContainer
