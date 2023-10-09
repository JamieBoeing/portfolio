import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.navBarLinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <a
        href="/img/resume.pdf" 
        target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
      >
        Resume
      </a>
      </div>
    </nav>
  );
};



export default NavBar;
