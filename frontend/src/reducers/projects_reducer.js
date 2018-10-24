
import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT} from '../actions/projects_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            return merge({}, state, {[action.project.id]: action.projecct});
        default:
            return state;

    }
}

export default ProjectsReducer;

