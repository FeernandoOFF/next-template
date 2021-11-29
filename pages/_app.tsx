import '../styles/globals.css';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Tailwind CSS</title>
        <meta name="description" content="Next.js Tailwind CSS" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
