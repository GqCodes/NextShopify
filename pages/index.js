import Head from 'next/head';
import MainLayout from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      This is the index page
    </MainLayout>
  );
}
