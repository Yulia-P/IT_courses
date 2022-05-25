const { defineRulesFor } = require("../util/abilitites")
const db = require('../config/db')
const path = require('path')
const fs = require('fs')

const CoursesController = {
    getCoursesPage:  (req, res, next) => {
        let view = fs.readFileSync('./views/courses.html', "utf8");
        res.send(view);
        // res.sendFile(path.join(__dirname, '../static/html/courses.html'))
    },

    getCourses: (req, res, next) => {
        db.models.Courses.findAll()
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));           
    }
}

module.exports = CoursesController