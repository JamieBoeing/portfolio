// Skills.js
import React from 'react';
import { skills } from '../../data';

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      {skills.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
