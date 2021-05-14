import Head from 'next/head'
import {useState} from 'react'
import https from "https";

import Homepage from '../../components/sections/Home/Home';

export default function Home() {


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
    })
    .then((res) => {
        console.log(res)
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