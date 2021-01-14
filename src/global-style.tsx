import styled, { createGlobalStyle } from 'styled-components'
import { rem, normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${rem(22)};
    font-family: 'Nunito', 'Open Sans', sans-serif;
    color: #292929;
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
  }

  h1 {
    font-size: ${rem(40)};
    margin: 0 0 ${rem(20)};
    text-align: center
  }
`

export const Container = styled.div`
  width: ${rem(520)};
  padding: 0 ${rem(20)};
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`

export const Card = styled.div`
  border-radius: ${rem(12)};
  background-color: #fff;
  padding: ${rem(20)};
  box-shadow: 0 5px 25px rgba(46, 46, 46, 0.2);
`

export const Layout = styled.div`
  min-height: 100vh;
  padding: 10vw 0;
`
