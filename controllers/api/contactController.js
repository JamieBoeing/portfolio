const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);


const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message ) {
      return res.status(400).json({ message: 'Invalid request body' });
    }

    const msg = {
      to: process.env.EMAIL_USER,
      from: user_email,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,

    };

    await sgMail.send(msg); 
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  sendEmail,
};
