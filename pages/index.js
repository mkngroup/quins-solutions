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
      </Head>

      

      <Header />
      <Main />
      <Footer />
    </div>
  );
}
