// Skills.js
import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
