import styled from "styled-components";
import Bg from "../../assets/avengersbg.png";

export const Container = styled.div`
  background: url(${Bg}) no-repeat;
  background-position: right;
  background-size: 855px 768px;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 22%,
    rgba(0, 0, 0, 1) 47%,
    rgba(0, 0, 0, 0.33126754119616597) 100%
  );
  width: 100%;
  height: 100vh;
`;

export const ConteinerForm = styled.div`
  margin-left: 150px;
  width: 383px;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    width: 237px;
    height: 95px;
    margin-top: 89px;
    margin-bottom: 58px;
  }

  h1 {
    color: var(--red-900);
    margin-bottom: 16px;
  }

  p {
    color: var(--gray-800);
    margin-bottom: 21px;
    font-size: 1.25rem;
  }

  button {
    width: 383px;
    height: 65px;
    border: none;
    border-radius: 50px;
    background: var(--red-900);
    color: var(--white);
    font-size: 1.75rem;
  }
`;

export const CreateAccount = styled.div`
  margin-top: 30px;
  display: flex;
  p {
    color: var(--gray-800);
    margin-right: 4px;
  }

  a {
    color: var(--red-900);
    text-decoration: none;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  input {
    width: 383px;
    height: 73px;
    border-radius: 50px;
    padding: 28px;
    outline: 0;
    font-size: 1.25rem;

    &:first-child {
      margin-bottom: 18px;
    }
  }
`;

export const Options = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  a {
    text-decoration: none;
    color: var(--gray-800);
    border-bottom: 1px solid var(--red-900);
  }

  span {
    color: var(--gray-800);
  }

  div {
    display: flex;
    align-items: center;

    input {
      margin-right: 4px;
    }
  }
`;
