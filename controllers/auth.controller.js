const path = require('path')
const jwt = require('jsonwebtoken')
const db = require('../config/db')
const bcrypt = require('../safety/bcrypt')


const AuthController = {
    //Login
    getLogin: (req, res, next) => {
        res.sendFile(path.join(__dirname, '../static/html/login.html'))
    },
    getMain: (req, res, next) =>{
        res.sendFile(path.join(__dirname, '../static/html/courses.html'))
    },

    //Login
    postLogin: async (req, res, next) => {
        
        const candidate = await db.models.Users.findOne({
            where: {
                username: req.body.username,
            }
        })
        if (candidate) {
            if(bcrypt.comparePass(req.body.password,  candidate.password)){
            const accessToken = jwt.sign({id: candidate.id, username: candidate.username,  role: candidate.role}, accessKey, {expiresIn: 30 * 60})
            const refreshToken = jwt.sign({id: candidate.id, username: candidate.username, role: candidate.role}, refreshKey, {expiresIn: 24 * 60 * 60})
           
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                sameSite: 'strict'
            })
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sameSite: 'strict'
            })
            res.redirect('/courses')}
        } else {
            res.redirect('/login')
        }
    },

    //Registration 
    getRegister: (req, res, next) => {
        res.sendFile(path.join(__dirname, '../static/html/register.html'))
    },

    //Registration
    postRegister: async (req, res, next) => {
        var pass = await bcrypt.cryptPass(req.body.password);
        await global.sequelize.query(
            `insert into users(username, password, role) values('${req.body.username}', '${pass}', 'user')`)
        res.redirect('/login')
    },

    //Logout
    getLogout: (req, res, next) => {
        res.clearCookie('accessToken')
        res.clearCookie('refreshToken')
        res.redirect('/login')
    }  
}

module.exports = AuthController