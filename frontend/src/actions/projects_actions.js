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
    debugger
    return ({
        type: RECEIVE_PROJECT_ERRORS,
        errors
    })
}

export const fetchProjects = () => dispatch => (
    ProjectApiUtil.fetchProjects()
        .then(response => dispatch(receiveAllProjects(response.data)))
        .catch(errors => dispatch(receiveProjectErrors(errors.response.data)))   
);

export const fetchProject = (projectId) => dispatch => (
    ProjectApiUtil.fetchProject(projectId)
        .then(response => dispatch(receiveProject(response.data)))
        .catch(errors => dispatch(receiveProjectErrors(errors.response.data)))   
);

export const createProject = (project) => dispatch => (
    ProjectApiUtil.createProject(project)

        .then(response => dispatch(receiveProject(response.data)))
        .catch(errors => dispatch(receiveProjectErrors(errors.response.data)))   
);

