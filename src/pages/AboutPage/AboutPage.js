import React, { useState } from 'react';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.scss';
import ContactModalForm from '../../components/Contact/ContactModalForm';


import {
  projects,
  skills,
  aboutMe,
  experienceData,
  educationData,
  wordData,
  servicesData,
  images,
} from '../../data';

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
            <p>{aboutMe.bio}</p>
        <div className='portraitContainer'>
          <img src='/img/portrait.png' alt="portrait" />
        </div>
          </section>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <section className={styles.experience}>
            <Experience />
          </section>
        </div>
        <div className={styles.rightColumn}>
          <section className={styles.skills}>
            <Skills />
          </section>
        </div>
      </div>
        <section className={styles.education}>
          <Education />
        </section>
      <Footer />
      {isContactModalOpen && (
        <ContactModalForm isOpen={isContactModalOpen} onClose={closeContactModal} />
      )}
    </div>
  );
};

export default AboutPage;

