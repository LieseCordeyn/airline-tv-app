import React from 'react'
import './header.scss'
import airplane from '../../images/airplane.png'


function header(){
   return( <header>
       <img src={airplane} alt="airplane" id="airplane"/>
          <p id="homeScreen">airplane-tv</p>
      </header>)
}

export default header