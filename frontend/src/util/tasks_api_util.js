import axios from "axios";

export const fetchTasks = () => {
  return axios.get("/api/tasks/");
};

export const fetchProjectTasks = projectId => {
  // debugger
  return axios.get(`/api/tasks/${projectId}`)
}

export const createTask = (task) => {
    return axios.post("/api/tasks/", task)
};

export const updateTask = (task) => {
    return axios.put(`/api/tasks/${task._id}`, task)
}

export const removeTask = task => {
  debugger
  return axios.delete(`/api/tasks/${task._id}`)
}
