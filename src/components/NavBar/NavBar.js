import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.navBarLinks}>
        <Link to="/" className={styles.shimmer + ' ' + styles['shimmer-text']}>
          Home
        </Link>
        <Link to="/about" className={styles.shimmer + ' ' + styles['shimmer-text']}>
          About Me
        </Link>
        <Link to="/projects" className={styles.shimmer + ' ' + styles['shimmer-text']}>
          Projects
        </Link>
        <Link to="/services" className={styles.shimmer + ' ' + styles['shimmer-text']}>
          Services
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
