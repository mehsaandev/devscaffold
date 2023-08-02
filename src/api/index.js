import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/auth'})

export const getAllProjectsAPI = () =>API.get('/all')
export const createProjectAPI = (formData) =>API.post('/')