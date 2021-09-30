import styled from "styled-components";

export const HeaderComponent = styled.header`
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