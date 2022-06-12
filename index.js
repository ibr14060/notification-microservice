
const sgMail = require('@sendgrid/mail')
const API_KEY = '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';
sgMail.setApiKey(API_KEY);
const msg = {
  to: 'seifeldeen.soliman@student.giu-uni.de', // Change to your recipient
  from: 'seifibr753@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'your order is placed successfully',
  html: '<h1>and easy to do anywhere, even with Node.js</h1>',
};
sgMail.send(msg)
  .then((response) =>console.log('Email sent'))
  .catch((error) => 
    console.error(error)
  );