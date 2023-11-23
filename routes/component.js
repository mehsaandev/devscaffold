const express  = require('express')
const { createComponent, deleteComponent, updateComponent, getComponent, getAllComponents, publishComponent, unpublishComponent, moveToTrash, restoreFromTrash } = require('../controllers/componentController.js')
const router = express.Router()

router.get('/all',getAllComponents)
router.get('/:id',getComponent)
router.post('/create',createComponent)
router.put('/update/:id',updateComponent)
router.delete('/delete/:id',deleteComponent)
router.put('/publish/:id',publishComponent) 
router.put('/unpublish/:id',unpublishComponent)
router.put('/trash/:id',moveToTrash)
router.put('/restore/:id',restoreFromTrash)

module.exports = router