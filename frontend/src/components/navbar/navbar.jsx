import React from 'react'
import './navbar.css'

class NavBar extends React.Component {

    render() {
      return(
        <div className="navbar">
          <h1>Hello, {this.props.currentUser.name}</h1>
          <span className="logout" onClick={this.props.logout}>Log Out</span>
        </div>
      )
    }
}

export default NavBar;
