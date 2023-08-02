import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/auth'})

export const getAllProjectsAPI = () =>API.get('/all')
export const getSingleProjectsAPI = (projectId) =>API.get(`/${projectId}`)
export const createProjectAPI = (formData) =>API.post('/create',formData)
export const updateProjectAPI = (updatedProjectData,projectId) =>API.put(`/update/${projectId}`,updatedProjectData)
export const deleteProjectAPI = (projectId) =>API.delete(`/delete/${projectId}`)

