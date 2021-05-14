// function handler(req, res) {

//   require('dotenv').config()
//   let nodemailer = require('nodemailer')
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: 'charlottehughesportfolio@gmail.com',
//       pass: process.env.password,
//     },
//     secure: true,
//   })
//   const mailData = {
//     from: 'charlottehughesportfolio@gmail.com',
//     to: 'hues.charlotte@gmail.com',
//     subject: `Message From ${req.body.name}`,
//     text: req.body.message + " | Sent from: " + req.body.email,
//     html: `<div>${req.body.message}</div><p>Sent from:
//     ${req.body.email}</p>`
//   }

//   transporter.sendMail(mailData, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({message: "error" + JSON.stringify(err)});
//       return;
//     } else {
//       console.log("mail send");
//       res.send("success");
//     }
// });

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'hues.charlotte@gmail.com', // Change to your recipient
//   from: 'charlottehughesportfolio@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     res.status(501).json({message: "email failed"})
//     console.error(error)
//   })

// }

// export default handler;




// TRY AGAIN

// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'hues.charlotte@gmail.com', // Change to your recipient
//   from: 'charlottehughesportfolio@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })


// TRY AGAIN


// const nodemailer = require('nodemailer')
// const sgTransport = require('nodemailer-sendgrid-transport')

// const transporter = nodemailer.createTransport(sgTransport({
//   auth: {
//     api_key: process.env.SENDGRID_API
//   }
// }))

// const send = ({ email, name, text }) => {
//   const from = name && email ? `${name} <${email}>` : `${name || email}`
//   const message = {
//     from,
//     to: 'kevin@thecouch.nyc',
//     subject: `New message from ${from}`,
//     text,
//     replyTo: from
//   }

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     )
//   })
// }


// TRY AGAIN

// import { sendMailQueryToMe } from "../../utils/sendMailToMe";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     // req.body carries all the data

//     try {
//       const { email, name_, subject, client_message } = req.body;

//       if (
//         typeof (email || name_ || subject || client_message) === "undefined"
//       ) {
//         console.log(" ************* Invalid Data received ************ ");

//         return res
//           .status(400)
//           .send({ error: "bad request, missing required data!" });
//       } else {
//         //  Data received as expected
//         try {
//           const sendGridResponse = await sendMailQueryToMe(
//             "your_mail@gmail.com",
//             name_,
//             subject,
//             client_message,
//             email
//           );

//           return res.status(200).send({
//             sg_response: sendGridResponse,
//           });
//         } catch (err) {
//           console.log(
//             "ERROR WHILE SENDING MAIL TO *YOU* THROUGH WEB API >> ",
//             err
//           );

//           return res.status(400).send({
//             err_message: "bad request",
//           });
//         }
//       }
//     } catch (err) {
//       console.log("Err while sending Mail through send grid >> ", err);
//       return res
//         .status(400)
//         .send({ error: "Error in sendgrid Service.", errMsg: err });
//     }
//   }

//   res.status(400).send({ error: "bad request" });
// }


// LAST ATTEMPT


// import { NextApiRequest, NextApiResponse  } from 'next';

import { sendMailToMe } from '../../utils/sendMailToMe';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { name, email } = req.body;
      await sendMailToMe({ name, email });
      console.log("SUCCESS");
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
