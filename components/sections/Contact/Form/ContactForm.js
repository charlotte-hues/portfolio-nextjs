import React, { useState } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';

import blankForm from './blankContactForm';
import TextInput from '../../../ui/Inputs/TextInput';
import {updateObject, checkValidity} from '../../../shared/utility/formTool';
import Button, {Gap} from '../../../ui/Inputs/Button';
import Modal from '../../../ui/Modal/Modal';
import Arrow from '../../../ui/Icons/ArrowIcon';
import mailToFormatter from '../../../shared/utility/mailToFormatter';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Bold = styled.span`
  color: ${({theme}) => theme.colors.highlight};
  font-weight: 900;
  cursor: text;
  user-select: all;
  line-height: 2rem;
`

const ContactForm = () => {
  const [contactForm, setContactForm] = useState(blankForm);
  const [FormIsValid, setFormIsValid] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleErrorConfirm = (e) => {
    e.preventDefault();
    setFormError(false);
  };

  const handleSuccessConfirm = (e) => {
    e.preventDefault();
    setFormSuccess(false);
    clearForm();
  };

  const clearForm = () => {
    setContactForm(blankForm);
    setFormIsValid(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {};
    for (let formEl in contactForm) {
      formData[formEl] = contactForm[formEl].value;
    }

    emailjs.send("default_service", "portfolioSiteTemplate", formData, "user_bveJBfqBpdxSpDQGU6thD")
        .then((result) => {
            setFormSuccess(true);
        }, (error) => {
            setFormError(true);
      });
  };

  const SuccessModal = (
    <Modal 
    show={formSuccess} 
    header="Message Sent"
    onSubmit={handleSuccessConfirm}
    onCancel={handleSuccessConfirm}
    footer={<Button invert submit>OKAY</Button>}
    >
      Thanks for getting in touch, I'll get back to you as soon as possible.
    </Modal> 
  );

  const ErrorModal = (
    <Modal 
    show={formError} 
    header="Problem Sending Message"
    onSubmit={handleErrorConfirm}
    onCancel={handleErrorConfirm}
    footer={<Button submit invert>OKAY</Button>}
    >
      Your message hasn't sent, please try again.
      <br/>
      <br/>
      Alternatively, you can email me directly at: <Bold>{
      String( 'hues.charlotte^gmail.com' ).replace('^', '@') }
      </Bold> 
      <br/>
      <br/>
      <Button secondary submit onClick={() => window.open( String( `mailto:hues.charlotte^gmail.com?subject=Hello%20Charlotte&body=${mailToFormatter(contactForm.message.value)}` ).replace('^', '@'))} >
        Email me
        <Gap/>
        <Arrow size="1.5rem" right/>
      </Button>
    </Modal> 
  );

  const inputChangedHandler = (e, input) => {
    const [valid, errors] = checkValidity(
      e.target.value, 
      contactForm[input].fixed.validation,
      contactForm[input].valid
    );
    const updatedElement = updateObject(contactForm[input], {
      value: e.target.value,
      valid: valid,
      errors: errors,
      changed: true,
    });
    const updatedForm = updateObject(contactForm, {
      [input]: updatedElement
    });

    let isFormValid = true;
    for (let key in updatedForm) {
      isFormValid = updatedForm[key].valid && isFormValid;
    };

    setContactForm(updatedForm);
    setFormIsValid(isFormValid);
  };

  let formElementsArray = [];
  for (let input in contactForm) {
    formElementsArray[contactForm[input].pos] = {
        id: input,
        config: contactForm[input]
      }
  };
  
  return (
      <React.Fragment>
        {SuccessModal}
        {ErrorModal}
        <Form onSubmit={handleSubmit}>
        {formElementsArray.map((input, i) => {
            const isValid = !input.config.changed || input.config.valid ;
            return (
            <TextInput
                key={input.id}
                id={input.id}
                fixed={input.config.fixed}
                errors={input.config.errors}
    
                value={input.config.value}
                changed={e => inputChangedHandler(e, input.id)}
                valid={isValid}
                shouldValidate={input.config.validation}
                touched={input.config.changed}
            />
            );
        })}
        <Button submit={true} disabled={!FormIsValid}>SEND</Button>
        </Form>
    </React.Fragment>
    );
};

export default ContactForm;