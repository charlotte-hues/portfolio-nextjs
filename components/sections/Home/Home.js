import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {useRouter} from 'next/router'
import gsap from 'gsap';

import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";


const SectionContainer = styled.div`
  width: auto;
  height: auto;
`;

const scrollToRef = (ref, offset) => gsap.to(window, {duration: 1, scrollTo: { y: ref, offsetY: offset }});

const Home = props => {
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const location = useRouter();

  useEffect(() => {   
      if (location.asPath === "/contact") {
        scrollToRef("#contact", 110);
      } else if (location.asPath === "/work") {
        scrollToRef("#work", 0);
      } else {
        scrollToRef("#home", 110);
      }
  }, [location]
  );

  return (
    <div>
      <SectionContainer id="home" ref={homeRef}>
        <Hero />
      </SectionContainer>
      <SectionContainer id="work" ref={workRef}>
        <Work />
      </SectionContainer>
      <SectionContainer id="contact" ref={contactRef}>
        <Contact contactForm={props.contactForm} />
      </SectionContainer>
    </div>
  );
};

export default Home;