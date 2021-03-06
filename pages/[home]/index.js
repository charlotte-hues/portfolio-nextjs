import Head from 'next/head'

import {useRouter} from 'next/router';

import Homepage from '../../components/sections/Home/Home';
import useContactForm from '../../components/shared/hooks/useContactForm';
import {NavLinks as routes} from '../../components/shared/routes';

export default function Home() {
  
  const contactForm = useContactForm();

  const location = useRouter();

  const metaData = routes.find(r => r.path === location.asPath);

  return (
    <>
    <Head>
      <meta
        name="description"
        content={metaData ? metaData.description : "Designer and Creative Developer based in Chester, UK"}
      />
      <title>{metaData ? metaData.title : "Charlotte Hughes - Home"}</title>
    </Head>
    <Homepage contactForm={contactForm} />
    </>
  )
}