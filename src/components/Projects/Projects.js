import React from 'react';
import { projects } from '../../data';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div className={styles.item} key={project.id}>
          <h3>{project.title}</h3>
          <img
            src={project.imageUrl} // Add the image URL here
            alt={project.title}
            className={styles.projectImage}
          />
          <p className={styles.description}>{project.description}</p>
          <p className={styles.technologies}>{project.technologies}</p>
          <div className={styles.links}>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              GitHub
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
