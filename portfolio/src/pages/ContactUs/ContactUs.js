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
            </div>

            <div className={styles.contactMenu}>
                <div className={styles.contactBox}>
                    <HomeIcon 
                    sx={{
                        borderRadius:'50%',
                        padding:'20px',
                        backgroundColor:'gray',
                        
                    }}
                    />
                    <h3>ADDRESS</h3>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div>
                    <HomeIcon />
                    <h3>ADDRESS</h3>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div>
                    <HomeIcon />
                    <h3>ADDRESS</h3>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div>
                    <HomeIcon />
                    <h3>ADDRESS</h3>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>

            </div>



        </div>
    )
}

export default ContactUs