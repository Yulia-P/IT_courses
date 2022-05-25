const express = require('express')
const CoursesController = require('../controllers/courses.controller')
// const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/courses', CoursesController.getCoursesPage)
router.get('/getCourses', CoursesController.getCourses)

// router.post('/courses', [abilityCheckMiddleware('create', 'Repos')], CoursController.addCourses)
// router.post('/courses', [abilityCheckMiddleware('create', 'Commits')], CoursController.addCommit)

// router.put('/courses', [abilityCheckMiddleware('update', 'Repos')], CoursController.editCourses)

// router.delete('/courses', [abilityCheckMiddleware('delete', 'Repos')], CoursController.deleteCourses)

module.exports = router