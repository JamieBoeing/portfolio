// controllers/contactController.js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const ContactModel = require('../../models/api/submission'); // Import your Contact model here

dotenv.config();

exports.sendEmail = async (req, res) => {
  try {
    // Extract data from the request body (e.g., name, email, message)
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: email, // Sender's email (provided in the form)
      to: process.env.RECIPIENT_EMAIL, // Recipient's email (your email)
      subject: 'New contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Save the contact form submission in your database (if needed)
    const newContact = new ContactModel({ name, email, message });
    await newContact.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
};
