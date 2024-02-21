import React, { useState, useEffect } from 'react';
import MyWordCloud from '../../components/WordCloud/WordCloud';
import styles from './HomePage.module.scss';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import { images, aboutMe } from '../../data';

const HomePage = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = aboutMe.tag;

  useEffect(() => {
    let charIndex = 0;
    let typingTimer;

    function typeText() {
      if (charIndex < fullText.length) {
        setTypingText(fullText.substring(0, charIndex + 1));
        charIndex++;
        typingTimer = setTimeout(typeText, 100); // Adjust the typing speed here
      }
    }

    typeText();

    return () => {
      clearTimeout(typingTimer);
    };
  }, [fullText]);

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.titleCenter}>Welcome to Jamie Boeing's Portfolio</h1>
        <h2 className={styles.titleSub}>A showcase of my web development and design journey.</h2>
      </header>
      <div className={styles.contentWrapper}>
        <section className={styles.tag}>
          <p className={typingText}>{typingText}</p>
        </section>
        <div className={styles.imageCarousel}>
          <Carousel images={images} />
        </div>
      </div>
      <div className={styles.wordCloudStyles}>
       <MyWordCloud />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
