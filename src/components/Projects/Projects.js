import React from 'react'
import { projects } from '../../data'

const Projects = () => {
  return (
    <div className='projects-container'>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div className='project-item' key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
          <a href ={project.githubLink} className='links' target='blank' rel='noopener noreferrer'>GitHub Link</a>
          <a href={project.liveDemoLink} className='links' target='blank' rel='noopener noreferrer'>Live Demo Link</a>
          {/* add images to projects */}
        </div>
      ))}
    </div>
  )
}

export default Projects
