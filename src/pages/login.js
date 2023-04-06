// pages/login.js

import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const handleLogin = (userRole, userId) => {
        // set logged in user type in local storage
        const user = { role: userRole, userId };
        localStorage.setItem('user', JSON.stringify(user));
        // redirect to home page
        router.push('/');
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <div className={styles.buttons}>
                <button onClick={() => handleLogin('Admin', 1)}>Admin Login</button>
                <button onClick={() => handleLogin('Author', 2)}>Author Login</button>
                <button onClick={() => handleLogin('Reader', 3)}>Reader Login</button>
            </div>
        </div>
    );
};

export default Login;
