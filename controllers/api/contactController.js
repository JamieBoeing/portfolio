const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const Email = require('../../models/api/submission')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (user_name, user_email, message) => {
  try {
    // Create an email message
    const msg = {
      to: 'contact@portfolio.jamieboeing.me', // Recipient email
      from: user_email, // Sender (from)
      subject: 'New Portfolio Contact Form Submission ',
      text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
    };

    // Send the email using SendGrid
  await sgMail.send(msg);

  const emailSubmission = new Email({
    user_name,
    user_email,
    message,
  })

  // save submission to database
  await emailSubmission.save()

    return { message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'Internal server error. Please try again later.' };
  }
};

module.exports = {
  sendEmail,
};
