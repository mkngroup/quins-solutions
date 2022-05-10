import Head from 'next/head'


import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Quins Solutions</title>
        <meta name="description" content="DERMOKOZMETIĞIN ÖNCÜ MARKASI QUINS DERM SOLUTIONS® CILDINIZ IÇIN TASARLIYORUZ" />
        <link rel="icon" href="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652202397/quinsicon_fuqmoq.png" />
        <meta name="facebook-domain-verification" content="mc81yaudne9rd4akz4qh4cfk6z9tn2" />
      </Head>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}