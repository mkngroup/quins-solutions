import React from "react";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

function contact() {
  return (
    <>
      <Head>
        <title>İletişim | Quins Solutions </title>
        <meta
          name="description"
          content="Ürettiğimiz Dermokozmetik Bakım Ürünlerinin Farkını Daha Iyi Anlatmamız Için Aspar İlaç Kozmetik Sanayi A.Ş. Bünyesinde Quins Derm Solutions Markasını Yaratarak Sadece Cildinize Değil, Tüm Vücudunuza Dokunmak Istedik. REBOOSTER Serum Serisi Ve 3DMAX Adı Altında Bakım Ürünlerimizi Sizler Için Tasarladık. İçinde Bulunan C, B1-B5 Vitaminleri, Hyalüronik Asit, Kollajen, Bellatoin Ve S. Ile Zengin Ürünlerimiz Cildinizin Daha Parlak Görünüm Kazanmasına Yardımcı Olacak. Ürünlerimizin Her Biri Farklı Özellikleri Ile Cildinizi Onararak Canlılık Yaratacaktır."
        />
      </Head>
      <Header />
      <div className="lg:h-screen lg:overflow-hidden flex items-center justify-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-vector/gradient-geometric-wallpaper_23-2148818330.jpg?t=st=1652102329~exp=1652102929~hmac=1a39a74db26a7fdbfefb6a054300968f07bedf53d5a9bfbcfda786c17e0a559e&w=996')]">
        <div className=" w-full mx-5 lg:mx-36 h-auto lg:max-h-screen lg:flex justify-between">
          {/* sol */}
          <div className=" w-full relative hidden lg:block">
            <img
              src="https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?t=st=1652103913~exp=1652104513~hmac=9ef3f27cd6da12606e808ed331fc2314209d09ad321a3f991814d1102803a8fe&w=1380"
              alt=""
              className="rounded-l-xl object-cover h-full "
            />
            <div className="absolute top-1/2  text-center  w-full text-white">
              <h1 className="font-semibold text-4xl relative">
                QUİNS DERM SOLUTİONS <span className="absolute -top-3">®</span>
              </h1>
              <p>Cildiniz İçin Tasarlıyoruz</p>
            </div>
          </div>
          {/* sag */}
          <div className="bg-white rounded-xl lg:rounded-r-xl lg:rounded-l-none w-full relative">
            <div className="py-5 my-5">
              <h1 className="font-semibold text-2xl text-center mt-5 ">
                İLETİŞİM
              </h1>
              <div className="mt-10  pl-5">
                <p className="flex items-center my-10">
                  <span className="mr-2  text-xl">
                    <BsTelephone />
                  </span>
                  <a href="tel:+902127118080">+902127118080</a>
                </p>
                <hr />
                <p className="flex items-center my-10">
                  <span className="mr-2 text-xl">
                    <BsWhatsapp />
                  </span>
                  <a href="tel:+905314942594">+905314942594</a>
                </p>
                <hr />
                <p className="flex items-center my-10">
                  <span className="mr-2 text-xl">
                    <FiMail />
                  </span>
                  <a href="mailto:quins.solutions@gmail.com">
                    quins.solutions@gmail.com
                  </a>
                </p>
                <hr />
                <p className="flex items-center my-10">
                  <span className="mr-2 text-xl">
                    <GoLocation />
                  </span>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/GDJc2dgCXf2ySefFA"
                  >
                    Yakuplu Mah. Dereboyu Cad. No:4/1 Beylikdüzü / İstanbul
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default contact;
