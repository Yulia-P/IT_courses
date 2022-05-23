const express = require('express')
const EnrollController = require('../controllers/enrollments.controller')
const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/enroll', EnrollController.getEnrollPage)
router.get('/enroll',[abilityCheckMiddleware('read', 'Enroll')], EnrollController.getEnroll)

// router.post('/courses', [abilityCheckMiddleware('create', 'Repos')], CoursController.addCourses)
// router.post('/courses', [abilityCheckMiddleware('create', 'Commits')], CoursController.addCommit)

// router.put('/courses', [abilityCheckMiddleware('update', 'Repos')], CoursController.editCourses)

// router.delete('/courses', [abilityCheckMiddleware('delete', 'Repos')], CoursController.deleteCourses)

module.exports = router