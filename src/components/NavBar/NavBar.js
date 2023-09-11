// src/components/NavBar/NavBar.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className='navbar-logo'>
        {/* <img src='/img/rosette.jpg' alt='Logo' /> */}
      </div>
      <div className='navbar-toggle' onClick={toggleBar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/about">About Me</Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className='nav-item'>
          <Link to="/projects">Projects</Link>
        </li>
        <li className='nav-item'>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
