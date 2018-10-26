import axios from "axios";



 export const fetchTasks = () => {
  return axios.get("/api/tasks/");
}; 

export const createTask = (task) => {
    return axios.post("/api/tasks/", task)
};
