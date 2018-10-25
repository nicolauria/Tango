import {connect} from 'react-redux'

import { logoutUser } from '../../util/session_api_util';
import NavBar from './navbar';

const mapStateToProps = (state) => {
    return({
        // currentUser: state.entities.users[state.session.id]
        currentUserName: state.session.name
    });
};

const mapDispatchToProps = dispatch => {
    return({
        logout: () => dispatch(logoutUser())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
