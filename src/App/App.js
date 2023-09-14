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
import Services from '../components/Services/services'
import WordCloud from '../components/WordCloud/WordCloud'
import Icon from '../components/Icon/Icon'

const App = () => {

  return (
  <div className='app-container'>
    <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wordcloud" element={<WordCloud />} />
            <Route path="/icon" element={<Icon />} />
        </Routes>
        </main>
  </div>
  )
}




export default App


// main component
