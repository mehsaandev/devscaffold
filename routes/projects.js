const express  = require('express')
const { getAllProjects, getProject, createProject, updateProject,publishProject,unpublishProject, moveToTrash,restoreFromTrash,deleteProjectPermanently } = require('../controllers/projectController.js')
const router = express.Router()

router.get('/all',getAllProjects)
router.get('/:id',getProject)
router.post('/create',createProject)
router.put('/update/:id',updateProject)
router.put('/publish/:id',publishProject)
router.put('/unpublish/:id',unpublishProject)
router.put('/trash/:id',moveToTrash)
router.put('/restore/:id',restoreFromTrash)
router.delete('/delete/:id',deleteProjectPermanently)

module.exports = router