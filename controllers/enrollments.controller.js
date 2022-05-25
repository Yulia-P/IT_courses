// const { defineRulesFor } = require("../util/abilitites")
const db = require('../config/db')
const path = require('path')
const fs = require('fs');
const { get } = require('express/lib/response');
// const { GeoReplyWith } = require("redis")

const EnrollController = {
    getEnrollPage:  (req, res, next) => {
        let view = fs.readFileSync('./views/mycourses.html', "utf8");
        res.send(view);
    },

    getEnroll: async (req, res, next) => {
        await db.models.Enroll.findAll({ where: { student: req.user.username}  })
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));
    },

    addEnroll: (req, res, next) => {
        if(req.user.id != undefined){
            db.models.Enroll.create({
                student: req.user.username,
                course: req.body.courseName,
                lector: req.body.teacher
            })
            .catch((err) => console.log('Error: ' + err.message));
            res.end();
        }
        else{res.redirect('/login');}
    }
}

module.exports = EnrollController