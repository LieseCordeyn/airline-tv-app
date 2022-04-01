import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './backButton.scss'


function backButton(){
  return(<div id="back">
      <Link to={`/`} id="linkButton">Back</Link>
      <Outlet />
  </div>)
}

export default backButton