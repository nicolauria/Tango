import React from 'react';

import { Link } from 'react-router-dom'
import ProjectShow from './project_index/project_show_container';

import {connect} from 'react-redux'
import Modal from './modals/modal'
import {openModal} from '../actions/modal_actions'
import SplashPage from './splash';


class MainApp extends React.Component{


  doctorIsIn(){
    return(
      <div className="main-page">
          <Modal />
          <h1>Main Page</h1>
            <button onClick={() => this.props.openModal('project_create')}>New Project</button>
            <h2>what happened</h2>
      </div>
    )
  }

  doctorIsOut(){
      return(
        <div className="splash-page-outer">
          <SplashPage />
        </div>
      )
  }

  render(){
    return(
      <div>
        {this.props.loggedIn ? this.doctorIsIn() : this.doctorIsOut()}
        <ProjectShow />
        <Modal />
      </div>
  )}
}

const mapStateToProps = ({session}) => {
  return({
    session: session,
    loggedIn: Boolean(session.id)
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    openModal: (modal) => dispatch(openModal(modal))

  });
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
