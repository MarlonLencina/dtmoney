import styled from "styled-components";
import { darken, transparentize } from "polished";

interface ButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33dd95",
  red: "#e52e4d",
};

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #d7d7d7;
    outline: 0;

    &::placeholder {
      color: var(--text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border-style: none;
    height: 4rem;
    font-weight: 600;
    font-size: 1.2rem;
    transition: 0.2s;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TrnsactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const Button = styled.button<ButtonProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  img {
    height: 25px;
    width: 25px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text);
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;
