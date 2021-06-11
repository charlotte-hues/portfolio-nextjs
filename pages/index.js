import Head from 'next/head';

import Homepage from '../components/sections/Home/Home';
import useContactForm from '../components/shared/hooks/useContactForm'

export default function Home() {

  const contactForm = useContactForm();

  return (
    <>
    <Head>
      <meta
        name="description"
        content="Designer and Creative Developer based in the UK"
      />
      <title>Charlotte Hughes - Designer and Creative Developer</title>
    </Head>
    <Homepage contactForm={contactForm} />
    </>
  )
}
