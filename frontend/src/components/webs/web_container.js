import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import WebChart from './web_chart';
import {withRouter} from 'react-router-dom'
import { removeTask } from '../../actions/tasks_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        // project: ownProps.project
        project: state.entities.projects[ownProps.match.params.projectId],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        removeTask: task => dispatch(removeTask(task))
        // fetchProject: (projectId) => this.props.fetchProject(project._id)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebChart));
