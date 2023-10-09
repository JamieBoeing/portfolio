import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../components/Services/Services'
import ContactForm from '../../components/Contact/ContactModalForm'
import Footer from '../../components/Footer/Footer'
import styles from './ServicesPage.module.scss'

const ServicesPage= () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>My Services</h1>
            </header>
            <Services />
            <Footer />
            <ContactForm />
        </div>
    )
}

export default ServicesPage