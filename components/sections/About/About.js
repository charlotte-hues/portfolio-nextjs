import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  height: auto;
  margin: 80px auto 80px;

`;

const About = () => {
  return (
    <Container> 
    <h1>Hello</h1> 
    <p>I'm Charlotte, a Graphic Designer and Creative Developer from Chester (UK). 
    I currently work as a User Interface Designer and Frontend Developer. 
    Below is a mixture of recent projects that I've produced that include branding, animation and web design.</p>
    </Container>
  );
};

export default About;