import React, { useEffect, useState } from "react";
import styled from "styled-components";

import blankForm from './blankContactForm';
import TextInput from '../../../ui/Inputs/TextInput';
import {updateObject, checkValidity} from '../../../shared/utility/formTool';
import Button from '../../../ui/Inputs/Button';
import {SuccessModal, ErrorModal} from '../feedbackModals/FeedbackModal';
 

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactForm = (props) => {
  const [contactForm, setContactForm] = useState(blankForm);
  const [FormIsValid, setFormIsValid] = useState(false);

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

    props.contactForm.handleSubmit(formData);

  };

  useEffect(() => props.contactForm.formSuccess && clearForm(), [props.contactForm.formSuccess])

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
        <SuccessModal show={props.contactForm.formSuccess} handleSuccessConfirm={props.contactForm.handleSuccess}/>
        <ErrorModal show={props.contactForm.formError} handleErrorConfirm={props.contactForm.handleError}/>
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