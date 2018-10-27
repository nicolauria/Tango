import React from 'react';
import ProjectShow from './project_index/project_show_container';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import TaskIndexContainer from './tasks/tasks_index_container';

class MainApp extends React.Component{


  

  render(){
    let redirect;
    if (this.props.loggedIn){
      redirect = (
        <div>
          <ProjectShow/>
          <TaskIndexContainer />
        </div>
      )
    } else {
      redirect = (
        <div>
          <Redirect to="/splash"/>
        </div>
      )
    }
    return(
      <div>
        {redirect}
      </div>
  )}
}


const mapStateToProps = state => {
  return ({
    loggedIn: Boolean(state.session.id)  
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    openModal: (modal) => dispatch(openModal(modal))

  });
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
