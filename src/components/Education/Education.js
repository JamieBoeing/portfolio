// Education.js
import React from 'react';
import { educationData } from '../../data'

const Education = () => {
  return (
    <div className='education-container'>
      <h2>Education</h2>
      <ul className='education-list'>
        {educationData.map((entry, index) => (
          <li key={index} className='education-entry'>
            <h3>{entry.degree}</h3>
            <p>{entry.certification}</p>
            <p>{entry.university}</p>
            <p>{entry.graduationYear}</p>
            <p>{entry.achievements}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Education


// id: 1,
//     degree: 'Associates in Computer Aided Design', 
//     certification: 'Web Certification',
//     university: 'John Wood Community College',
//     graduationYear: 2016,
//     achievements: 'Academic Sorority, and Dean list student'