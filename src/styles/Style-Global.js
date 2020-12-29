import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  :root {
    --BACKGROUND_THEME_DARK : rgb(29, 29, 29);
    --BACKGROUND_THEME_WHITE : #E1DFDE;
    --BLUE_DARK : #032541;
  }
  * {
    box-sizing:border-box;
  }
  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size : 62.5%;
  }
  body {
    background: ${props => props.themeDark ? 'var(--BACKGROUND_THEME_DARK)' : 'var(-BACKGROUND_THEME_WHITE)'} ;
    width: 100%;
    height:100%;
    margin:0;
    padding:0;
  }
  .wrapper-padding {
    padding: 0 20px 0 20px;
  }
  #app {
    height: 100%;
  }
`
export default GlobalStyle
