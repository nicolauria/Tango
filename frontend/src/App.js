import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import SplashPage from './components/splash';
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import MainApp from './components/main_app';
import NavbarContainer from './components/navbar/navbar_container';
import CreateProjectFormContainer from './components/projects/create_project_form_container';
import TaskIndexContainer from './components/tasks/tasks_index_container';
import NavBarContainer from './components/navbar/navbar_container';


class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />

        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/tasks" component={TaskIndexContainer}/>
          <ProtectedRoute exact path="/new_project" component={CreateProjectFormContainer} />
          <ProtectedRoute exact path="/" component={MainApp} />
          <Route path="/" component={SplashPage} />
          <ProtectedRoute path="/" component={MainApp} />
        </Switch>
      </div>
    );
  }
}

export default App;
