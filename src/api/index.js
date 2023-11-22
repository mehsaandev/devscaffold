import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})


// Projects APIs
export const getAllProjectsAPI = () =>API.get('/projects/all')
export const getSingleProjectsAPI = (projectId) =>API.get(`/projects/${projectId}`)
export const createProjectAPI = (formData) =>API.post('/projects/create',formData)
export const updateProjectAPI = (updatedProjectData,projectId) =>API.put(`/projects/update/${projectId}`,updatedProjectData)
export const publishProjectAPI = (projectId) =>API.put(`/projects/publish/${projectId}`)
export const deleteProjectAPI = (projectId) =>API.delete(`/projects/delete/${projectId}`)

// Authentication API's
export const signInAPI = (formData) =>API.post('/user/login',formData)
export const signUpAPI = (formData) =>API.post('/user/create',formData)



// Pages APIs
export const getPagesOfProject = (projectId) =>API.get(`/page/getPagesOfProject/${projectId}`)





export const exportComponentsAPI = (components) =>API.post('/navbar/create',components)

