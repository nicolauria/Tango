import React from 'react'

class NavBar extends React.Component {

    render() {
      return(
        <div>
          <h1>HELLO</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      )
    }
}

export default NavBar;
