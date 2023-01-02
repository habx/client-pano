import { createGlobalStyle } from 'styled-components'

import { theme } from '@habx/ui-core'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${theme.font()};
    color: ${theme.textColor()};
  }

  * {
    box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
  /* clears the 'X' from Internet Explorer */
  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

  /* clears the 'X' from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`
