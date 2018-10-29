
import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT} from '../actions/projects_actions';
import merge from 'lodash/merge';

const ProjectsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_PROJECTS:
        // let newState = Object.assign({}, action.projects)
          let newState = {}
            action.projects.forEach(project => {
              newState[project._id] = project
            });
          return newState;
        case RECEIVE_PROJECT:
            return merge({}, state, {[action.project._id]: action.project});
        default:
            return state;

    }
}

export default ProjectsReducer;
