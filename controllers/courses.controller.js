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
    // getChatPage: (req, res, next) => {
    //     let view = fs.readFileSync('./views/chat.html', "utf8");
    //     res.send(view);
    // },
    getChatPage: (req, res, next) =>{
        res.sendFile(path.join(__dirname, '../views/chat.html'))
    },

    getCourses: (req, res, next) => {
        db.models.Courses.findAll()
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message));           
    },
   
    deleteCourses: (req, res, next) => {
        db.models.Enroll.destroy({where: {course: req.body.courseName}}).then(()=>{res.send();})
        .catch((err) => console.log('Error: ' + err.message))
        .then((res) => {
            console.log(res);
        });
        db.models.Courses.destroy({where: {courseName: req.body.courseName}}).then(()=>{res.send();})
        .catch((err) => console.log('Error: ' + err.message))
        .then((res) => {
            console.log(res);
        });
    },
    editCourses: (req, res, next) => {
        db.models.Courses.update({
            language: req.body.language,
            courseDescrition:  req.body.courseDescrition,
            teacher:  req.body.teacher,
            image:  req.body.image,
            courseName:  req.body.courseName
        }, {
            where:{ courseName: req.body.courseName
            }
        }).then((res) => {console.log(res);
        });
    },
    addCourses: (req, res, next) => {
        db.models.Courses.create({
            language: req.body.language,
            courseDescrition:  req.body.courseDescrition,
            teacher:  req.body.teacher,
            image:  req.body.image,
            courseName:  req.body.courseName
        })
        .catch((err) => console.log('Error: '+err.message));
    },
    Search: (req, res, next) => {
        // console.log(req.body.language)
        db.models.Courses.findAll({where: {language: req.body.language}})
        .then(expense => res.send(JSON.stringify(expense)))
        .catch((err) => console.log('Error: ' + err.message)); 
    }
}

module.exports = CoursesController