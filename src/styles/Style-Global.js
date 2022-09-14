import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root {
    /* THEME LIGHT */
    --BACKGROUND_THEME_WHITE : #d3d3d3;
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


  .button-app {
      border-radius:0;
      width: 20%;
      border: none;
      height: 100%;
      outline: none;
      border: none;
      cursor:pointer;
      background: var(--BUTTON);
      color: white; 
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
  }
  .button-app > svg {
    width: 30px;
    height: 30px;
  }
  .button-appa:active{
    transform:scale(1.1);
  }
  body {
    background: ${(props) =>
      props.themeDark
        ? "var(--BACKGROUND_THEME_DARK)"
        : "var(-BACKGROUND_THEME_WHITE)"} ;
    width: 100%;
    height:100%;
    margin:0;
    padding:0;
    transition: background .3s ease-in;
  }
  .wrapper-padding {
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  #app {
    height: 100%;
  }

  div::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
    // display: none; /* Ocultar scroll */
  }
  div::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  div::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  div::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
`;
export default GlobalStyle;
