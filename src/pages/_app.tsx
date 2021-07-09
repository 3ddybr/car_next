import { AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from '../components/Header'
import { TopBar } from '../components/TopBar'

import '../styles/global.scss'

import '../services/firebase'

function MyApp ({ Component, pageProps }:AppProps) {
  return (
    <>
    <Head>
      <title>AUTO FEST CAR</title>
    </Head>
    <TopBar/>
    <Header/>
    <Component {...pageProps} />

    </>
  )
}

export default MyApp
