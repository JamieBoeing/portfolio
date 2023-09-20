import React, { useState } from 'react'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import styles from './AboutPage.module.scss'
import ContactModalForm from '../../components/Contact/ContactModalForm'

const AboutPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <header>
        <h1>About Me</h1>
      </header>
      <section className={styles.intro}>
        <img src="profile-picture.jpg" alt="Your Name" />
        <p>
          Hello! I'm [Your Name], a [Your Profession] with a passion for [Your Passion].
          I have [X] years of experience in [Your Field] and a strong background in [Your Skills].
          Let me tell you a bit more about my journey.
        </p>
      </section>
      <section className={styles.experience}>
        <h2>Experience</h2>
        <Experience />
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <Skills />
      </section>
      <section className={styles.education}>
        <h2>Education</h2>
        <Education />
      </section>
      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <p>If you'd like to connect or have any questions, click the button below:</p>
          <button onClick={openContactModal} onClose={closeContactModal} className={styles.contactButton}>Contact Me</button>
      </section>
        <Footer />
        {isContactModalOpen && (
          <ContactModalForm isOpen={isContactModalOpen} onClose={closeContactModal} />
        )}
    </div>
  );
};

export default AboutPage
