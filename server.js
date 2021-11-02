const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

nodemailer.createTransport({
  host: "mail.YOURDOMAIN.com", 
    port: 587,
    secure: false,
  auth: {
    user: "YOURUSERNAME",
    pass: "YOURPASSWORD" 
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


router.post('/access', (req, res, next) => {
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: name,
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