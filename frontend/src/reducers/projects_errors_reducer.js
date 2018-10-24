import {RECEIVE_PROJECT_ERRORS, RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT} from '../actions/projects_actions';

const ProjectsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_PROJECTS:
            return [];
        case RECEIVE_PROJECT:
            return [];
        case RECEIVE_PROJECT_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default ProjectsErrorsReducer;