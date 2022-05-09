import Head from 'next/head'


import Header from '../../quins-solutions/components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Quins Solutions</title>
        <meta name="description" content="DERMOKOZMETIĞIN ÖNCÜ MARKASI QUINS DERM SOLUTIONS® CILDINIZ IÇIN TASARLIYORUZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
