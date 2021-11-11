import styled from '@emotion/styled';

type Props = {
  cardStyle: string;
};

export const Card = styled.div<Props>`
  display: grid;
  grid-template-rows: 400px 150px 400px;
  justify-content: center;
  align-items: center;

  .card-date-location {
    display: flex;
    background-color: rgba(83, 106, 153, 0.49);
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 2% 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin: 1rem 0;
  }

  .card-year {
    margin: 4rem 0;
    font-weight: 500;
    font-size: 64px;
    line-height: 75px;
    color: rgba(58, 84, 138, 0.87);
    text-align: center;
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  }

  .card-info {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }

  .card-img {
    display: block;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    position: relative;
  }

  ${(props) => {
    if (props.cardStyle !== 'card-1') {
      return `
            .card-img {
                order: -1;
            }
            .info {
                order: 3;
            }
          `;
    }
  }}

  /* Tablet view */
  @media only screen and (max-width: 1112px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin-bottom: 2rem;
    column-gap: 6rem;

    .card-year {
      order: -1;
      grid-column: 1/3;
      font-size: 36px;
      margin: 0;
    }

    ${(props) => {
      if (props.cardStyle === 'card-1') {
        return `
            .card-img {
                order: -1;
                grid-column: 1/2;
            }
            .info {
                grid-column: 2/3;

            }`;
      } else
        return `
                .card-img {
                    order: 3;
                    grid-column: 2/3;
                }
                .info {
                    grid-column: 1/2;
                }
      `;
    }}
  }
  /* Mobile view */
  @media only screen and (max-width: 768px) {
    column-gap: 1rem;
    ${(props) => {
      if (props.cardStyle === 'card-1') {
        return `
            .info {
                order: 1;
            }
            .card-year {
                order: -1;
            }
            `;
      }
    }}

    .card-img {
      height: 60%;
    }
  }
`;
