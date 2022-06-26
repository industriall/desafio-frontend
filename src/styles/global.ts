import "react-toastify/dist/ReactToastify.css";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --form-background: #f5f5f5; 
    --red: #E52E4D;
    --green: #44C08A;

    --blue-light: #4FC3F7;
    --blue-dark: #1E2251;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --gray-lightest: #E4E6F0;
    --gray-light: #C0C1C6;
    --gray-medium: #7B7B7B;
    --gray-dark: #5C5958;

    --black: #312F2F;
  }

  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }


  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body { 
    -webkit-font-smoothing: antialiased;
    background: var(--gray-lightest);
  }

  body,
  input,
  textarea,
  h1,
  h2,
  h3,
  h4,
  label,
  button {
  font-family: "Open sans", sans-serif;
}

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 600px;
    background: var(--form-background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
