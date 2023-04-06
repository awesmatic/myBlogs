// pages/login.js

import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

const Login = ({ setRole }) => {
    const router = useRouter();
    const handleLogin = (userType) => {
        // set logged in user type in local storage
        setRole(userType)
        // localStorage.setItem('role', userType);
        // redirect to home page
        // router.push('/');
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <div className={styles.buttons}>
                <button onClick={() => handleLogin(1)}>Admin Login</button>
                <button onClick={() => handleLogin(2)}>Author Login</button>
                <button onClick={() => handleLogin(3)}>Reader Login</button>
            </div>
        </div>
    );
};

export default Login;
