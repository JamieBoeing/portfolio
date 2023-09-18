
import React from 'react'
import { Link } from 'react-router-dom'
import MyWordCloud from '../../components/WordCloud/WordCloud'
import styles from './HomePage.module.scss'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Welcome to Jamie Boeing's Portfolio</h1>
        <p>A showcase of my web development and design journey.</p>
      </header>
    <Footer />
    </div>
  )
}

export default HomePage
