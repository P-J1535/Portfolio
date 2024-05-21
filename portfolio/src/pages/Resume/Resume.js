import React from 'react';
import styles from './Resume.module.css';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className={styles.mainBox}>
    <div className={styles.resume}>
      <h1>Resume</h1>
      <p>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>2018-2021</h2>
          <p>Bachelor of Science in Information
          Technology</p>
          <h6>Ramsheth Thakur College, Kharghar, Mumbai University</h6>
        </div>
        <div className={styles.card}>
          <h2>2016-2018</h2>
          <p>Art & Creative Director</p>
          <h6>Ramsheth Thakur College, Kharghar, Mumbai University</h6>
        </div>
        <div className={styles.card}>
          <h2>2014-2018</h2>
          <p>Bachelor's Degree of CA</p>
          <h6>Ramsheth Thakur College, Kharghar, Mumbai University</h6>
        </div>
        <div className={styles.card}>
          <h2>2014-2018</h2>
          <p>Wordpress Developer</p>
          <h6>Ramsheth Thakur College, Kharghar, Mumbai University</h6>
        </div>
        <div className={styles.card}>
          <h2>2014-2018</h2>
          <p>Diploma in Computer</p>
          <h6>Ramsheth Thakur College, Kharghar, Mumbai University</h6>
        </div>
        <div className={styles.card}>
          <h2>2017-2018</h2>
          <p>UI/UX Designer</p>
        </div>
      </div>
      <Link to="/cv">
        <button className={styles.downloadButton}>Download CV</button>
      </Link>
    </div>
    </div>
  );
};

export default Resume;
