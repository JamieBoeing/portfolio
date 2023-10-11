import React, { useState } from 'react';
import { projects } from '../../data';
import styles from './Projects.module.scss';

const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const handleExpand = (projectId) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`${styles.item} ${
            expandedProjectId === project.id ? styles.expanded : ''
          }`}
          onClick={() => handleExpand(project.id)}
        >
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
          <div className={styles.projectDetails}>
            <p className={styles.projectDescription}>
              <strong>Description:</strong>
              {typeof project.description === 'string' ? (
                <ul>
                  {project.description.split('\n').map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              ) : (
                project.description
              )}
            </p>
            <p className={styles.technologies}>
              <strong>Technologies:</strong>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </p>
          </div>
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
