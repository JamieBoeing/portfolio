// Education.js
import React from 'react';
import { educationData } from '../../data';
import styles from './Education.module.scss';

const Education = () => {
  return (
    <div className={styles.eduContainer}>
      <h2>Education</h2>
      <ul className={styles.eduList}>
        {educationData.map((entry, index) => (
          <li key={index} className={styles.eduListItem}>
            <div className={styles.eduItem}>
              <img 
                src={`/img/${entry.image}`}
                alt={entry.university} 
                className={styles.edImage} 
              />
              <div>
                <h3>{entry.degree}</h3>
                <p>{entry.certification}</p>
                <p>{entry.university}</p>
                <p>{entry.graduationYear}</p>
                <p>{entry.achievements}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a
        href="/img/resume.pdf" 
        target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
      >
        Resume
      </a>
    </div>
  );
};

export default Education;
