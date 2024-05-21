import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Temp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Your Logo</div>
      <ul className={`${styles.navbarMenu} ${isOpen ? styles.active : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
      <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
      </div>
    </nav>
  );
};

export default Temp;