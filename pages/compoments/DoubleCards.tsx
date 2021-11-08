import Image from 'next/dist/client/image';

const DoubleCards = ({ ...DoubleCardsProps }) => {
  return (
    <div className={`card-${DoubleCardsProps.class}`}>
      <div className="info">
        <p className="card-date-location">{DoubleCardsProps.yearLocation}</p>
        <div className="card-info">{DoubleCardsProps.info}</div>
      </div>
      <div className="card-year">{DoubleCardsProps.year}</div>
      <div className="card-img">
        <Image
          src={DoubleCardsProps.imgPath}
          alt="Norman Borlaug"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default DoubleCards;
