const express  = require('express')
const {getAllRoutes,getAllRoutesOfProject, getRoute, createRoute, updateRoute, deleteRoute} = require('../controllers/routeController.js')
const router = express.Router()

router.get('/all',getAllRoutes)
router.get('/getRoutesOfProject/:id',getAllRoutesOfProject)
router.get('/:id',getRoute)
router.post('/create',createRoute)
router.put('/update/:id',updateRoute)
router.delete('/delete/:id',deleteRoute)

module.exports = router