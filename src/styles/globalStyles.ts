import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Arsenica Italic';
    src: url('/fonts/ArsenicaTrial-Italic.ttf');
  }

  @font-face {
    font-family: 'Arsenica Medium Italic';
    src: url('/fonts/ArsenicaTrial-MediumItalic.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: visible;
    color: white;

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
    z-index: 1;
    overflow: visible !important;

  }
`;
