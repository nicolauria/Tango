import merge from 'lodash/merge';
import { RECEIVE_ALL_TASKS, RECEIVE_TASK } from '../actions/tasks_actions';

const TasksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        case RECEIVE_TASK:
            return merge({}, state, {[action.task.id]: action.task});
        default:
            return state;
    }
}

export default TasksReducer;