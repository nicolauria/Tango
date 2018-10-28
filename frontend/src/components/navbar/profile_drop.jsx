import React from 'react';
import dropDownImg from "./dropDownImg.png";
import { Link } from 'react-router-dom';

class ProfileDrop extends React.Component {
    constructor(props){
        super(props)
        this.state = { menuDropped: false }
        this.toggleDrop = this.toggleDrop.bind(this)
    }

    toggleDrop() {
        console.log(this.state)
        this.setState(prevState => ({ menuDropped: !prevState.menuDropped }))
    }

    render(){
        let { logout, currentUserName, history } = this.props;
        const { menuDropped } = this.state;
        return <div onClick={this.toggleDrop} className={menuDropped ? "drop-down dropped" : "drop-down"}>
            <img alt="Profile" src={dropDownImg} />

            {menuDropped && <ul className="drop-menu">
                <li className="greet">Hello, {currentUserName}</li>

                <Link className="links" to="/main">
                  Projects
                </Link>

                
                  <Link className="links" to="/tasks">
                    My Tasks
                  </Link>
                
                <li className="links" onClick={logout}>
                  Logout
                </li>
              </ul>}
          </div>;
    }
}

export default ProfileDrop;