import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import WebChart from './web_chart';
import {withRouter} from 'react-router-dom'
import { fetchTasks, removeTask, fetchProjectTasks } from '../../util/tasks_api_util';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        tasks: Object.values(state.entities.tasks)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal, data) => dispatch(openModal(modal, data)),
        removeTask: task => dispatch(removeTask(task)),
        fetchProjectTasks: projectId => dispatch(fetchProjectTasks(projectId))
        // fetchProject: (projectId) => this.props.fetchProject(project._id)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebChart));
