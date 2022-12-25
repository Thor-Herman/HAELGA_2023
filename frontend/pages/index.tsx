import type { NextPage } from 'next';
import Head from 'next/head';
import App from '../components/App';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HÆLGA 2023</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App />
    </>
  );
};

export default Home;
