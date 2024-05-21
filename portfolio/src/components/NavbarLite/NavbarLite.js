import React from 'react';
import styles from './NavbarLite.module.css'


const NavbarLite = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <p>Your Logo</p>
            </div>
            <ul className={styles.menuItem}>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
            </ul>
            <div className={styles.toggleNavbar}>
                <div className={styles.hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
export default NavbarLite