import axios from "axios";

export const fetchTasks = () => {
  return axios.get("/api/tasks/");
};