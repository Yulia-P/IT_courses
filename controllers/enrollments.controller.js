const { defineRulesFor } = require("../util/abilitites")
const db = require('../config/db')
const path = require('path')
const fs = require('fs')

const EnrollController = {
    getEnrollPage:  (req, res, next) => {
        res.sendFile(path.join(__dirname, '../static/html/mycourses.html'))
    },

    getEnroll: (req, res, next) => {
        db.models.Enroll.findAll()
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));           
    }
}

module.exports = EnrollController