import axios from "axios";

 export const fetchTasks = () => {
  return axios.get("/api/tasks/");
}; 

export const createTask = (task) => {
    return axios.post("/api/tasks/", task)
};

export const updateTask = (task) => {
    return axios.put(`/api/tasks/${task._id}`, task)
}
