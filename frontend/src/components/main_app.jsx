import React from 'react';
import { Link } from 'react-router-dom'
import ProjectShow from './project_show/project_show_container';
import {connect} from 'react-redux'
import NavBarContainer from './navbar/navbar_container';
import Modal from './modals/modal'
import {openModal} from '../actions/modal_actions'

class MainApp extends React.Component{

  render(){
    return(
      <div>
        <button onClick={() => this.props.openModal('project_create')}>New Project</button>
        <ProjectShow />
        <Modal />
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
