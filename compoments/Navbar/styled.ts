import styled from '@emotion/styled';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .logo {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 64px;
    text-align: left;
    letter-spacing: 1rem;
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  }

  nav {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
    padding-right: 20%;
  }
  .nav-ul {
    list-style: none;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }

  .nav-link {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 25px;
  }

  @media screen and (max-width: 1112px) {
    .logo {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.285em;

      color: #000000;
    }
    .nav-link {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;

      color: #000000;

      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
  @media screen and (max-width: 768px) {
    .logo {
      font-size: 36px;
      line-height: 42px;
      letter-spacing: 0;
    }
    nav {
      padding: 0;
    }
    .nav-ul {
      gap: 0.5rem;
    }
    .nav-link {
      font-size: 12px;
    }
  }
`;

export default Nav;
