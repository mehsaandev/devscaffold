const express  = require('express')
const { createNavbar } = require('../controllers/navbarController.js')
const router = express.Router()

router.post('/create',createNavbar)

module.exports = router