// Education.js
import React from 'react';
import { educationData } from '../../data';

const Education = () => {
  return (
    <div className='education-container'>
      <h2>Education</h2>
      <ul className='education-list'>
        {educationData.map((entry, index) => (
          <li key={index} className='education-entry'>
            <h3>{entry.degree}</h3>
            <p>{entry.school}</p>
            <p>{entry.year}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
