import React from 'react'
import User from './User/User'
import Grid from '@material-ui/core/Grid';
import { withSearchContextStore } from '../../../context/SearchContextStore'

const UsersList = ({ users, action, buttonListProperties, searchContext }) => {

  const renderUsersList = () => users.filter(
    ({ name }) => name.toLocaleLowerCase().includes(searchContext.searchedValue.toLocaleLowerCase())
  ).map(user =>
    <Grid key={user.id} item xs={12} sm={6}>
      <User user={user} action={action} buttonListProperties={buttonListProperties} />
    </Grid>
  )

  return (
    <Grid container spacing={3}>
      {renderUsersList()}
    </Grid>
  )
}

export default withSearchContextStore(UsersList)
