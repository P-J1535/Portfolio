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
            <h2>Contact</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>

            </div>

            <div className={styles.contactMenu}>
                <div className={styles.contactBox}>
                    <HomeIcon className={styles.icons} />
                    <h3>ADDRESS</h3>
                    <p>Kharghar, Navi-Mumbai</p>
                </div>

                <div className={styles.contactBox}>
                    <HomeIcon
                        className={styles.icons}

                    />
                    <h3>Contact Number</h3>
                    <p>+91 8451031535</p>
                </div>
                <div className={styles.contactBox}>
                    <HomeIcon className={styles.icons} />
                    <h3>Email Address</h3>
                    <p>Prathameshjepal97@gmail.com</p>
                </div>
                <div className={styles.contactBox}>
                    <HomeIcon className={styles.icons} />
                    <h3>Website</h3>
                    <p>www.attedenceportal.com</p>
                </div>


            </div>



        </div>
    )
}

export default ContactUs