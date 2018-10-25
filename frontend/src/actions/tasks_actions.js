import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK"
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";


const receiveAllTasks = tasks => ({
    type: RECEIVE_ALL_TASKS,
    tasks 
})

const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
})

const receiveTaskErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
})

export const fetchTasks = () => dispatch => (
    TasksApiUtil.fetchTasks()
        .then(response => dispatch(receiveAllTasks(response.data)))
        .catch(errors => dispatch(receiveTaskErrors(errors)))
)

export const createTask = (task) => dispatch => (
    TasksApiUtil.createTask(task)
        .then(response => dispatch(receiveTask(response.data)))
        .catch(errors => dispatch(receiveTaskErrors(errors)))
)
