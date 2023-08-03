import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})

export const getAllProjectsAPI = () =>API.get('/projects/all')
export const getSingleProjectsAPI = (projectId) =>API.get(`/projects/${projectId}`)
export const createProjectAPI = (formData) =>API.post('/projects/create',formData)
export const updateProjectAPI = (updatedProjectData,projectId) =>API.put(`/projects/update/${projectId}`,updatedProjectData)
export const deleteProjectAPI = (projectId) =>API.delete(`/projects/delete/${projectId}`)

