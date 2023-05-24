import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    green: '#00A79D',
    red: '#FF5A5F',
    darkBlue: '#204975',
    darkerBlue: '#1A3747',
    lightGrey: '#F2F2F2',
  },
  breakpoints: {
    mobile: '@media only screen and (min-width: 480px)',
    tablet: '@media only screen and (min-width: 600px)',
    laptop: '@media only screen and (min-width: 1024px)',
  },
};

export default theme;
