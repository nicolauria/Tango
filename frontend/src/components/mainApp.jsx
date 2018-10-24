import React from 'react';
import {Link  }from 'react-router-dom'

const MainApp = () => {
    return(
        <div>
            <h1>Main Page</h1>
            <Link to="/new_project">NEW PROJECT</Link>
            <h2>what happened</h2>
        </div>
    )
}