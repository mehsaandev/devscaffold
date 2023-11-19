const express  = require('express')
const { getPage, createPage, updatePage, deletePage,getAllPagesOfProject ,renamePage} = require('../controllers/pageController.js')
const router = express.Router()

// router.get('/all',getAllProjects)
router.get('/:id',getPage)
router.get('/getPagesOfProject/:id',getAllPagesOfProject)
router.post('/create',createPage)
router.put('/update/:id',updatePage)
router.put('/rename/:id',renamePage)
router.delete('/delete/:id',deletePage)

module.exports = router