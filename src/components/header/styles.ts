import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--blue);
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
  }

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    outline: 0;
    border-style: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
