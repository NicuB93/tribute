import Navbar from '../Navbar';
import Image from 'next/image';
import Head from './styled';

const HeadPage = () => {
  return (
    <Head>
      <Navbar />
      <header>
        <div className="head-info">
          <figure id="img-div">
            <div className="head-img">
              <Image
                id="image"
                src="/images/headImg.png"
                alt="Norman Borlaug"
                layout="responsive"
                width={300}
                height={200}
              />
            </div>
            <figcaption id="img-caption" className="head-figure">
              Dr. Norman Borlaug, third from the left, trains biologists in
              Mexico on how to increase wheat yields - part of his life-long war
              on hunger.
            </figcaption>
          </figure>
          <div className="info">
            <h1 id="title" className="info-h1">
              Dr. Norman Borlaug
            </h1>
            <h2 className="info-h2">The man who saved a billion lives</h2>
            <h1 className="info-years">1914 - 2009</h1>
          </div>
        </div>
      </header>
    </Head>
  );
};

export default HeadPage;
