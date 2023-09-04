import React from 'react';
import './AboutPage.module.scss'; // Import your SCSS styles
import { aboutMe } from '../../data';



const AboutPage = () => {
  const profileImageUrl = '/img/profileImage.jpg'

  return (
    <div className="about-container">
      <div className="profile">
        <img src={profileImageUrl} alt="Profile" />
        <h1>{aboutMe.name}</h1>
        <p>{aboutMe.title}</p>
        <p>{aboutMe.tag}</p>
        {/* Add more information from aboutMe */}
      </div>
    </div>
  )
}

export default AboutPage
