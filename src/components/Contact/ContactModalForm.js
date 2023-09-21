import React, { useState } from 'react'
import api from '../../utilities/send-email'
import styles from './ContactModalForm.module.scss'


const ContactModalForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = { name, email, message }
      const response = await api.post('/api/contact',formData)
  
      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        closeModal();
        console.log('Message sent successfully')
      } else {
        console.error('Error submitting message')
      }
    } catch (error) {
      console.error('Error submitting message:', error)
    }
      console.log('Message sent:', message)
  }
  const closeModal =() => {
    onClose()
  }
 
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div>
        <input
            type='text'
            id='name'
            value={name}
            onChange={handleNameChange}
            placeholder='Your Name'
            required
          />
          </div>
          <div>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Your Email'
            required
          />
          </div>
          <div>
          <textarea
            id='message'
            placeholder='Type your message here'
            value={message}
            onChange={handleMessageChange}
            required
          />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactModalForm