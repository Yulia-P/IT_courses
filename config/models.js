const Sequelize = require('sequelize')

const Model = Sequelize.Model;

class Users extends Model{}
class Enroll extends Model{}
class Courses extends Model{}
class Teacher extends Model{}
Users.init (
    {
        id:	{type: Sequelize.INTEGER, primaryKey:true, autoIncrementIdentity: true},
        username:{type: Sequelize.STRING, allowNull: false, unique: true},     
        password:	{type: Sequelize.STRING, allowNull: false},
        role: {type: Sequelize.STRING, validate: {isIn:[['user', 'admin']]}}
    },
    {sequelize, modelName:'Users', tableName:'users', timestamps: false}
)

Enroll.init(
    {
        id: {type: Sequelize.INTEGER, primaryKey:true, autoIncrementIdentity: true},
        student:  {type: Sequelize.INTEGER, allowNull: false},
        course: {type: Sequelize.INTEGER, allowNull: false}
    },
    {sequelize, modelName:'Enroll', tableName:'enrollments', timestamps: false}
)

Courses.init(
    {
        id: {type: Sequelize.INTEGER, primaryKey:true, autoIncrementIdentity: true},
        language: {type: Sequelize.STRING, allowNull: false},
        courseName: {type: Sequelize.STRING, allowNull: false},
        courseDescrition: {type: Sequelize.TEXT, allowNull: false},
        teacher: {type: Sequelize.INTEGER, allowNull: false}
    },
    {sequelize, modelName:'Courses', tableName:'courses', timestamps: false}
)

Teacher.init(
    {
        id: {type: Sequelize.INTEGER, primaryKey:true, autoIncrementIdentity: true},
        tname: {type: Sequelize.STRING, allowNull: false},
        tsurname: {type: Sequelize.STRING, allowNull: false},
        subject: {type: Sequelize.STRING, allowNull: false}
    },
    {sequelize, modelName:'Teacher', tableName:'teacher', timestamps: false}
)


//????????
Courses.hasMany(Teacher, {as:'courses_teacher', foreignKey:'teacher', sourceKey:'id'})
Courses.hasMany(Enroll, {as:'enroll_courses', foreignKey:'course', sourceKey:'id'})
Users.hasMany(Enroll, {as:'enroll_users', foreignKey:'student', sourceKey:'id'})

module.exports = { Users, Enroll, Courses, Teacher}
