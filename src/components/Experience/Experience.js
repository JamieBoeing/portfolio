// Experience.js
import React from 'react'
import { experienceData } from '../../data'
import './Experience.module.scss'

const Experience = () => {
  return (
    <div className='experience-container'>
      <h2>Work Experience</h2>
      <ul className='experience-list'>
        {experienceData.map((entry, index) => (
          <li key={index} className='experience-entry'>
            <h3>{entry.jobTitle}</h3>
            <p>{entry.company}</p>
            <p>{entry.year}</p>
            <p>{entry.description}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
