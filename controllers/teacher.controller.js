const { defineRulesFor } = require("../util/abilitites")
const db = require('../config/db')
const path = require('path')
const fs = require('fs')

const TeacherController = {
    getTeacherPage:  (req, res, next) => {
        res.sendFile(path.join(__dirname, '../static/html/teacher.html'))
    },

    getTeacher: (req, res, next) => {
        db.models.Teacher.findAll()
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));           
    }
}

module.exports = TeacherController