
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../components/Projects/Projects'
import Skills from './Skills'
import Education from './Education'
import Experience from '../components/Experience/Experience'

const AppRouter = () => {
  return (
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
  )
}

export default AppRouter
