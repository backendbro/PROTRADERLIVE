const nodemailer = require("nodemailer");
const { verifyEmailTemplate, forgotPasswordTemplate, fA2AuthTemplate } = require('../email-views/index')

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
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
  let template;
  const {firstName, pin} = payload 
  if(subject == 'Verify Email ProtradeLiveOptions'){
   template = verifyEmailTemplate({firstName, pin})
  }

  else if (subject == 'Reset Password'){
    template = forgotPasswordTemplate({firstName, pin})
  }

  else if(subject = "Enter code sent to email") {
    template = fA2AuthTemplate({firstName, pin})
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