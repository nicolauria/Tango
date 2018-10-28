import merge from 'lodash/merge';
import { RECEIVE_ALL_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/tasks_actions';

const TasksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_TASKS:
            let newState = {}
            action.tasks.forEach(task => {
            newState[task._id] = task
            });
            return newState;
        case RECEIVE_TASK:
            return merge({}, state, {[action.task._id]: action.task});
        case REMOVE_TASK:
            debugger
            newState = merge({}, state)
            delete newState[action.taskId]
            return newState;
        default:
            return state;
    }
}

export default TasksReducer;
