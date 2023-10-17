import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../components/Services/Services'
// import ContactForm from '../../components/Contact/ContactModalForm'
import Footer from '../../components/Footer/Footer'
import styles from './ServicesPage.module.scss'

const ServicesPage= () => {
    return (
        <div className={styles.serviceHeader}>
            <header>
                <h1>My Services</h1>
            </header>
            <Services />
            <section className={styles.serviceContact}>
            {/* <ContactForm /> */}
            </section>
        <div className={styles.serviceFooter}>
            <Footer />
        </div>
        </div>
    )
}

export default ServicesPage