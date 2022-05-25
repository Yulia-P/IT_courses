const path = require('path')
const jwt = require('jsonwebtoken')
const db = require('../config/db')
const bcrypt = require('../safety/bcrypt')


const AuthController = {
    //Login
    getLogin: (req, res, next) => {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },
    getMain: (req, res, next) =>{
        res.sendFile(path.join(__dirname, '../views/main.html'))
    },
    
    getCurrentUser : async (req, res, next) => {
        const userc = await db.models.Users.findOne({ where: { id: parseInt(req.user.id) } })
        // const userc = await db.models.Users.findOne({ where: { id: parseInt(req.user.id) } })
        res.send(JSON.stringify(userc))        
    } ,
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
            res.redirect('/main')
        }
        } else {
            res.redirect('/login')
        }
    },

    //Registration 
    getRegister: (req, res, next) => {
        res.sendFile(path.join(__dirname, '../views/register.html'))
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
    },

    //Role
    getRole: (req, res, next) => {
        let userRole = 'user';
        let adminRole = 'admin';
        if(req.user != undefined){
            switch(req.user.role){
                case 'user': {
                    res.send(JSON.stringify(userRole))
                    break;
                }
                case 'admin': {
                    res.send(JSON.stringify(adminRole))
                    break;
                }
            }
        }
     }

      
}

module.exports = AuthController