import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser, clearErrors } from '../../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return{
        errors: errrors.session,
        formType: 'signup',    
        navLink: <Link to="/login">Log in instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: (user) => dispatch(registerUser(user)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));