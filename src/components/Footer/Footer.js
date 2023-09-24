import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {

    const currentYear = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            
            <p>&copy; {currentYear} Jamie Boeing</p>
            <div className={styles.links}>
            <a href="https://www.linkedin.com/in/jamie-boeing-b59342272/" target="_blank" rel="noopener noreferrer">
                <img src="/img/linked-in-icon.png" alt="Linked-in" />
            </a>
            <a href="https://github.com/JamieBoeing" target="_blank" rel="noopener noreferrer">
                <img src="/img/github-icon.png" alt="Github" />
            </a>
            </div>
        </footer>
    )
}

export default Footer