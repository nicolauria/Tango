import React from 'react';
import { Link } from 'react-router-dom'
import ProjectShow from './project_show/project_show_container';

const MainApp = () => {
  return(
      <div>
        <Link to="/new_project">NEW PROJECT</Link>
        <ProjectShow />
      </div>
  )
}

export default MainApp;
