import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import ContactPage from '../pages/ContactPage/ContactPage'

const App = () => {
  return (
   <Router>
    <NavBar />
      <main>
        <h1>Jamie Boeing FullStack Engineering Portfolio</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
   </Router>
  )
}




export default App


// main component
