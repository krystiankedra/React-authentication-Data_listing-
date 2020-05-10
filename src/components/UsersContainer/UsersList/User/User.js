import React from 'react'
import { withRouter } from 'react-router-dom'
import './User.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

const User = ({ user, action, buttonListProperties, history }) => {

  const buttonProps = buttonListProperties(user)

  const navigateToDetails = () => history.push(`/users/${user.id}`)

  const renderPostsList = () => user && user.posts && user.posts.map(post =>
    <Grid key={post.id} container spacing={2}>
      <Grid item xs={12}>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </Grid>
    </Grid>
  )

  return (
    <Card className="card-padding" id={user.id}>
      <CardHeader title={user.name} className="card-header" />
      <CardContent>
        <Grid item xs={12} className="content-text">
          Username: {user.username}
        </Grid>
        <Grid item xs={12} className="content-text">
          Email: {user.email}
        </Grid>
        <Grid item xs={12} className="content-text">
          Website: {user.website}
        </Grid>
        <Grid item xs={12} className="content-text">
          Phone: {user.phone}
        </Grid>
        <Grid item xs={12} className="content-text">
          Posts List:
          {renderPostsList()}
        </Grid>
      </CardContent>
      <CardActions>
        <Button onClick={() => action(user)} variant="contained" color={buttonProps.color}>
          {buttonProps.text}
        </Button>
        <Button onClick={navigateToDetails} variant="contained" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  )
}

export default withRouter(User)
