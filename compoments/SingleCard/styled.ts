import styled from '@emotion/styled';

const Card = styled.div`
  margin-right: 7rem;
  background-color: #ffffff;
  margin-top: 5rem;
  padding: 4rem 7rem;
  height: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

  .card-img {
    width: 50%;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-date-location {
    display: flex;
    background-color: rgba(83, 106, 153, 0.49);
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    width: 50%;
    justify-content: center;
    text-align: center;
    padding: 2% 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin: 1rem 0;
  }

  .card-info {
    margin-top: 3rem;
  }
  .ref-link {
    margin: 3rem;
    padding: 6px 9px;
    background-color: rgba(83, 106, 153, 0.49);
    font-weight: 500;
    font-size: 22px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }
  @media only screen and (max-width: 1112px) {
    margin: 0;

    .card-info {
      margin: 2rem 3rem;
    }
    .card-img {
      width: 70%;
    }
  }
  /* Mobile view */
  @media only screen and (max-width: 768px) {
    .card-date-location {
      display: none;
    }
    .ref-link {
      font-size: 12px;
      padding: 6px 12px;
      color: white;
      background-color: #3a4a69;
    }
  }
`;

export default Card;
