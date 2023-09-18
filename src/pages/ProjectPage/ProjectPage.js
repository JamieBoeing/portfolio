import React from "react"
import styles from './ProjectPage.module.scss'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'

const ProjectPage = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>A Showcase of My Projects</h1>
            </header>
        <Projects />
        <Footer />
    </div>
    )
}

export default ProjectPage