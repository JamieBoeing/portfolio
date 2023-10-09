import React from 'react';
import { experienceData } from '../../data';
import styles from './Experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.workTitle}>Work Experience</h2>
      <div className={styles.experienceList}>
        {experienceData.map((entry, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3 className={styles.expTitle}>{entry.title}</h3>
            <p className={styles.company}>{entry.company}</p>
            <p className={styles.dates}>{entry.date}</p>
            <ul className={styles.bulletList}>
              {entry.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {entry.projects && entry.projects.length > 0 && (
              <div className={`${styles.projectTile} ${styles.expLink}`}>
                <p>{entry.projects.name}</p>
                <a href={entry.projects.link} className={styles.link}>
                  {entry.projects.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
