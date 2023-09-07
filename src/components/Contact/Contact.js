import React, { useState } from 'react'
import { sendEmail } from '.../..controllers/api/send-email'
import '../Contact/Contact.module.scss'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform any necessary data validation before sending
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all fields.');
      }

      // Call the sendEmail function with the form data
      const response = await sendEmail(formData);

      // Check the response and handle success or failure
      if (response.success) {
        console.log('Email sent successfully');
        // Clear the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to send email')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
