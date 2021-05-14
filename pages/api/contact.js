const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  console.log(req.body);

  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    Message: ${req.body.message}
  `

  const data = {
    to: "hues.charlotte@gmail.com",
    from: "charlottehughesportfolio@gmail.com",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data);

  res.status(200).json({status: "Ok"})
}