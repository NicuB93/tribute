import type { NextPage } from 'next';
import Head from '../compoments/Head';
import Cards from '../compoments/Cards';
import Script from 'next/script';
import Footer from '../compoments/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
      <Head />
      <main id="main">
        <Cards />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
