async function handler(req, res) {

  require('dotenv').config()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'charlottehughesportfolio@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'charlottehughesportfolio@gmail.com',
    to: 'hues.charlotte@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({message: "error" + JSON.stringify(err)});
      return;
    } else {
      console.log("mail send");
      res.send("success");
    }
});

}

export default handler;