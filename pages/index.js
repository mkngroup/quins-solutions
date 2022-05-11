import Head from "next/head";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quins Solutions</title>
        <meta
          name="description"
          content="DERMOKOZMETIĞIN ÖNCÜ MARKASI QUINS DERM SOLUTIONS® CILDINIZ IÇIN TASARLIYORUZ"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652202397/quinsicon_fuqmoq.png"
        />
        <meta
          name="facebook-domain-verification"
          content="mc81yaudne9rd4akz4qh4cfk6z9tn2"
        />
        <Script strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K9SF4XX');
          `}
        </Script>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K9SF4XX"
          height="0"
          width="0"
          className="hidden invisible"
        ></iframe>
      </noscript>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}
