const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMail(data) {
  return mail.send(data)
}

 async function handler(req, res) {

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

  try {
    await sendMail(data);
  } catch (error) {
    res.status(516).json({message: "Send email failed"})
  }

  // mail.send(data);

  res.status(200).json({status: "Ok"})

}

export default handler;