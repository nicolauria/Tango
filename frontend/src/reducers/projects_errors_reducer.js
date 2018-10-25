import {RECEIVE_PROJECT_ERRORS, RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT} from '../actions/projects_actions';

const projectsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_PROJECTS:
            return [];
        case RECEIVE_PROJECT:
            return [];
        case RECEIVE_PROJECT_ERRORS:
            // need to change this to an array using Object.values then return the array
            return action.errors;
        default:
            return state;
    }
}

export default projectsErrorsReducer;