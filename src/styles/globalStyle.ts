import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
   --background-color: #F0F2F5;
   --text: #969CB3;
   --title: #363F5F;
   --blue: #5429CC;
   --blue-light: #6933FF;
   --red: #E62E4D;
   --green: #33CC95;
   --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

body {
  background-color: var(---background-color);
  -webkit-font-smoothing: antialiased;
}

body, input, text-area, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.5;
    cursor: not-allowed
}

.Overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Modal {
    width: 100%;
    max-width: 576px;
    background-color: #F0F2F5;
    padding: 3rem;
    position: relative;
    }

.reactModalClose {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    border-style: none;
    transition: .2s;

    &:hover {
      filter: brightness(0.8);
    }
}

`;
