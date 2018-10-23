import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import SplashPage from './components/splash';
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import placeHolder from './components/placeholder';


class App extends Component {
  render() {
    return (
      <div>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SplashPage}/>
      </div>
    );
  }
}

export default App;
