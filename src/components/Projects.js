// Projects.js
import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* Other project details */}
        </div>
      ))}
    </div>
  );
};

export default Projects;
