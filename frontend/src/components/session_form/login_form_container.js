import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loginUser, clearErrors } from '../../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.session,
        formType: 'login',    
        navLink: <Link to="/signup">Log in instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors),
        processForm: (user) => dispatch(loginUser(user)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));