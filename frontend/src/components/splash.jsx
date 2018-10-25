import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import './splash.scss';
import logo from './logoTango.png';

const SplashPage = () => {
    return (
        <div className="splash-page">
            <img alt="Tango" src={logo}/>
            <p>Here is a sentence that we can change</p>
            <SignupFormContainer />
        </div>
        );
}

export default SplashPage;