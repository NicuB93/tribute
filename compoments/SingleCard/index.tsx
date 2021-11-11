import Image from 'next/dist/client/image';
import Card from './styled';
const SingleCard = ({ ...singleCardProps }) => {
  return (
    <Card>
      <div className="card">
        <p className="card-date-location">{singleCardProps.yearLocation}</p>
        <div className="card-info">{singleCardProps.info}</div>
        <div className="card-year">{singleCardProps.year}</div>
        <div className="card-img">
          <Image
            src={singleCardProps.imgPath}
            alt="Norman Borlaug"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
        <a
          href="https://en.wikipedia.org/wiki/Norman_Borlaug"
          target="_blank"
          rel="noreferrer"
          id="tribute-link"
          className="ref-link"
        >
          More info on the wikipedia
        </a>
      </div>
    </Card>
  );
};

export default SingleCard;
