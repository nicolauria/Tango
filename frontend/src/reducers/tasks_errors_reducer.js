import {
    RECEIVE_ALL_TASKS,
    RECEIVE_TASK,
    RECEIVE_TASK_ERRORS
} from '../actions/tasks_actions';

const TasksErrorsReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_ALL_TASKS:
            return [];
        case RECEIVE_TASK:
            return [];
        case RECEIVE_TASK_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default TasksErrorsReducer;

