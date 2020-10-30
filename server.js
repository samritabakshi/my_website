const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const Verifier = require("email-verifier");
const app = express();


app.use(express.json());
app.use(express.static("express"));

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/contact_me', (req, res) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    });
  
  var mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_USERNAME,
    subject: `Website | Contact Me - ${req.body.email}`,
    text: req.body.message
  };

  let verifier = new Verifier(process.env.API_KEY);
    verifier.verify(req.body.email, (err, data) => {
      console.log(err)
      console.log(data)
      console.log(data['smtpCheck'] == "true")
      if (err){
        console.log(err);
        res.status(400)
        res.send({message: err})
      }else{
        if(data['smtpCheck'] == "true"){
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(400)
                res.send({message: error})
            } else {
              res.status(200)
              res.send({message: "done"})
              console.log('Email sent: ' + info.response);
            }
          });
        }else{
          res.status(400)
          res.send({message: "Email id not valid"})
        }
      }
  });

});

const port = 3100;
process.title = "portfolio"  
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
// app.listen(port, "0.0.0.0");

