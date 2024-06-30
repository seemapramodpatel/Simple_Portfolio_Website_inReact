import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    color: #333;
  }

  h1, h2 {
    font-family: 'Roboto', sans-serif;
    color: #222;
  }

  p {
    line-height: 1.6;
  }

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
