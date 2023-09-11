import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    recipientEmail: '', // Optional recipient field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Send a POST request to your server with formData
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Email sent successfully')
      // Clear the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
        recipientEmail: '',
      })
    } else {
      console.error('Failed to send email')
    }
  }

  return (
    <div>
      <h2>Contact Us</h2>
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
        {formData.recipientEmail && ( // Show recipient field if needed
          <label>
            Recipient's Email:
            <input
              type="email"
              name="recipientEmail"
              value={formData.recipientEmail}
              onChange={handleChange}
            />
          </label>
        )}
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

export default ContactForm
