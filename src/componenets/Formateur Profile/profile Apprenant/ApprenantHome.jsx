import React from 'react'
import ApprenantAside from './apprenantAside'
import { Outlet } from 'react-router-dom'

function ApprenantHome() {

  return (
    <div>
        <ApprenantAside></ApprenantAside>
        <Outlet> </Outlet>
    </div>
  )
}

export default ApprenantHome