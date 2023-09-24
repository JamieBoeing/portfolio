// Education.js
import React from 'react';
import { educationData } from '../../data';
import styles from './Education.module.scss';

const Education = () => {
  return (
    <div className='education-container'>
      <h2>Education</h2>
      <ul className='education-list'>
        {educationData.map((entry, index) => (
          <li key={index} className='education-entry'>
            <div className="education-item">
              <img 
                src={`/img/${entry.image}`} // Change 'educationData.image' to 'entry.image'
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
    </div>
  );
};

export default Education;
