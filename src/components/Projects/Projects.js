import React from 'react';
import { useTrail, animated } from 'react-spring';
import { projects } from '../../data';
import styles from './Projects.module.scss';

const Projects = () => {
  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  return (
    <div className={styles.container}>
      {trail.map((style, index) => (
        <animated.div style={style} key={projects[index].id} className={styles.item}>
          <h3 className={styles.title}>{projects[index].title}</h3>
          <img
            src={projects[index].imageUrl}
            alt={projects[index].title}
            className={styles.projectImage}
          />
          <p className={styles.description}>{projects[index].description}</p>
          <p className={styles.technologies}>{projects[index].technologies}</p>
          <div className={styles.links}>
            <a
              href={projects[index].githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              GitHub
            </a>
            <a
              href={projects[index].liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Live Demo
            </a>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Projects;
