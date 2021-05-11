import { createGlobalStyle} from 'styled-components';
import device from '../components/shared/device/device';

const X = 5;

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    

    &:not(input || textArea) {
      user-select: none;
    }
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    transition: ${({ theme }) => theme.transition.background};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-size: 12px;

    @media ${device.laptop} {
        font-size: 16px;
   }    
  }

  h1 {
   font-size: 3em; /* 48px/36px */
   line-height: 1em;
   margin-bottom: 22px-${X}px;
   transition: ${({ theme }) => theme.transition.color};
}
h2 {
   font-size: 2.5em; /* 40px/30px */
   line-height: 1em; /* 40px/30px */
   padding-top: ${X}px;
   margin-bottom: 11px-${X}px;
   transition: ${({ theme }) => theme.transition.color};
}
h3 {
   font-size: 1.5em; /* 24px/18px */
   line-height: 1.67em; /* 40px/30px ?? */
   margin: 0 0 11px-${X}px;
   transition: ${({ theme }) => theme.transition.color};
}
h4 {
   font-size: 1em; /* 18px/16px */
   line-height: 1em; /* 40px/30px ?? */
   margin: 0 0 11px-${X}px;
   transition: ${({ theme }) => theme.transition.color};
}
p {
   font-size: 1.25em; /* 20px/15px */
   line-height: 1.5em;
   margin-bottom: 11px-${X}px;
   transition: ${({ theme }) => theme.transition.color};
}
`;

export default GlobalStyle;