import styled from '@emotion/styled';

export const DoubleCardsStyled = styled.div`
  background-color: #ffffff;
  margin: 5rem 0;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 1112px) {
    margin: 4rem 0;
    padding: 2rem 4rem;
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    padding: 1rem;
  }
`;

export const CardsGrid = styled.div`
  max-width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  column-gap: 9rem;

  /* Tablet view */
  @media only screen and (max-width: 1112px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  /* Mobile View */
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
