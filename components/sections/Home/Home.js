import React, { useRef, useEffect } from "react";
import styled from "styled-components";
// import { useLocation } from "react-router-dom";
import gsap from 'gsap';

import About from "../About/About";
// import Work from "../Work/Work";
// import Contact from "../Contact/Contact";


const SectionContainer = styled.div`
  width: auto;
  height: auto;
`;

const scrollToRef = (ref, offset) => gsap.to(window, {duration: 1, scrollTo: { y: ref, offsetY: offset }});

const Home = props => {
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const workRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/contact") {
  //     scrollToRef("#contact", 110);
  //   } else if (location.pathname === "/work") {
  //     scrollToRef("#work", 0);
  //   } else {
  //     scrollToRef("#home", 110);
  //   }
  // });

  return (
    <div>
      <SectionContainer id="home" ref={homeRef}>
        <About />
      </SectionContainer>
      <SectionContainer id="work" ref={workRef}>
        {/* <Work /> */}
      </SectionContainer>
      <SectionContainer id="contact" ref={contactRef}>
        {/* <Contact /> */}
      </SectionContainer>
    </div>
  );
};

export default Home;