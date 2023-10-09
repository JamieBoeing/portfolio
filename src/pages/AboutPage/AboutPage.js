import React, { useState } from 'react';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import styles from './AboutPage.module.scss';

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
  
  return (
    <div className={styles.container}>
      <header>
        <h1>About Me</h1>
      </header>
      <div className={styles.contentWrapper}>
        <section className={styles.leftColumn}>
        <section className={styles.about}>
            <About />
          </section>
          <section className={styles.experience}>
            <Experience />
          </section>
        </section>
        <section className={styles.rightColumn}>
        <img
            className={styles.portraitImg}
            src='/img/portrait.png'
            alt="portrait"
          />
         <section className={styles.education}>
        <Education />
      </section>

        </section>
      </div>
     

      <section className={styles.skills}>
            <Skills />
          </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
