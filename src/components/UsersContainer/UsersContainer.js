import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import UsersList from './UsersList/UsersList'
import CardWrapper from '../CardWrapper/CardWrapper'
import UsersSearch from './UsersSearch/UsersSearch'
import { SearchContextStore } from '../../context/SearchContextStore'
import './UsersContainer.css'
import {
  setUsersAction,
  addUserToSelectedUsersListAction,
  removeUserFromSelectedUsersListAction,
  removeUserFromUsersListAction,
  addUserToUsersListAction,
  clearUsersListAction,
  clearSelectedUsersListAction
} from '../../store/actions/users'

const UsersContainer = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUsersAction())

    return () => {
      dispatch(clearUsersListAction())
      dispatch(clearSelectedUsersListAction())
    }
  }, [])

  const users = useSelector(({ usersReducer }) => usersReducer.users)
  const selectedUsers = useSelector(({ usersReducer }) => usersReducer.selectedUsers)

  const scrollIntoViewUserCard = ({ id }) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 500)
  }

  const actionSelectedUsersList = (paylad) => {
    dispatch(addUserToSelectedUsersListAction(paylad))
    dispatch(removeUserFromUsersListAction(paylad))
    scrollIntoViewUserCard(paylad)
  }

  const actionUsersList = (paylad) => {
    dispatch(removeUserFromSelectedUsersListAction(paylad))
    dispatch(addUserToUsersListAction(paylad))
    scrollIntoViewUserCard(paylad)
  }

  const buttonListProperties = ({ id }) => {
    const includes = selectedUsers.some(user => user.id === id)
    return includes ? { text: 'Remove', color: 'secondary' } : { text: 'Add', color: 'primary' }
  }

  return (
    <SearchContextStore>
      <UsersSearch />
      <Grid container spacing={2} className="custom-container">
        <Grid item xs={12}>
          <CardWrapper title={`Selected Users: ${selectedUsers.length}`}>
            <UsersList
              users={selectedUsers}
              action={actionUsersList}
              buttonListProperties={buttonListProperties}
            />
          </CardWrapper>
        </Grid>
        <Grid item xs={12}>
          <CardWrapper title={`Users List: ${users.length}`}>
            <UsersList
              users={users}
              action={actionSelectedUsersList}
              buttonListProperties={buttonListProperties}
            />
          </CardWrapper>
        </Grid>
      </Grid>
    </SearchContextStore>
  )
}

export default UsersContainer
