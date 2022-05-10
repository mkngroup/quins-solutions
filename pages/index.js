import Head from 'next/head'


import Header from '../../quins-solutions/components/header'
import Main from '../components/main'
import Footer from '../components/footer'


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