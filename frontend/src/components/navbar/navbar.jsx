import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss';
import ProfileDrop from './profile_drop';

class NavBar extends React.Component {
    render() {
      let right = <div className="nav-right">
        <Link to="/login" >Register</Link>
        <Link to="register" >Sign in</Link>
      </div>;
      if (this.props.currentUserName) {
        right = <ProfileDrop logout={this.props.logout} />
      } else {
        right = <div></div>
      }

      return <div className="navbar">
          <h1>Tango</h1>
          {right}
        </div>;
    }
}

export default NavBar;
