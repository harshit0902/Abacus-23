const express = require('express')
const router = express.Router()

const controllers = require('../controllers/auth.controller')

router.post('/register', controllers.registerUser)

router.post('/login', controllers.loginUser)

router.delete('/logout', controllers.logoutUser)

router.post('/forgot-password', controllers.forgotPassword)

module.exports = router