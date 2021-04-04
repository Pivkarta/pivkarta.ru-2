import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    outline: none;
  }

  body, html {
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
  }

  body {
    font-family: Areal, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.a.default};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.a.hover};
      /* text-decoration: underline; */
    }
  }

  h1, h2, h3 {
    font-weight: 500;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.2rem;
  }

`
