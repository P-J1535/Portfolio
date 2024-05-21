import React from 'react';
import styles from './Footer.module.css';
import { Twitter, Facebook, Instagram, LocationOn, Phone, Email, Favorite } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>About</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className={styles.socials}>
            <a href="#"><Twitter /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Business Strategy</a></li>
            <li><a href="#">Data Analysis</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Have a Questions?</h3>
          <ul>
            <li><LocationOn /> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li><Phone /> +2 392 3929 210</li>
            <li><Email /> info@yourdomain.com</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright ©2024 All rights reserved | This template is made with <Favorite className={styles.heart} /> by Colorlib</p>
      </div>
    </footer>
  );
}

export default Footer;
