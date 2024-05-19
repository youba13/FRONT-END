import React from 'react'
import ApprenantAside from './FormateurAside'
import { Outlet } from 'react-router-dom'
import FormateurAside from './FormateurAside'

function FormateurtHome() {

  return (
    <div>
        <FormateurAside></FormateurAside>
        <Outlet> </Outlet>
    </div>
  )
}

export default FormateurtHome