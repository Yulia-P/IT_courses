const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const http = require('http').createServer(app)
const io = require('socket.io')(http)


app.use(cookieParser('ITCOURSES'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/style", express.static("static"));


global.accessKey = 'accsessTokenSecret'
global.refreshKey = 'refreshTokenSecret'
global.oldRefreshKeyCount = 0

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/main.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
        io.emit('chat message', {
           message: data.message,
           name: data.name 
        })
    })

})

let authRouter = require('./routes/auth.route')
let coursesRouter = require('./routes/courses.route')
let teacherRouter = require('./routes/teacher.route')
let enrollmentsRouter = require('./routes/enrollments.route')
const { response } = require('express')

app.use((req, res, next) => {
    if (req.cookies.accessToken) {
        jwt.verify(req.cookies.accessToken, accessKey, (err, user) => {
            if (err) next()
            else if(user) {
                req.user = user
                next()
            }
        })
    }
    else next()
})

app.use(express.static('static'))
app.use(authRouter)
app.use(coursesRouter)
app.use(teacherRouter)
app.use(enrollmentsRouter)
app.use((err, req, res, next) => {
    res.send(`${err}`)
})

http.listen(3000, () => {console.log('Server start localhost:3000')})