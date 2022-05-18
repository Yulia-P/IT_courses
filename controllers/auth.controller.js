const path = require('path')
const jwt = require('jsonwebtoken')
const db = require('../db/db')

const AuthController = {
    //Login
    getLogin: (req, res, next) => {
        res.sendFile(path.join(__dirname, '../static/html/login.html'))
    },

    //Login
    postLogin: async (req, res, next) => {
        const candidate = await db.models.Users.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        if (candidate) {
            const accessToken = jwt.sign({id: candidate.id, username: candidate.username, role: candidate.role}, accessKey, {expiresIn: 30 * 60})
            const refreshToken = jwt.sign({id: candidate.id, username: candidate.username, role: candidate.role}, refreshKey, {expiresIn: 24 * 60 * 60})
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                sameSite: 'strict'
            })
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sameSite: 'strict'
            })
            res.sendFile(path.join(__dirname, '../static/html/main.html'))
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
        await global.sequelize.query(
            `insert into users(username, password, role) values('${req.body.username}', '${req.body.password}', 'user')`)
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