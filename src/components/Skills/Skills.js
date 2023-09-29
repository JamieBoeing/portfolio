import React from 'react';
import { skills } from '../../data';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2>Skills</h2>
      {skills.map((category, index) => (
        <div className={styles.category} key={index}>
          <h3>{category.category}</h3>
          <ul className={styles.list}>
            {category.skills.map((skill, skillIndex) => (
              <li className={styles.skill} key={skillIndex}>
                <img
                  src={`/img/${skill.image}`} 
                  alt={skill.name}
                  className={styles.skillImage}
                />
                <span className={skill.name}>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
