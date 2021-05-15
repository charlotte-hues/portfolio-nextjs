import Head from 'next/head'
import {useState} from 'react'

import Homepage from '../../components/sections/Home/Home';

export default function Home() {


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

    const contactForm = {
        handleSubmit: handleSubmit,
        handleSuccess: handleSuccessConfirm,
        handleError: handleErrorConfirm,
        formSuccess: formSuccess,
        formError: formError
    }

  return (
    <>
    <Head>
      <meta
        name="description"
        content="Creative Developer | Designer | Liverpool"
      />
      <title>Charlotte Hughes</title>
    </Head>
    <Homepage contactForm={contactForm} />
    </>
  )
}