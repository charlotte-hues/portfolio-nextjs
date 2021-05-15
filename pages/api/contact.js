const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler (req, res) {

  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    Message: ${req.body.message}
  `

  const data = {
    to: "hues.charlotte@gmail.com",
    from: "charlottehughesportfolio@gmail.com",
    subject: "New web form message from " + req.body.name + "!",
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  try {
    await mail.send(data);
    console.log("*************** SUCCESS ***************")
  } catch (error) {
    console.log("*************** ERROR ***************")
    res.status(500).json({message: "Send email failed"});
    return
  }

  res.status(200).json({status: "Ok"})

}

export default handler;