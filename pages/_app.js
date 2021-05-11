import {useEffect} from 'react';

import GlobalStyle from '../styles/GlobalStyles';
import {MyThemeProvider} from '../styles/ThemeContext'
import Layout from "../components/shared/Layout/Layout";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const {gsap} = require('gsap');
    const { ScrollToPlugin } = require("gsap/ScrollToPlugin");
    const { ScrollTrigger} = require("gsap/ScrollTrigger");

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  })

  return (
    <MyThemeProvider>
      <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </MyThemeProvider>
)}

export default MyApp
