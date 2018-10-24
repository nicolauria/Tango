import axios from 'axios';


export const fetchProjects = () => {
    return axios.get('/api/projects/',
      { headers: { "Authorization": localStorage.jwtToken }})
}

export const fetchProject = (project_id) => {
    return axios.get(`/api/projects/${project_id}`)
}

export const createProject = (project) => {
    return axios.post('/api/projects/', project)
}
