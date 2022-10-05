import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    font-size: 10px;
  }

  ul,li {
    list-style: none;
  }
  img {
    vertical-align: center;
  }
  a{
    text-decoration: none;
    color: black;
  }
`

export default GlobalStyle