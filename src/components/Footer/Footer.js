import React, { useState } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showEmail, setShowEmail] = useState(false);
  const emailAddress = 'your.email@example.com';

  const handleMouseEnter = () => {
    setShowEmail(true);
  };

  const handleMouseLeave = () => {
    setShowEmail(false);
  };

  const handleCopyEmail = () => {
    const textArea = document.createElement('textarea');
    textArea.value = emailAddress;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Email address copied to clipboard.');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          &copy; {currentYear} Jamie Boeing
        </p>
        {showEmail && (
          <p className={styles.email} onClick={handleCopyEmail}>
            {emailAddress}
          </p>
        )}
      </div>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/jamie-boeing-b59342272/" target="_blank" rel="noopener noreferrer">
          <img src="/img/linked-in-icon.png" alt="Linked-in" />
        </a>
        <a href="https://github.com/JamieBoeing" target="_blank" rel="noopener noreferrer">
          <img src="/img/github-icon.png" alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
