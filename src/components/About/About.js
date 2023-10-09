// About.js
import React from 'react';
import styles from './About.module.scss';
import { aboutMe } from '../../data';

const About = () => {
  return (
    <section className={styles.intro}>
      <p className={styles.title}>{aboutMe.title}</p>
      <p className={styles.tag}>{aboutMe.tag}</p>
      <div className={styles.bio}>
        <ul>
          {aboutMe.bio.split('\n').map((paragraph, index) => (
            <li key={index} className={styles.bioBulletPoint}>
              {paragraph}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
