const express = require('express')
const TeacherController = require('../controllers/teacher.controller')
const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/teacher', TeacherController.getTeacherPage)
router.get('/teacher',[abilityCheckMiddleware('read', 'Teacher')], TeacherController.getTeacher)

// router.post('/courses', [abilityCheckMiddleware('create', 'Repos')], CoursController.addCourses)
// router.post('/courses', [abilityCheckMiddleware('create', 'Commits')], CoursController.addCommit)

// router.put('/courses', [abilityCheckMiddleware('update', 'Repos')], CoursController.editCourses)

// router.delete('/courses', [abilityCheckMiddleware('delete', 'Repos')], CoursController.deleteCourses)

module.exports = router