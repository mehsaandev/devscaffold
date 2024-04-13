const express  = require('express')
const {getAllRoutes,createRoute,deleteRoute,getRoute,updateRoute} = require('../controllers/routeController.js')
const router = express.Router()

router.get('/all',getAllRoutes)
router.get('/:id',getRoute)
router.post('/create',createRoute)
router.put('/update/:id',updateRoute)
router.delete('/delete/:id',deleteRoute)

module.exports = router