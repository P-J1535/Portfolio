import React from 'react';
import styles from './Resume.module.css';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className={styles.mainBox}>
    <div className={styles.resume}>
      <h1>My Resume</h1>
      <p>
      Experienced React Developer adept at creating and managing web-based software solutions. Skilled in JavaScript and
      React with 1.5 years of practical experience.
      </p>
      <div className={styles.grid}>
      <div className={styles.card}>
          <h2>2023-2024</h2>
          <p>WORK EXPERIENCE</p>
          <h6>Front- End Developer 
          KJSS Comsos </h6>
        </div>
        <div className={styles.card}>
        <h2>2022-2023</h2>
        <p>SPRK Technologies Institute</p>
        <h6>Internship Completed</h6>
      </div>
        <div className={styles.card}>
        <h2>2021-2022</h2>
        <p>SPRK Technologies Institute</p>
        <h6>Mern Full-Stack Cource Completed</h6>
      </div>
        <div className={styles.card}>
          <h2>2018-2021</h2>
          <p>Bachelor of Science in Information
          Technology</p>
          <h6>Ramsheth Thakur College, Kharghar, Mumbai University</h6>
        </div>
        <div className={styles.card}>
          <h2>2016-2018</h2>
          <p>Higher Secondary Certificate (HSC) </p>
          <h6>
          
Atmaram Dhodu Mhatre Jr College, Nawade 
          </h6>
        </div>
        <div className={styles.card}>
          <h2>2014-2016</h2>
          <p>Secondary School Certificate (SSC) 
          </p>
          <h6>Trimurti Vidya Mandir, Dahisar Mori</h6>
        </div>
        
     
      </div>
      <Link to="/cv" 
      style={{
        display:'flex',
        justifyContent:'center'
      }}
      >
        <button className={styles.downloadButton}>Download CV</button>
      </Link>
    </div>
    </div>
  );
};

export default Resume;
