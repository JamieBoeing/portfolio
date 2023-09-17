import React, { useEffect } from 'react'
import './App.module.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import Services from '../components/Services/Services'
import ServicesPage from '../pages/ServicesPage/ServicesPage'
import WordCloud from '../components/WordCloud/WordCloud'
import Icon from '../components/Icon/Icon'

const App = () => {

  return (
  <div className='app-container'>
    <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route index element={<WordCloud />} />
            <Route path="/about" element={<AboutPage />} />
            <Route element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
           
            <Route element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<ServicesPage />} />
              <Route index element={<Services />} />
            
            <Route path="/icon" element={<Icon />} />
        </Routes>
        </main>
  </div>
  )
}




export default App


// main component
