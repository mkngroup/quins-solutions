import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "../components/AboutBanner";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Hakkımızda | Quins Solutions </title>
        <meta
          name="description"
          content="Ürettiğimiz Dermokozmetik Bakım Ürünlerinin Farkını Daha Iyi Anlatmamız Için Aspar İlaç Kozmetik Sanayi A.Ş. Bünyesinde Quins Derm Solutions Markasını Yaratarak Sadece Cildinize Değil, Tüm Vücudunuza Dokunmak Istedik. REBOOSTER Serum Serisi Ve 3DMAX Adı Altında Bakım Ürünlerimizi Sizler Için Tasarladık. İçinde Bulunan C, B1-B5 Vitaminleri, Hyalüronik Asit, Kollajen, Bellatoin Ve S. Ile Zengin Ürünlerimiz Cildinizin Daha Parlak Görünüm Kazanmasına Yardımcı Olacak. Ürünlerimizin Her Biri Farklı Özellikleri Ile Cildinizi Onararak Canlılık Yaratacaktır."
        />
      </Head>
      <Header />
      <AboutBanner />
      <Footer />
    </>
  );
}

export default index;
