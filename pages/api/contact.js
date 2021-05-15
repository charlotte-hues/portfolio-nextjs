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
    from: "portfolio@charlottehughes.uk",
    subject: "New web form message from " + req.body.name + "!",
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  const isValid = req.body.name !== undefined || req.body.email !== undefined || req.body.message !== undefined;

  if(isValid) {
    try {
    await mail.send(data);
    console.log("*************** SUCCESS ***************")
  } catch (error) {
    console.log("*************** ERROR ***************")
    res.status(500).json({message: error.toString()});
    return;
  }
  }

  res.status(200).json({status: "Ok"})

}

export default handler;