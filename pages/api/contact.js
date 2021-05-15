const mail = require('@sendgrid/mail');
const RequestIp = require('@supercharge/request-ip')



mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler (req, res) {
  const ip = RequestIp.getClientIp(req)

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

  try {
    await mail.send(data);
    console.log("*************** SUCCESS ***************")
    console.log(ip);
  } catch (error) {
    console.log("*************** ERROR ***************")
    res.status(500).json({message: `${error.toString()} ipAddress: ${ip}`});
    return;
  }

  res.status(200).json({status: "Ok"})

}

export default handler;