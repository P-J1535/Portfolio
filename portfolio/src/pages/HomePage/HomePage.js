// src/HomePage.js
import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';


const HomePage = () => {

const slides = [
    {
      text: "Hello! I'm a web designer based in Kharghar",
      image: "path_to_your_image1.jpg",
    },
    {
      text: "Hello! I'm a graphic designer based in New York",
      image: "path_to_your_image2.jpg",
    },
    // Add more slides as needed
  ];
  


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.hello}>HELLO!</h1>
        <h1 className={styles.title}>
          I'm a <span className={styles.highlight}>web designer</span> based in London
        </h1>
        <div className={styles.buttons}>
          <button className={styles.hireButton}>HIRE ME</button>
          <button className={styles.worksButton}>MY WORKS</button>
        </div>
      </div>
      <img className={styles.image} src={slides[currentSlide].image} alt="Slide" />
    </div>
  );
};

export default HomePage;
