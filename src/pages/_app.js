import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import Login from './login';
export default function App({ Component, pageProps }) {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    const storedRole = isClient ? JSON.parse(localStorage.getItem('user')) : null;
    setRole(storedRole);
  }, []);

  return <>
    {
      role ? (
        <Layout>
          <Component {...pageProps} />
        </Layout >
      ) : (
        <Login />
      )
    }
  </>
}


