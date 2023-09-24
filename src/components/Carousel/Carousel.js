import React, { useState, useEffect } from 'react';
import { images } from '../../data'; 

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
    <div className="carousel">
      <img src={`/img/${images[currentImageIndex]}`} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Carousel;
