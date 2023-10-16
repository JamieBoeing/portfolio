import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'
import styles from './ServicesPage.module.scss'
// import ContactModal from '../../components/Contact/ContactModal'

const ServicesPage= () => {
    return (
        <div className={styles.serviceHeader}>
            <header>
                <h1>My Services</h1>
            </header>
            <Services />
            <Footer />
            {/* <ContactModal /> */}
        </div>
    )
}

export default ServicesPage