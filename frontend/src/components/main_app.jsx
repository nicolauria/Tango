import React from 'react';
import { Link } from 'react-router-dom'
import ProjectShow from './project_show/project_show_container';
import {connect} from 'react-redux'
import NavBarContainer from './navbar/navbar_container';
import Modal from './modals/modal'
import {openModal} from '../actions/modal_actions'
import SplashPage from './splash';


class MainApp extends React.Component{

<<<<<<< HEAD

  doctorIsIn(){
    return(
      <div className="main-page">
          <Modal />
          <h1>Main Page</h1>
            <button onClick={() => this.props.openModal('project_create')}>New Project</button>
            <h2>what happened</h2>
=======
  render(){
    return(
      <div>
        <button onClick={() => this.props.openModal('project_create')}>New Project</button>
        <ProjectShow />
        <Modal />
>>>>>>> dffb42c3b3a08021ff49415f5c502c18f95af6f6
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
      </div>
  )}
}

<<<<<<< HEAD
const mapStateToProps = ({session}) => {
  return({
    session: session,
    loggedIn: Boolean(session.id)
  })
}
=======
// const mapStateToProp = () => {
//   return({

//   })
// }
>>>>>>> dffb42c3b3a08021ff49415f5c502c18f95af6f6

const mapDispatchToProps = (dispatch) => {
  return({
    openModal: (modal) => dispatch(openModal(modal))

  });
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
=======
export default connect(null, mapDispatchToProps)(MainApp)
>>>>>>> dffb42c3b3a08021ff49415f5c502c18f95af6f6
