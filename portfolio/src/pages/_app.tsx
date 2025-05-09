// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#4F46E5', // Indigo-600
            color: '#ffffff',
            borderRadius: '8px',
            padding: '12px 16px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
          },
          iconTheme: {
            primary: '#ffffff',
            secondary: '#4F46E5',
          },
        }}
      />
    </>
  );
}
