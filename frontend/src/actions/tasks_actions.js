import * as TasksApiUtil from '../util/tasks_api_util';

export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK"
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
export const REMOVE_TASK = "REMOVE_TASK";

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

const removeTaskState = taskId => ({
  type: REMOVE_TASK,
  taskId
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

export const updateTask = (task) => dispatch => (
    TasksApiUtil.updateTask(task)
        .then(response => dispatch(receiveTask(response.data)))
        .catch(errors => dispatch(receiveTaskErrors(errors)))
)

export const removeTask = task => dispatch => {
  return TasksApiUtil.removeTask(task)
    .then(response => {
      return dispatch(removeTaskState(response.data))})
    .catch(errors => dispatch(receiveTaskErrors(errors)))
}
