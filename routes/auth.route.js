const express = require('express')
const AuthController = require('../controllers/auth.controller')

let router = express.Router()

router.get('/login', AuthController.getLogin)
router.get('/register', AuthController.getRegister)
router.get('/logout', AuthController.getLogout)
router.post('/login', AuthController.postLogin)
router.post('/register', AuthController.postRegister)
router.get('/main', AuthController.getMain)
router.get('/role', AuthController.getRole)
router.get('/getUser', AuthController.getCurrentUser)
module.exports = router