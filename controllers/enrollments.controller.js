const { defineRulesFor } = require("../util/abilitites")
const db = require('../config/db')
const path = require('path')
const fs = require('fs')

const EnrollController = {
    getEnrollPage:  (req, res, next) => {
        let view = fs.readFileSync('./views/teacher.html', "utf8");
        res.send(view);
        // res.sendFile(path.join(__dirname, '../static/html/courses.html'))
    },

    getEnroll: (req, res, next) => {
        db.models.Enroll.findOne({where: {student: req.body.id}})
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));           
    }
}

module.exports = EnrollController