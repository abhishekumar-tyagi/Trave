import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mienai</title>
        <meta name="description" content="Online Travel Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
    )
}
