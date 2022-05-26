const { defineRulesFor } = require("../util/abilitites")
const db = require('../config/db')
const path = require('path')
const fs = require('fs')

const TeacherController = {
    getTeacherPage:  (req, res, next) => {
        let view = fs.readFileSync('./views/teacher.html', "utf8");
        res.send(view);
    },

    getTeacher: (req, res, next) => {
        db.models.Teacher.findAll()
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));           
    },

    deleteTeacher: async (req, res, next) => {  
        db.models.Enroll.destroy({where: {lector: req.body.tname}}).then(()=>{res.send();})
        .catch((err) => console.log('Error: ' + err.message))
        .then((res) => {
            console.log(res);
        });
        db.models.Courses.destroy({where: {teacher: req.body.tname}}).then(()=>{res.send();})
        .catch((err) => console.log('Error: ' + err.message))
        .then((res) => {
            console.log(res);
        });
        db.models.Teacher.destroy({where: {tname: req.body.tname}}).then(()=>{res.send();})
        .catch((err) => console.log('Error: ' + err.message))
        .then((res) => {
            console.log(res);
        });
    },
    editTeacher: (req, res, next) => {
        db.models.Teacher.update({
            tname:  req.body.tname,
            photo:  req.body.photo,
            subject:  req.body.subject
        }, {
            where:{ tname: req.body.tname}
        }).then((res) => {console.log(res);
        });
    },
    addTeacher:(req, res, next) => {
        db.models.Teacher.create({
            tname:  req.body.tname,
            photo:  req.body.photo,
            subject:  req.body.subject
        })
        .catch((err) => console.log('Error: '+err.message));
    }
}

module.exports = TeacherController