import styled from "styled-components";

import HeroPattern from './HeroPattern';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  height: auto;
  margin: 80px auto 10px;

`;

const Hero = () => {
  return (
    <Container>   
      <HeroPattern/> 
    </Container>
  );
};

export default Hero;