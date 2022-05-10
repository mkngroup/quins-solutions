import React from "react";
import ProductCard from "../../components/productcard";
import { Cards } from "../../datas/allproductscard";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";

function reboosterserumseries() {
  const data = Cards;
  return (
    <div>
      <Head>
        <title>Rebooster™ Serum Series | Quins Solutions</title>
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
      <section>
        <div className="relative block md:max-h-[30rem] bg-[url('https://img.freepik.com/free-photo/simple-white-background-with-smooth-lines-light-colors_476363-5220.jpg?w=1060')] bg-no-repeat bg-cover">
          <div className="p-0 md:p-10">
            <h1 className="text-center px-10 py-5 text-xl font-semibold">
              REBOOSTER™ SERUM SERİES
            </h1>
            <p className="text-center p-10 text-lg font-normal">
              Cilt bakımı güçlü cilt bariyeri oluşturmaktan başlar. Güçlü cilt
              bariyerini sağlamak için gereken ürünlerin başında serumlar
              gelmektedir. Serum, farklı cilt sorunlarına cevap veren
              yoğunlaştırılmış içeriklerden oluşan cilt bakım ürünlerine verilen
              isimdir. Biz de kendi bünyemizde cilt bakımına yeni nefes getirmek
              adına Rebooster Serum Serisini oluşturduk. Geliştirilmiş formül
              özellikleri ile tasarladığımız Rebooster Serum Serisi, her yaş
              kategorisine ve her cilt tipine uygundur. Sizi düşünerek
              ürettiğimiz cilt bakım serumları, cildinize parlak ve pürüzsüz bir
              görünüm sağlayarak daha genç kalmanıza yardımcı olacaktır.
              Rebooster Serum Serisi sizlere farklı cilt problemlerini gidermek
              için aşağıda serum çeşitlerini sunuyor.
            </p>
          </div>
        </div>
      </section>
      <div className="h-full  max-w-7xl mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl my-5">
          QUİNS® CİLT BAKIM ÜRÜNLERİ
        </h1>
        <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((data, key) => {
            return (
              <li key={key}>
                <ProductCard
                  img={data.img}
                  imgalt={data.imgalt}
                  name={data.name}
                  descrip={data.descrip}
                  link={data.link}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default reboosterserumseries;
