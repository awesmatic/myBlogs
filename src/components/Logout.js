import { useRouter } from 'next/router';
import styles from '../styles/LogoutButton.module.css';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <button className={styles.button} onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
