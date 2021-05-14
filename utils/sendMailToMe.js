const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = "8foSNFF0RpeywuupxZ2BfQ";

const sendMailToMe = async ({ name, email, message }) => {

    console.log(name);
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: 'Demo success :)'
            }
          ],
          from: {
            email: 'charlottehughesportfolio@gmail.com',
            name: 'Charlotte Portfolio'
          },
          content: [
            {
              type: 'text/html',
              value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
            }
          ]
        })
    });
}

export { sendMailToMe };