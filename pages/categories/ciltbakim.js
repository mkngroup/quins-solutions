import React from "react";
import ProductCard from "../../components/productcard";
import { Cards } from "../../datas/allproductscard";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";

const ciltbakim = () => {
  const data = Cards;

  return (
    <div>
      <Head>
        <title>Cilt Bakım Ürünleri | Quins Solutions</title>
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
              CİLT BAKIM ÜRÜNLERİ
            </h1>
            <p className="text-center p-10 text-lg font-normal">
              Cildimizin rengi, dokusu hatta kokusu bile mutlu olmamız için
              sebep olabilir. Eğer biz mutluysak, bu cildimize de yansır.
              Günboyu etrafa gülücükler saçarak, özgüvenli halimizle dikkat
              çekeriz. Özgüven sahibi olmanın en büyük nedeni pürüzsüz bir
              cilttir. Cildimize ne kadar iyi bakarsak, o da bize görmek
              istediğimiz etkiyi sağlar. Cilt bakım ürünlerinin önemini bir kez
              daha anlayarak, mutlu bir sabaha her gün merhaba de
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
};

export default ciltbakim;
