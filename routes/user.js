const express  = require('express')
const { register, login } = require('../controllers/usersController.js')
const router = express.Router()

router.post('/create',register)
router.post('/login',login)

module.exports = router