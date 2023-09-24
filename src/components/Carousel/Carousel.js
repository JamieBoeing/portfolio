import React, { useState, useEffect } from 'react';
import { images } from '../../data'; 
import styles from './Carousel.module.scss'

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through images automatically
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval); // Cleanup to prevent memory leaks
    };
  }, []);

  return (
    <div className={styles.carousel}>
    {/* Add a class to the img element to control its size */}
    <img
      className={styles.carouselImage} /* Create this class in your CSS */
      src={`/img/${images[currentImageIndex]}`}
      alt={`Image ${currentImageIndex + 1}`}
    />
  </div>
  );
};

export default Carousel;
