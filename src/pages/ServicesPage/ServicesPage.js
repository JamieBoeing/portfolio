import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../components/Services/Services'
import styles from './ServicesPage.module.scss'
import Footer from '../../components/Footer/Footer'

const ServicesPage= () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>My Services</h1>
            </header>
            <Services />
            <Footer />
        </div>
    )
}

export default ServicesPage