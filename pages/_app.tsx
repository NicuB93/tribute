import '../styles/globals.css';
import '../styles/Head.css';
import '../styles/Navbar.css';
import '../styles/Cards.css';
import '../styles/Footer.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
