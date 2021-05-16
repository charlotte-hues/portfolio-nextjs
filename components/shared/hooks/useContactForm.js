import {useState} from 'react';

function ContactForm() {
    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState(false);

  const handleServerResponse = (ok, msg) => {
    console.log(msg)
    if (ok) {
      if(msg.status === 200) {
        setFormSuccess(true);
      } else setFormError(true)
    } else {
      setFormError(true)
    }
  }  
  
  const handleSubmit = (data, msg) => {

      fetch('/api/contact', {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
      handleServerResponse(true, res)
    })
    .catch((error) => handleServerResponse(false, error))
    }

    const handleErrorConfirm = (e) => {
    e.preventDefault();
    setFormError(false);
    };

    const handleSuccessConfirm = (e) => {
    e.preventDefault();
    setFormSuccess(false);
    };

    return {
        handleSubmit: handleSubmit,
        handleSuccess: handleSuccessConfirm,
        handleError: handleErrorConfirm,
        formSuccess: formSuccess,
        formError: formError
    }

}

export default ContactForm;