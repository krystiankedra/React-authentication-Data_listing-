import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const CardWrapper = ({ title, children }) => {
  return (
    <Card>
      <CardHeader title={title}  />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default CardWrapper
