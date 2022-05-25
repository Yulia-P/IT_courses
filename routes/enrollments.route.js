const express = require('express')
const EnrollController = require('../controllers/enrollments.controller')
const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/enroll', EnrollController.getEnrollPage)
router.get('/getEnroll', EnrollController.getEnroll)

// router.post('/addEnroll', EnrollController.addEnroll)
// router.post('/courses', [abilityCheckMiddleware('create', 'Commits')], CoursController.addCommit)

// router.put('/courses', [abilityCheckMiddleware('update', 'Repos')], CoursController.editCourses)

// router.delete('/courses', [abilityCheckMiddleware('delete', 'Repos')], CoursController.deleteCourses)

module.exports = router