import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 1rem;
        font-weight: 400;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.HighlightBackground {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
