import styled from '@emotion/styled';

const Head = styled.div`
  background-color: #ffffff;
  min-height: 640px;
  max-height: 100vh;
  padding: 3rem 6rem;
  margin: 5rem 0 0 5rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

  .head-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
    margin: 3rem 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .info-h1 {
    line-height: 50px;
    font-size: 43px;
  }

  .info-h2 {
    font-weight: 400;
    font-size: 36px;
    letter-spacing: 3px;
    line-height: 42px;
  }

  .info-years {
    font-weight: 500;
    font-size: 64px;
    color: rgba(58, 84, 138, 0.87);
    line-height: 75px;
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }

  .head-img {
    display: block;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  }

  .head-figure {
    margin-top: 3rem;
    font-size: 19px;
    font-weight: 500;
    line-height: 22px;
  }

  figure {
    margin: 0;
  }
  /* Responsive */

  @media screen and (max-width: 1112px) {
    margin: 4rem 0;
    padding: 2rem 2rem;
    .logo {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.285em;

      color: #000000;
    }
    .info-h1 {
      font-weight: bold;
      font-size: 27px;
      line-height: 32px;
      color: #000000;
    }

    .info-h2 {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.085em;

      color: #000000;
    }

    .info-years {
      font-weight: 500;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      color: rgba(58, 84, 138, 0.87);
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1rem;
    padding: 2rem 1rem;
    .head-info {
      grid-template-columns: 1fr;
    }
    .info {
      order: -1;
    }
    .info-h1 {
      font-size: 24px;
    }
    .info-h2 {
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.05em;
    }
    .info-years {
      font-size: 19px;
      line-height: 21px;
      color: #000000;
      text-align: start;
      font-weight: 400;
      text-shadow: none;
    }
    .head-figure {
      margin-top: 1rem;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export default Head;
