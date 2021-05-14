import React from "react";
import styled from "styled-components";

import ContactLinks from './Links/ContactLinks';
import ContactForm from './Form/ContactForm';

const Container = styled.div`
  margin: 4em 0 0;
  width: 100%;
  height: auto;

  hr {
    border: none;
    height: 0.2rem;
    background: ${({theme}) => theme.colors.primary}99;
    margin: 3rem 0;
  }
`;

const Contact = (props) => {
  console.log("rendered")
  return (
    <Container>
      <hr/>
      <h3>OTHER PLACES YOU CAN FIND ME</h3>
      <ContactLinks/>
      <hr/>
      <h3>GET IN TOUCH</h3>
      <ContactForm onContactSubmit={props.onContactSubmit} formSuccess={props.formSuccess} />
    </Container>
  );
};

export default Contact;