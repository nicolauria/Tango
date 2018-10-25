import React from 'react'
import './navbar.css'

class NavBar extends React.Component {

    render() {
      let navbar = <div></div>;
      if (this.props.currentUserName) {
        navbar = <h1>Hello, {this.props.currentUserName}</h1>;
      } else {
        navbar = <h1>Tango</h1>;
      }

      return(
        <div className="navbar">
          { navbar }
          <span className="logout" onClick={this.props.logout}>Log Out</span>
        </div>
      )
    }
}

export default NavBar;
