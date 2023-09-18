import React, { useEffect } from 'react'
import './App.module.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import ServicesPage from '../pages/ServicesPage/ServicesPage'


const App = () => {

  return (
  <div className='app-container'>
    <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/services" element={<ServicesPage />} />
        </Routes>
        </main>
  </div>
  )
}

export default App

