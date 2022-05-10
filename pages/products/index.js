import React from "react";
import AllProductsMain from "../../components/allproductsmain";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>Quins® Tüm Ürünler | Quins Solutions</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="cilt bakımı, c vitamini, vitamin, leke, kırışıklık, yaşlanma karşıtı, antiaging, hyalüronik asit, kolajen, botoks, yüz bakımı, kırışıklık karşıtı, leke giderici"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>
      <Header />
      <AllProductsMain />
      <Footer />
    </div>
  );
}

export default index;
