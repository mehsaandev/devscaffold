import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})


// Authentication API's
export const signInAPI = (formData) =>API.post('/user/login',formData)
export const signUpAPI = (formData) =>API.post('/user/create',formData)


// Project API's
export const getAllProjectsAPI = () =>API.get('/projects/all')
export const getSingleProjectsAPI = (projectId) =>API.get(`/projects/${projectId}`)
export const createProjectAPI = (formData) =>API.post('/projects/create',formData)
export const updateProjectAPI = (updatedProjectData,projectId) =>API.put(`/projects/update/${projectId}`,updatedProjectData)
export const deleteProjectAPI = (projectId) =>API.delete(`/projects/delete/${projectId}`)
export const publishProjectAPI = (projectId) =>API.put(`/projects/publish/${projectId}`)
export const unPublishProjectAPI = (projectId) =>API.put(`/projects/unpublish/${projectId}`)
export const trashProjectAPI = (projectId) =>API.put(`/projects/trash/${projectId}`)
export const restoreProjectAPI = (projectId) =>API.put(`/projects/restore/${projectId}`)


// page API's
export const getPagesOfProjectAPI = (projectId) =>API.get(`/page/getPagesOfProject/${projectId}`)
export const getPageAPI = (pageId) =>API.get(`/page/${pageId}`)
export const createPageAPI = (formData) =>API.post(`/page/create/${formData}`)
export const updatePageAPI = (updatedPageData,pageID) =>API.put(`/page/update/${pageID}`,updatedPageData)
export const renamePageAPI = (updatedPageData,pageID) =>API.put(`/page/rename/${pageID}`,updatedPageData)
export const deletePageAPI = (pageID) =>API.delete(`/page/delete/${pageID}`)

// component API's



export const exportComponentsAPI = (components) =>API.post('/navbar/create',components)

