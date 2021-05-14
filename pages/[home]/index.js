import {useState} from 'react'
import Head from 'next/head'

import Homepage from '../../components/sections/Home/Home';
import {SuccessModal, ErrorModal} from '../../components/sections/Contact/feedbackModals/FeedbackModal';

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

  return (
    <>
    <Head>
      <meta
        name="description"
        content="Creative Developer | Designer | Liverpool"
      />
      <title>Charlotte Hughes</title>
    </Head>
    <SuccessModal show={formSuccess} handleSuccessConfirm={handleSuccessConfirm}/>
    <ErrorModal show={formError} handleErrorConfirm={handleErrorConfirm}/>
    <Homepage onContactSubmit={handleSubmit} formSuccess={formSuccess}/>
    </>
  )
}