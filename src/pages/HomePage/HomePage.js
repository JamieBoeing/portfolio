import React from 'react';
import MyWordCloud from '../../components/WordCloud/WordCloud';
import styles from './HomePage.module.scss';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import { images, aboutMe } from '../../data';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>Welcome to Jamie Boeing's Portfolio</h1>
        <p>A showcase of my web development and design journey.</p>
      </header>
      <div className={styles.contentWrapper}>
        <section className={styles.tag}>
          <p>{aboutMe.tag}</p>
        </section>
        <div className={styles.imageCarousel}>
          <Carousel images={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
