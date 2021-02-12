import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  :root {
    /* THEME LIGHT */
    --BACKGROUND_THEME_WHITE : #E1DFDE;
    --PURPLE : #794c74;
    --SUNSET: #c56183;
    --YELLOW: #fadcaa;
    --BLUE: #b2deec;
    --BUTTON : linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    /* THEME DARK */
    --BACKGROUND_THEME_DARK : rgb(29, 29, 29);
    --BLUE_DARK : #032541;
    --BLUE_LIGHT : #064375;
  }
  * {
    box-sizing:border-box;
  }
  html {
    font-family: 'Roboto', sans-serif;
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
