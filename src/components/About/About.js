// About.js
import React from 'react'
import profileImage from './image/profileImage.jpg'
import './AbouPage.module.scss'

const About = () => {
  return (
    <div className="about-container">
      <div className="profile">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm passionate about web development and enjoy creating interactive and
          user-friendly websites. With a background in computer science and buisness management, I've
          honed my skills in HTML, CSS, and JavaScript, and I'm always eager to
          learn new technologies.
        </p>
        <p>
          Over the years, I've had the opportunity to work on various projects
          that have given me experience in front-end and back-end development,
          as well as UI/UX design. I'm also enthusiastic about open-source
          contributions and enjoy sharing my knowledge with the developer
          community.
        </p>
        <p>
          When I'm not coding, you can find me travelling as much as possible, playing roller derby with my team, or finding new ways to continue to grow my skills in all areas of my life. 
        </p>
      </div>









      
    </div>
  );
};

export default About;
