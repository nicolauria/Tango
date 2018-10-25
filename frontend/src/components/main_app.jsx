import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import {Link} from 'react-router-dom'

const MainApp = () => {
  return(
      <div>
          <NavBarContainer />
          <h1>Main Page</h1>
          <Link to="/new_project">NEW PROJECT</Link>
            <h2>what happened</h2>
      </div>
  )
}

export default MainApp;
