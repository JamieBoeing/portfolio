import React from 'react'
import { experienceData, skills  } from '../../data'

const ExperiencePage = () => {
  return (
    <div>
      <h1>Experience</h1>
      {experienceData.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.date}</p>
          <h3>Description:</h3>
          <ul>
            {job.description.map((desc, descIndex) => (
              <li key={descIndex}>{desc}</li>
            ))}
          </ul>
          <h3>Skills:</h3>
          <ul>
            {job.skills.map((skillId, skillIndex) => (
              <li key={skillIndex}>{skills[skillId]}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePage
