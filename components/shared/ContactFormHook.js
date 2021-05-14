import {useState} from 'react';

function ContactForm() {
    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleSubmit = (data) => { 

    fetch('/api/contact', {
        method: 'POST',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) {
        setFormSuccess(true);
        } else {setFormError(true)}
    })
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