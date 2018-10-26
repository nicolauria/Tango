import {connect} from 'react-redux';
import { fetchTasks } from '../../actions/tasks_actions';
import {fetchProject } from '../../actions/projects_actions';
import {openModal} from '../../actions/modal_actions';
import TasksIndex from './tasks_index';

const mapStateToProps = (state) => {
    return ({
        tasks: state.entities.tasks,
        projects: state.entities.projects
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTasks: () => dispatch(fetchTasks()),
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        openModal: (modal, data) => dispatch(openModal(modal, data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);

