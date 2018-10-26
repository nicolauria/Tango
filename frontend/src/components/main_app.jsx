import React from 'react';

import { Link } from 'react-router-dom'
import ProjectShow from './project_index/project_show_container';

import {connect} from 'react-redux'
import Modal from './modals/modal'
import {openModal} from '../actions/modal_actions'

class MainApp extends React.Component{

  render(){
    return(
      <div>
        <ProjectShow />
        <Modal />
      </div>
  )}
}


const mapDispatchToProps = (dispatch) => {
  return({
    openModal: (modal) => dispatch(openModal(modal))

  });
}

export default connect(null, mapDispatchToProps)(MainApp)
