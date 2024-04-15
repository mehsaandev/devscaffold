import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})



// Authentication API's
export const signInAPI = (formData) =>API.post('/user/login',formData)
export const signUpAPI = (formData) =>API.post('/user/create',formData)



// Project API's
export const getAllProjectsAPI = () =>API.get('/projects/all')
export const getPublishedProjectsAPI = () =>API.get('/projects/published')
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
export const createPageAPI = (formData) =>API.post(`/page/create/`,formData)
export const updatePageAPI = (updatedPageData,pageID) =>API.put(`/page/update/${pageID}`,updatedPageData)
export const renamePageAPI = (updatedPageData,pageID) =>API.put(`/page/rename/${pageID}`,updatedPageData)
export const deletePageAPI = (pageID) =>API.delete(`/page/delete/${pageID}`)

// component API's
export const getAllComponentsAPI = () =>API.get('/component/all')
export const getSingleComponentAPI = (compId) =>API.get(`/component/${compId}`)
export const createComponentAPI = (formData) =>API.post('/component/create',formData)
export const updateComponentAPI = (updatedCompData,compId) =>API.put(`/component/update/${compId}`,updatedCompData)
export const deleteComponentAPI = (compId) =>API.delete(`/component/delete/${compId}`)
export const publishComponentAPI = (compId) =>API.put(`/component/publish/${compId}`)
export const unPublishComponentAPI = (compId) =>API.put(`/component/unpublish/${compId}`)
export const trashComponentAPI = (compId) =>API.put(`/component/trash/${compId}`)
export const restoreComponentAPI = (compId) =>API.put(`/component/restore/${compId}`)

// route API's
export const getAllRoutesAPI = () =>API.get('/routes/all')
export const getSingleRouteAPI = (routeId) =>API.get(`/routes/${routeId}`)
export const createRouteAPI = (formData) =>API.post('/routes/create',formData)
export const updateRouteAPI = (updatedRouteData,routeId) =>API.put(`/routes/update/${routeId}`,updatedRouteData)
export const deleteRouteAPI = (routeId) =>API.delete(`/routes/delete/${routeId}`)



export const exportComponentsAPI = (components) =>API.post('/navbar/create',components)

