import React from "react";
import Slider from "react-slick";
import { graphics } from "../../data";
import styles from './ImageSlider.module.scss'



const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider className={styles.customInnerSlider} {...settings}>
                {graphics.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </Slider>
            <div className={styles.customArrows}>
                <button className={styles.customPrevArrow}></button>
                <button className={styles.customNextArrow}></button>
            </div>
            <div className={styles.customDots}></div>
        </div>
    )
}

export default ImageSlider