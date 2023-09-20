const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
dotenv.config()

exports.sendEmail = async (req, res) => {
  try {
    // Extract data from the request body (e.g., name, email, message)
    const { name, email, message } = req.body;

    const senderEmail = process.env.EMAIL_USER
    // Nodemailer Configurations
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
  })
    const mailOptions = {
      from: senderEmail,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }
   
    // Send the email
    await transporter.sendMail(mailOptions)
    // Save the contact submission form in mongodb
    const newContact = new email({ name, email, message })
    await newContact.save()


    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
}
