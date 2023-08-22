// About.js
import React from 'react';
import Skills from './Skills';
import Education from './Education';
import { aboutMe } from '../data';

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <h3>{aboutMe.name}</h3>
      <p>{aboutMe.title}</p>
      <p>{aboutMe.bio}</p>
      <Skills />
      <Education />
    </div>
  );
};

export default About;
