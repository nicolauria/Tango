import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss';
import ProfileDrop from './profile_drop';
import textLogo from './textLogo.png';

class NavBar extends React.Component {
    render() {
      let { logout, currentUserName } = this.props;
      let right = <div className="nav-right">
        <Link to="/login" >Login</Link>
        <Link to="/signup" >Register</Link>
      </div>;

      
      if (this.props.currentUserName) {
        right = <ProfileDrop 
          logout={logout} 
          currentUserName={currentUserName} />
      }

      return <div className="navbar">
          <Link to={ this.props.currentUserName ? "/" : "/splash"} className="text-logo">
            <img alt="Tango" src={textLogo} />
          </Link>
          {right}
        </div>;
    }
}

export default NavBar;
