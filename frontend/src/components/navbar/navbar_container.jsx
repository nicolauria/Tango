import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { logoutUser } from '../../util/session_api_util';
import NavBar from './navbar';

const mapStateToProps = (state) => {
    return({
        currentUserName: state.session.name
    });
};

const mapDispatchToProps = dispatch => {
    return({
        logout: () => dispatch(logoutUser())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
