import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core'

const Navigation = () => {

  const history = useHistory()

  const [currentNavigation, setCurrentNavigation] = useState(0)

  const navigationItems = [
    { label: 'Home', route: '/' },
    { label: 'Users List', route: '/users' },
    { label: 'Images List', route: '/images' }
  ]

  const navigateTo = value => {
    setCurrentNavigation(value)
    const selectedRoute = navigationItems.find((_, idx) => idx === value)
    history.push(selectedRoute.route)
  }

  const renderNavigationItems = () => navigationItems.map(({ label, route }, idx) =>
    <BottomNavigationAction key={label} label={label} to={route} />
  )

  return (
    <BottomNavigation
      value={currentNavigation}
      onChange={(_, newValue) => navigateTo(newValue)}
      showLabels
      className="nav primary"
    >
      {renderNavigationItems()}
    </BottomNavigation>
  )
}

export default Navigation
