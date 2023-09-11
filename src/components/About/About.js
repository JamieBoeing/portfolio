// About.js
import React from 'react'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className="about-container">
      <div className={styles.profile}>
        <img src="public/img/profileImage.jpg" alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        As an accomplished and versatile professional with over a decade of experience, 
        I bring a unique blend of skills in software engineering, graphic design, artistry, 
        management, and communication to the table. My career journey reflects a passion for 
        both people and technology, where meticulous attention to detail and boundless 
        creativity shine as my defining attributes. I thrive on embracing complex challenges, 
        fostering an environment of continuous learning, and nurturing personal growth.
        </p>
      </div>
    </div>
  )
}

export default About