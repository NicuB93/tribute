import DoubleCards from './DoubleCards';
import tributeInfo from '../tributeInfo';
import SingleCard from './SingleCard';

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
            <div className="double-cards" key={i}>
              <div className="cards">
                <DoubleCards
                  class="1"
                  year={e[0].year}
                  yearLocation={e[0].yearLocation}
                  info={e[0].info}
                  imgPath={e[0].imgPath}
                />
                <DoubleCards
                  class="2"
                  year={e[1].year}
                  yearLocation={e[1].yearLocation}
                  info={e[1].info}
                  imgPath={e[1].imgPath}
                />
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Cards;
