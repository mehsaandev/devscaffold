const express  = require('express')
const { createComponent, deleteComponent, updateComponent, getComponent } = require('../controllers/componentController.js')
const router = express.Router()

// router.get('/all',getAllProjects)
router.get('/:id',getComponent)
router.post('/create',createComponent)
router.put('/update/:id',updateComponent)
router.delete('/delete/:id',deleteComponent)

module.exports = router