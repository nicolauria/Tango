import * as ProjectApiUtil from '../util/projects_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

const receiveAllProjects = (projects) => {
    return ({
        type: RECEIVE_ALL_PROJECTS,
        projects
    })
}

const receiveProject = (project) => {
    return ({
        type: RECEIVE_PROJECT,
        project
    })
}

const receiveProjectErrors = (errors) => {
    return ({
        type: RECEIVE_PROJECT_ERRORS,
        errors
    })
}

export const fetchProjects = () => dispatch => (
    ProjectApiUtil.fetchProjects()
        .then( 
           projects => dispatch(receiveAllProjects(projects)),
           err => dispatch(receiveProjectErrors(err))
));

export const fetchProject = (project) => dispatch => (
    ProjectApiUtil.fetchProject(project)
        .then( 
        project => dispatch(receiveProject(project)),
        err => dispatch(receiveProjectErrors(err))
));

export const createProject = (project) => dispatch => (
    ProjectApiUtil.createProject(project)
        .then( 
        project => dispatch(receiveProject(project)),
        err => dispatch(receiveProjectErrors(err))
));