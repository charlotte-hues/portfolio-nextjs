import styled from "styled-components";

import device from '../../shared/device/device';
import HeroPattern from '../../ui/Hero/HeroPattern';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 700px;
  height: auto;
  margin: 80px auto 10px;

  @media ${device.laptop} {
      margin-bottom: 100px;
  }
`;

const About = () => {
  return (
    <Container>   
      <HeroPattern/> 
    </Container>
  );
};

export default About;