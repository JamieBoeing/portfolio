import React from 'react'
import './AboutPage.module.scss'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
     <About />
     <Experience />
     <Skills />
     <Education />
     {/* Add a Link to the Contact page */}
     <Link to="/contact">Contact Me</Link>
    </div>
  )
}
export default AboutPage
