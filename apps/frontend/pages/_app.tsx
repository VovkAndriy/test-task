import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppWrapper } from '../components/AppContext';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app bg-white">
        <Component {...pageProps} />
      </main>
    </AppWrapper>
  );
}

export default CustomApp;
