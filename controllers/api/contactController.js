
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

exports.sendEmail = (req, res) => {
  const { name, email, message, recipientEmail } = req.body;

  // Create a Nodemailer transporter with email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail' or use SMTP options
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: `New contact form submission from ${name}`,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
      res.status(500).send('Failed to send email')
    } else {
      console.log('Email sent:', info.response)
      res.status(200).send('Email sent successfully')
    }
  })
}
