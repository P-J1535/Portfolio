import React from 'react';
import styles from './AboutUs.module.css';

// Import the image (assuming the image is in the same directory)
import profileImage from '../../images/aboutUs.jpg';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Clark Thompson" className={styles.profileImage} />
      </div>
      <div className={styles.infoContainer}>
        <h1>About Me</h1>
        <p className={styles.subtitle}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <ul className={styles.infoList}>
          <li><strong>Name:</strong> Clark Thompson</li>
          <li><strong>Date of Birth:</strong> January 01, 1987</li>
          <li><strong>Address:</strong> San Francisco CA 97987 USA</li>
          <li><strong>Zip code:</strong> 1000</li>
          <li><strong>Email:</strong> clarkthomp@gmail.com</li>
          <li><strong>Phone:</strong> +1-2234-5678-9-0</li>
        </ul>
        <div className={styles.projectsCompleted}>
          <strong>120</strong> Projects complete
        </div>
        <button className={styles.downloadButton}>DOWNLOAD CV</button>
      </div>
    </div>
  );
};

export default AboutUs;
