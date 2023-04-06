import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import LogoutButton from './Logout';

function Navbar() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/createblog">
                        Create Blog
                    </Link>
                </li>
            </ul>
            <ul className={styles.dropdown}>
                <LogoutButton />
            </ul>
        </div>
    );
}

export default Navbar;
