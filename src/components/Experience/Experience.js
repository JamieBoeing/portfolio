// Experience.js
import React from 'react';
import { experienceData } from '../../data';
import styles from './Experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <h2>Work Experience</h2>
      <ul className={styles.experienceList}>
        {experienceData.map((entry, index) => (
          <li key={index} className={styles.experienceItem}>
            <h3>{entry.title}</h3>
            <p>{entry.company}</p>
            <p className={styles.dates}>{entry.date}</p>
            <p>{entry.description.join('\n')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
