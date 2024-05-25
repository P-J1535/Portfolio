import React from 'react'
import styles from './ContactUs.module.css'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import TelegramIcon from '@mui/icons-material/Telegram';
import PublicIcon from '@mui/icons-material/Public';

const ContactUs = () => {


    return (
        <div className={styles.contactUs}>
            <div className={styles.contactPara}>
            <h1>Contact Me</h1>
            <h3>Contact</h3>
            <p>
          Experienced React Developer adept at creating and managing web-based software solutions. Skilled in JavaScript and
          React with 1.5 years of practical experience.
        </p>
            </div>

            <div className={styles.contactMenu}>
                <div className={styles.contactBox}>
                    <HomeIcon 
                    className={styles.iconStyles}/>
                    <h3>ADDRESS</h3>
                    <p>Kharghar, Navi-Mumbai</p>
                </div>
                <div className={styles.contactBox}>
                    <HomeIcon className={styles.iconStyles} />
                    <h3>Contact</h3>
                    <p>+91 8451031535</p>
                </div>
                <div className={styles.contactBox}>
                    <HomeIcon className={styles.iconStyles} />
                    <h3>Website</h3>
                    <p>attendence.kjssteel.com</p>
                </div>
                <div className={styles.contactBox}>
                    <HomeIcon className={styles.iconStyles} />
                    <h3>ADDRESS</h3>
                    <p></p>
                </div>

            </div>



        </div>
    )
}

export default ContactUs