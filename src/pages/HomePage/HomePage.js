// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.module.scss'; // Import your SCSS styles

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Jamie Boeing's Portfolio</h1>
        <p>A showcase of my web development and design journey.</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p>&copy; 20XX Jamie Boeing</p>
      </footer>
    </div>
  );
};

export default HomePage;
