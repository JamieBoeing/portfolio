import React, { useState } from 'react';
import styles from './ContactModalForm.module.scss';
import api from '../../utilities/send-email';

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendEmail = async () => {
    try {
      // Make a POST request using your custom utility
      const response = await api.post('/contact', formData);

      if (response.status === 'success') {
        console.log('Email sent:', response.data);
        // You can close the modal or display a success message here
        closeModal(); // Close the modal after sending the email
      } else {
        console.error('Error sending email:', response.error);
        // Handle and display an error message here
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle and display an error message here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    sendEmail(); // Call your sendEmail function to handle the submission
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <button onClick={openModal}>Contact Me</button>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={stopPropagation}>
            <div className={styles.modalContainer}>
              <div className={styles.modalBody}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="user_name">Name:</label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      onClick={stopPropagation}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="user_email">Email:</label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      onClick={stopPropagation}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onClick={stopPropagation}
                    />
                  </div>

                  <button type="submit" onClick={stopPropagation}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
