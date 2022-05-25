const express = require('express')
const CoursesController = require('../controllers/courses.controller')
// const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/courses', CoursesController.getCoursesPage)
router.get('/getCourses', CoursesController.getCourses)
router.post('/deleteCourses', CoursesController.deleteCourses)
router.post('/editCourses', CoursesController.editCourses)
router.post('/addCourses', CoursesController.addCourses)

// router.put('/courses', [abilityCheckMiddleware('update', 'Repos')], CoursController.editCourses)



module.exports = router