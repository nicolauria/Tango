import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import WebChart from './web';

const mapStateToProps = (state, ownProps) => {
    return{
        project: ownProps.project
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebChart));