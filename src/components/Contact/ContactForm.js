// import React, { useState } from 'react';
// import styles from './ContactForm.module.scss'; // Import your CSS or SCSS styles
// import { sendEmail } from '../../../controllers/api/contactController'; // Import your controller

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     user_name: '',
//     user_email: '',
//     message: '',
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     clearForm(); // Clear the form when the modal is closed
//   };

//   const clearForm = () => {
//     setFormData({
//       user_name: '',
//       user_email: '',
//       message: '',
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     clearMessages(); // Clear any previous messages

//     try {
//       await sendEmail(formData.user_name, formData.user_email, formData.message);

//       // Handle success, e.g., display a success message or reset the form
//       setSuccessMessage('Email sent successfully');
//       clearForm();
//     } catch (error) {
//       // Handle errors, e.g., display an error message
//       console.error('Error sending email:', error);
//       setErrorMessage('Internal server error. Please try again later.');
//     }
//   };

//   const clearMessages = () => {
//     setSuccessMessage('');
//     setErrorMessage('');
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Contact Me</button>
//       {isModalOpen && (
//         <div className={styles.modalOverlay} onClick={closeModal}>
//           <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//             <div className={styles.modalContainer}>
//               <div className={styles.modalBody}>
//                 <form onSubmit={handleSubmit}>
//                   <div className={styles.formGroup}>
//                     <label htmlFor="user_name">Name:</label>
//                     <input
//                       type="text"
//                       name="user_name"
//                       id="user_name"
//                       value={formData.user_name}
//                       onChange={handleChange}
//                     />
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="user_email">Email:</label>
//                     <input
//                       type="email"
//                       name="user_email"
//                       id="user_email"
//                       value={formData.user_email}
//                       onChange={handleChange}
//                     />
//                   </div>

//                   <div className={styles.formGroup}>
//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                       name="message"
//                       id="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                     />
//                   </div>

//                   <button type="submit">Send</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
//       {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
//     </div>
//   );
// }

// export default ContactForm;
