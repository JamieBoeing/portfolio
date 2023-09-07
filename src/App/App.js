import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import './App.module.scss'

const App = () => {
  return (
  <div className='app-container'>
    <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
        </Routes>
        </main>
  </div>
  )
}




export default App


// main component
