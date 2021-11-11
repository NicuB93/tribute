import CardComponent from '../Card';
import tributeInfo from '../../pages/tributeInfo';
import SingleCard from '../SingleCard';
import { DoubleCardsStyled, CardsGrid } from './styled';

const Cards = () => {
  return (
    <div id="tribute-info">
      {tributeInfo.map((e, i) => {
        if (!e[1])
          return (
            <SingleCard
              key={i}
              year={e[0].year}
              yearLocation={e[0].yearLocation}
              info={e[0].info}
              imgPath={e[0].imgPath}
            />
          );
        else
          return (
            <DoubleCardsStyled key={i}>
              <CardsGrid>
                <CardComponent
                  class="1"
                  year={e[0].year}
                  yearLocation={e[0].yearLocation}
                  info={e[0].info}
                  imgPath={e[0].imgPath}
                />
                <CardComponent
                  class="2"
                  year={e[1].year}
                  yearLocation={e[1].yearLocation}
                  info={e[1].info}
                  imgPath={e[1].imgPath}
                />
              </CardsGrid>
            </DoubleCardsStyled>
          );
      })}
    </div>
  );
};

export default Cards;
