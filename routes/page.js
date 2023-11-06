const express  = require('express')
const { getPage, createPage, updatePage, deletePage } = require('../controllers/pageController.js')
const router = express.Router()

// router.get('/all',getAllProjects)
router.get('/:id',getPage)
router.post('/create',createPage)
router.put('/update/:id',updatePage)
router.delete('/delete/:id',deletePage)

module.exports = router