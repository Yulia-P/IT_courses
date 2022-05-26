const express = require('express')
const TeacherController = require('../controllers/teacher.controller')
const { abilityCheckMiddleware } = require('../util/middleware')

let router = express.Router()

router.get('/teacher', TeacherController.getTeacherPage)
router.get('/getTeacher', TeacherController.getTeacher)
router.post('/deleteTeacher', TeacherController.deleteTeacher)
router.post('/editTeacher', TeacherController.editTeacher);
router.post('/addTeacher', TeacherController.addTeacher);
module.exports = router