import React from 'react'
import './AboutPage.module.scss'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const AboutPage = () => {
  return (
    <div>
     <About />
     <Experience />
     <Skills />
     <Education />
     <Footer />
    </div>
  )
}
export default AboutPage
