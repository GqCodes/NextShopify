import Head from 'next/head';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
