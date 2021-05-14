import Head from 'next/head'

import Homepage from '../../components/sections/Home/Home';

export default function Home() {
  return (
    <>
    <Head>
      <meta
        name="description"
        content="Creative Developer | Designer | Liverpool"
      />
      <title>Charlotte Hughes</title>
    </Head>
    <Homepage />
    </>
  )
}