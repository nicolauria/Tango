import {connect} from 'react-redux';
import { fetchTasks } from '../../actions/tasks_actions';
import TasksIndex from './tasks_index'

const mapStateToProps = (state, ownProps) => {
    return ({
        tasks: state.entities.tasks,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTasks: () => dispatch(fetchTasks()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksIndex);

