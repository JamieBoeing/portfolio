import React from "react"
import styles from './ProjectPage.module.scss'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import ImageSlider from "../../components/ImageSlider/ImageSlider"

const ProjectPage = () => {
    return (
        <div className={styles.projectContainer}>
            <header>
                <h1>A Showcase of My Projects</h1>
            </header>
        <div className={styles.projectPageContainer}>
            <Projects />
            </div>
        <div className={styles.projectPageGraphicContainer}>
            <ImageSlider />
        </div>
        <Footer />
    </div>
    )
}

export default ProjectPage