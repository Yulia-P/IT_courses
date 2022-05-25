const express = require('express')
const EnrollController = require('../controllers/enrollments.controller')
const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/enroll', EnrollController.getEnrollPage)
router.get('/getEnroll', EnrollController.getEnroll)
router.post('/addEnroll', EnrollController.addEnroll)

module.exports = router