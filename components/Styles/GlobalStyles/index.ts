import { createGlobalStyle } from 'styled-components'
import { ITheme } from '../Theme'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box
  }

  body {
    padding: 0;
    margin: 0;
    letter-spacing: 0.02rem;
    font-size: 16px;
    min-height: 100vh;
    line-height: 1.5;
  }

  p, ul {
    margin: 0;
  }

  #__next {
    font-family: Raleway, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }: { theme: ITheme }) => theme.body};
    color: ${({ theme }: { theme: ITheme }) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    text-align: justify;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
  }
`
