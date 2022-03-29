import React from 'react'

function header(){
   return( <header>
          <p id="homeScreen">airplane-tv</p>
          <input type="text" name="country" id="country"/>
          <button type="submit" id="submitCountry">submit</button>
      </header>)
}

export default header