import React from 'react';
import styles from './Resume.module.css';
import { Link } from 'react-router-dom';

const Resume = () => {
  const resumeData = [
    {
      id: 1,
      year: '2023 - 2024',
      institude: 'WORK EXPERIENCE',
      location: 'Front- End Developer KJSS Comsos',
      description:''
    },
    {
      id: 2,
      year: '2022 - 2023',
      institude: 'SPRK Technologies Institute',
      location: 'Internship Completed',
      description:'',
    },
    {
      id: 6,
      year: '2021 - 2022',
      institude: 'Join SPRk Technologies Institude',
      location: `I'm grateful to be part of this institute. Even during the lockdown, they ensured we received all services, conducted online lectures and webinars, and resumed offline batches with necessary precautions as per government norms. It's been a great experience!`,
      description:'',
    },
    {
      id: 3,
      year: '2018 - 2021',
      institude: 'Bachelor of Science in Information Technology',
      location: 'Ramsheth Thakur College, Kharghar, Mumbai University',
      description:'',
    },
    {
      id: 4,
      year: '2016 - 2018',
      institude: 'Higher Secondary Certificate (HSC)',
      location: 'Atmaram Dhodu Mhatre Juinior College Nawde',
      description:'',
    },
    {
      id: 5,
      year: '2014 - 2016',
      institude: 'Secondary School Certificate (SSC)',
      location: 'TRimurti Vidya Mandir Dahisar Mori',
      description:'',
    },
   
    
  ]
  return (
    <div className={styles.mainBox}>
      <div className={styles.resume}>
        <h1>Resume</h1>
        <h3>Resume</h3>
        <p>
          Experienced React Developer adept at creating and managing web-based software solutions. Skilled in JavaScript and
          React with 1.5 years of practical experience.
        </p>
        <div className={styles.grid}>
          {resumeData.map(resume => (
            <div className={styles.card} key={resume.id}>
              <h2>{resume.year}</h2>
              <p>{resume.institude}</p>
              <h6>{resume.location}</h6>

            </div>
          ))}

        </div>
        <Link to="/cv"
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <button className={styles.downloadButton}>Download CV</button>
        </Link>
      </div>

  
    </div>
  );
};

export default Resume;
