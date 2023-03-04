import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Arsenica Italic';
    src: url('/fonts/ArsenicaTrial-Italic.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
  
    ::after{
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: 0.15;
      z-index: 2;
      pointer-events: none;
    }
  }

  .three-canvas {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 110vh !important;
    z-index: -1;
  }
`;
