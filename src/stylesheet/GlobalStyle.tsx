import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
  }

  @media (max-width: 768px) {
    body {
      font-size: 56.25%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
