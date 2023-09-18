import React from 'react'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import styles from './AboutPage.module.scss'
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>About Me</h1>
      </header>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Footer />
    </div>
  )
}
export default AboutPage
