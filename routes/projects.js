const express  = require('express')
const { getAllProjects, getProject, createProject, updateProject, deleteProject } = require('../controllers/projectController.js')
const router = express.Router()

router.get('/all',getAllProjects)
router.get('/:id',getProject)
router.post('/create',createProject)
router.put('/update/:id',updateProject)
router.delete('/delete/:id',deleteProject)

module.exports = router