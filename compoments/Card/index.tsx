import Image from 'next/dist/client/image';
import { Card } from './styled';

const CardComponent = ({ ...CardProps }) => {
  return (
    <Card cardStyle={`card-${CardProps.class}`}>
      <div className="info">
        <p className="card-date-location">{CardProps.yearLocation}</p>
        <div className="card-info">{CardProps.info}</div>
      </div>
      <div className="card-year">{CardProps.year}</div>
      <div className="card-img">
        <Image
          src={CardProps.imgPath}
          alt="Norman Borlaug"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Card>
  );
};

export default CardComponent;
