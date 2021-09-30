import styled from "styled-components";
import HeroBanner from "../../assets/hero-banner.png";

export const Container = styled.div`
  
  width: 100%;
  height: 80vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--black-900);
  border-bottom: 3px solid var(--red-opacity-37);
  height: 110px;
  padding: 0 55px;

  img {
    width: 122px;
    height: 54px;
  }

  div {
    display: flex;
    align-items: center;

    nav a {
      margin-right: 86px;
      text-decoration: none;
      font-size: 1.875rem;
      color: var(--gray-800);

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export const Avatar = styled.div`
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 15px;
  }

  button {
    background: none;
    border: 0;
    font-size: 1.25rem;
    color: var(--gray-800);

    &:hover {
      color: var(--white);
    }
  }
`;

export const ContainerCards = styled.div`
  background: url(${HeroBanner}) no-repeat;
  background-size: 100% 768px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 139px 147px;
`;

export const Cards = styled.div`
  width: 289px;
  height: 439px;
  border-radius: 30px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  div {
    position: absolute;
    margin-top: -240px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 234px;
    border-radius: 30px;
    align-items: center;
    background: var(--red-900);
    background: linear-gradient(
      180deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 0, 0, 0.0959734235491071) 100%
    );

    h2 {
      font-size: 1.25rem;
      color: var(--white);
      margin: 28px 0 15px 0;
      font-weight: 700;
    }

    p {
      font-size: 0.75rem;
      color: var(--white);
      font-weight: 250;
      width: 243px;
      height: 123px;
    }

    button {
      margin-top: -5px;
      background: none;
      border: 0;
      color: var(--gray--50);
      font-size: 1.25rem;
      font-weight: 250;

      &:hover {
        color: var(--white);
      }
    }
  }
`;
