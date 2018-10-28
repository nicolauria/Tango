import merge from 'lodash/merge';
import { RECEIVE_ALL_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_PROJECT_TASKS,
  REMOVE_TASKS_STATE } from '../actions/tasks_actions';

const TasksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_ALL_TASKS:
            newState = {}
            action.tasks.forEach(task => {
            newState[task._id] = task
            });
            return newState;
        case RECEIVE_PROJECT_TASKS:
            debugger
            newState = {}
            action.tasks.forEach(task => {
            newState[task._id] = task
            });
            return newState;
        case RECEIVE_TASK:
            return merge({}, state, {[action.task._id]: action.task});
        case REMOVE_TASK:
            newState = merge({}, state)
            delete newState[action.taskId]
            return newState;
        case REMOVE_TASKS_STATE:
            return {};
          break;
        default:
            return state;
    }
}

export default TasksReducer;
