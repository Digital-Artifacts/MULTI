import React from 'react';
import { StreamProvider } from '@/context/StreamContext'; // Adjust the import path as needed

function MyApp({ Component, pageProps }) {
  return (
    <StreamProvider>
      <Component {...pageProps} />
    </StreamProvider>
  );
}

export default MyApp;
