import React from 'react';
import { experienceData } from '../../data';
import styles from './Experience.module.scss';
import { Link } from 'react-router-dom'
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
            <ul className={styles.expBulletList}>
              {entry.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {entry.projects && entry.projects.length > 0 && (
              <div className={styles.expLink}>
                <Link to="/projects" className={styles.expLink}>
                  View Projects
                </Link>
              </div>
            )}
            {entry.salonWebsite && (
              <div className={styles.salonLinkContainer}>
                <a 
                  href={'https://www.evokesalonquincy.com'} // put link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.salonLink}
                >
                  Visit Salon Website
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
