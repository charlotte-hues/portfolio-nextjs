
async function sendMail(req) {

  require('dotenv').config()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465999,
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

  return transporter.sendMail(mailData);
}

async function handler(req, res) {

  try {
    await sendMail(req);
    console.log("SUCCESS")
  } catch (error) {
    console.log("ERROR")
    res.status(500).json({message: "Send email failed"});
    return;
  }
  
  // res.send('success');

  // transporter.sendMail(mailData)
  // .then(data => res.status(200))
  // .catch(err => res.status(500))

  res.status(200).json({message: "sent email"});
}

export default handler;