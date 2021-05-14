import Head from 'next/head'

import Homepage from '../../components/sections/Home/Home';
import useContactForm from '../../components/shared/ContactFormHook';

export default function Home() {

  const contactForm = useContactForm();

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