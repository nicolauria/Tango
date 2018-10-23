import {connect} from 'react-redux'

import { logoutUser } from '../../util/session_api_util';
import NavBar from './navbar';

const mapStateToProps = ({session}) => {
    return({
        currentUser: session
    });
};

const mapDispatchToProps = dispatch => {
    return({
        logout: () => dispatch(logoutUser())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
