import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import SplashPage from './components/splash';
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import placeHolder from './components/placeholder';
import MainApp from './components/main_app';
import CreateProjectFormContainer from './components/projects/create_project_form_container';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <ProtectedRoute exact path="/" component={MainApp} />
          <Route exact path="/" component={SplashPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
