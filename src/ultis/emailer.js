const nodemailer = require("nodemailer");
const { verifyEmailTemplate, forgotPasswordTemplate, fA2AuthTemplate } = require('../email-views/index')

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });


  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: process.env.MAIL_USERNAME,
  //     pass: process.env.MAIL_PASSWORD,
  //     clientId: process.env.OAUTH_CLIENTID,
  //     clientSecret: process.env.OAUTH_CLIENT_SECRET,
  //     refreshToken: process.env.OAUTH_REFRESH_TOKEN
  //   }
  // });


const sendEmail = async (to, subject, payload) => {
  const {firstName, confirmEmailUrl} = payload 
  let template;
  if(subject == 'Verify Email ProtradeLiveOptions'){
   template = verifyEmailTemplate({firstName, confirmEmailUrl})
  }

  else if (subject == 'Reset Password'){
    const {firstName, forgotPasswordLink} = payload 
    template = forgotPasswordTemplate({firstName, forgotPasswordLink})
  }

  else if(subject = "Enter code sent to email") {
    const {firstName, token} = payload 
    template = fA2AuthTemplate({firstName, token})
  }


  const info = {
    from:process.env.EMAIL_USER,
    to,
    subject,
    html:template
  }
  
  await transporter.sendMail(info)
}

module.exports = sendEmail