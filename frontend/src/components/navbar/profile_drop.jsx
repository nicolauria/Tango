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
        let { logout, currentUserName } = this.props;
        const { menuDropped } = this.state;
        return <div onClick={this.toggleDrop} className={menuDropped ? "drop-down dropped" : "drop-down"}>
            <img alt="Profile" src={dropDownImg} />

            {menuDropped && <ul className="drop-menu">
                <li className="greet">Hello, {currentUserName}</li>
                <li className="links"><Link to="/main">Projects</Link></li>
                <li className="links"><Link to="/tasks">My Tasks</Link></li>
                <li className="links" onClick={logout}>Logout</li>
              </ul>}
          </div>;
    }
}

export default ProfileDrop;