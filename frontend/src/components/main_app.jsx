import React from 'react';
import {connect} from 'react-redux'
import NavBarContainer from './navbar/navbar_container';
import {Link} from 'react-router-dom'
import Modal from './modals/modal'
import {openModal} from '../actions/modal_actions'

class MainApp extends React.Component{


  render(){
    return(
      <div>
          <Modal />
          <NavBarContainer />
          <h1>Main Page</h1>
            <button onClick={() => this.props.openModal('project_create')}>New Project</button>
            <h2>what happened</h2>
      </div>
  )}
}

// const mapStateToProp = () => {
//   return({
    
//   })
// }

const mapDispatchToProps = (dispatch) => {
  return({
    openModal: (modal) => dispatch(openModal(modal))

  });
}

export default connect(null, mapDispatchToProps)(MainApp)