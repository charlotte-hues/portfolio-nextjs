import Head from 'next/head'
import {useState} from 'react'
import https from "https";

import Homepage from '../../components/sections/Home/Home';

export default function Home() {


  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

    const handleSubmit = async (data) => {
    
      // const options = {
      //   path: "/api/sendMail",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Content-Length": data.length,
      //   },
      // };

      // const req = https.request(options, (res) => {
      //   // console.log(`statusCode: ${res.statusCode}`);
  
      //   res.on("data", (d) => {
      //     // process.stdout.write(d);
      //     // console.log("data  from API >> ", JSON.parse(d));
      //   });
      // });

      // req.on("error", (error) => {
      //   setFormError(true);
      // }) 

      // req.write(data);
      // req.end();

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