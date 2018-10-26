import React from 'react';
import dropDownImg from "./dropDownImg.png";

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
        const { menuDropped } = this.state;
        return (
            <div onClick={this.toggleDrop} className="dropDown">
                <img alt="Profile" src={dropDownImg} />

                {menuDropped && <ul><li>Hellloooooo</li></ul>}
            </div>
        )
    }
}

export default ProfileDrop;