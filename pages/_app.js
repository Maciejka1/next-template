import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Next js template</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"/> 
      </Head>
      <Nav/>
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
