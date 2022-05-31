import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsCheck, BsPeople } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import Satinal from "./satinal";

function ProductsPage(props) {
  return (
    <div className="bg-[#F0F0F0] mt-4">
      <Satinal selllink={props.selllink} />
      <Head>
        <title>{props.metatitle}</title>
        <meta name="description" content={props.metadescrip} />
        <meta
          name="keywords"
          content="cilt bakımı, c vitamini, vitamin, leke, kırışıklık, yaşlanma karşıtı, antiaging, hyalüronik asit, kolajen, botoks, yüz bakımı, kırışıklık"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>
      {/* yonlendirme */}
      <div className="ml-2 max-w-6xl lg:mx-auto  h-full sm:h-9">
        <ul className="flex">
          <Link href="/">
            <li className="text-xs font-bold md:mr-1 flex items-center uppercase cursor-pointer">
              Ana Sayfa <RiArrowRightSLine className="md:ml-2" />
            </li>
          </Link>
          <Link href={props.yon2link}>
            <li className="text-xs font-bold md:mx-1 flex items-center uppercase  cursor-pointer">
              {props.yon2} <RiArrowRightSLine className="md:ml-2" />
            </li>
          </Link>
          <Link href={props.yon3link}>
            <li className="text-xs font-bold md:mx-1 flex items-center uppercase  cursor-pointer">
              {props.yon3} <RiArrowRightSLine className="md:ml-2" />
            </li>
          </Link>

          <li className="text-xs font-bold md:mx-1 flex items-center uppercase  cursor-pointer">
            {props.yon4}{" "}
          </li>
        </ul>
      </div>
      {/* beyaz yazi alani */}
      <div className="h-full  max-w-6xl mx-auto bg-white rounded-sm p-2 shadow">
        <div className="lg:grid grid-cols-2 lg:divide-x">
          {/* grid sol  */}
          <div className=" h-full w-full block">
            <img src={props.mainimg} alt={props.mainimgalt} />
          </div>
          {/* grid sag taraf */}
          <div className="p-2 md:p-5 mt-3 h-full w-full ">
            <h1 className="font-semibold text-md  ">{props.urunserisi}</h1>
            <h1 className="font-thın text-2xl text-red-600 capitalize">
              {props.urunismi}
            </h1>

            <div className="my-10">
              <h3 className="uppercase text-sm text-red-600 font-bold tracking-wide">
                ürün çeşidi:{" "}
                <span className="capitalize text-gray-600 underline underline-offset-1 font-semibold">
                  {props.uruncesidiyazi1}
                </span>{" "}
                |{" "}
                <span className="capitalize text-gray-600 underline underline-offset-1 font-semibold">
                  {props.uruncesidiyazi2}
                </span>
              </h3>
              <h3 className="uppercase text-sm text-red-600 font-bold tracking-wide">
                İHTİYAÇLARINIZ:{" "}
                <span className="capitalize text-gray-600 underline underline-offset-1 font-semibold">
                  {props.ihtiyaclarinizyazi}
                </span>
              </h3>
            </div>
            <div className="mb-10">
              <h1 className="uppercase text-lg font-medium tracking-wide leading-5">
                {props.urundescripbold}
              </h1>
              <h1 className="uppercase text-lg font-medium tracking-wide leading-5">
                {props.urundescripbold2}
              </h1>

              <p className="text-base mt-1">{props.urundescrip}</p>
            </div>
            <div className="mb-10">
              <h1 className="text-sm font-bold uppercase">{props.formula}</h1>
              <ul className="mt-1">
                {props.formulali.map((data, key) => {
                  return (
                    <li
                      key={key}
                      className="flex items-center text-sm capitalize "
                    >
                      <BsCheck className="mr-1 text-2xl text-red-600" />
                      {data.li}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mb-10">
              <ul className="flex space-x-5 items-center justify-evenly">
                <li className="">
                  <div className="flex flex-col space-y-2 items-center max-w-min">
                    <p className="text-center text-xs font-bold uppercase">
                      paraben içermez
                    </p>
                    <img
                      src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650374489/eco_dp2txw.png"
                      alt=""
                      className=""
                    />
                  </div>
                </li>
                <li className="">
                  <div className="flex flex-col space-y-2 items-center max-w-min">
                    <p className="text-center text-xs font-bold uppercase">
                      silikon içermez
                    </p>
                    <img
                      src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650374490/silicone-free_xyyfei.png"
                      alt=""
                      className=""
                    />
                  </div>
                </li>
                <li className=" ">
                  <div className="flex flex-col space-y-2 items-center max-w-min">
                    <p className="text-center text-xs font-bold uppercase">
                      hayvanlara zarar verilmemiştir
                    </p>
                    <img
                      src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650374489/cruelty-free_ke8rof.png"
                      alt=""
                      className="w-3/5"
                    />
                  </div>
                </li>
              </ul>
              <hr className="mt-5 border-2" />
            </div>
            <div className="mb-16">
              <h1 className="uppercase text-lg font-medium tracking-wide leading-5">
                {props.etkinligi}
              </h1>
              <h1 className="uppercase text-lg font-medium tracking-wide leading-5">
                {props.etkinligi2}
              </h1>
              <h3 className="capitalize text-lg font-semibold text-red-600 mt-5">
                4 haftalık kullanım:
              </h3>
              <ul className="space-y-2 mt-2">
                {props.dorthaftali.map((data, key) => {
                  return (
                    <li key={key} className="capitalize text-sm font-medium">
                      {data.li}
                    </li>
                  );
                })}
              </ul>
              <h3 className="capitalize text-lg font-semibold text-red-600 mt-5">
                8 haftalık kullanım:
              </h3>
              <ul className="space-y-2 mt-2">
                {props.sekizhaftali.map((data, key) => {
                  return (
                    <li key={key} className="capitalize text-sm font-medium">
                      {data.li}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 underline underline-offset-2 text-center">
                *8 haftalık tüketici teste dayalı sonuçlar
              </p>
            </div>

            <div className="grid grid-cols-6">
              <div className="col-span-2">
                <h3 className="uppercase  text-sm text-red-600 font-bold tracking-wide">
                  cilt tipi:
                </h3>
              </div>
              <div className="col-span-4">
                <ul>
                  {props.cilttipiyazili.map((data, key) => {
                    return (
                      <li key={key} className="text-gray-700 capitalize">
                        {data.li}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-span-2 mt-3">
                <h3 className="uppercase  text-sm  text-red-600 font-bold tracking-wide">
                  kullanım <br /> zamanı:
                </h3>
              </div>
              <div className="col-span-4 mt-3">
                <p className="text-gray-700 capitalize">
                  {props.kullanimzamaniyazi}
                </p>
              </div>
              <div className="col-span-2 mt-3">
                <h3 className="uppercase  text-sm  text-red-600 font-bold tracking-wide">
                  kullanım <br /> alanı:
                </h3>
              </div>
              <div className="col-span-4 mt-3">
                <p className="text-gray-700 capitalize">
                  {props.kullanimalaniyazi}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="h-full  max-w-6xl mx-auto bg-white rounded-sm p-2 mt-20 shadow">
          <h1 className="text-2xl font-bold uppercase text-center text-red-600 m-5">
            DENEYENLERİN YORUMLARI
          </h1>

          <ul className="flex justify-around my-10">
            {props.deneyyorumyazi.map((data, key) => {
              return (
                <li
                  key={key}
                  className="flex flex-col items-center text-2xl md:text-5xl font-bold text-red-600 "
                >
                  {data.liyuzde}{" "}
                  <span className="text-sm md:text-base font-semibold capitalize text-black mt-3 text-center">
                    {data.liyazi}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="text-center uppercase font-light text-sm text-black mt-10">
            ***210 KİŞİ ÜZERİNDE TÜKETİCİ TESTİ
          </p>
        </div>
      </section>

      <section>
        <div className="h-full  max-w-6xl mx-auto bg-white rounded-sm py-2 mt-20 shadow">
          <h1 className="text-2xl font-bold uppercase text-center text-red-600 m-5">
            ÜRÜN DETAYI
          </h1>
          <h3 className="text-center text-sm font-bold mb-2">KULLANIM ŞEKLİ</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className=" flex flex-col p-20 md:p-20 lg:p-10">
              <img
                src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650443455/1-01_eceosc.jpg"
                alt=""
              />
              <p className="text-center mt-3 font-medium capitalize">
                Cildinizi temizleyin ve kurutun
              </p>
            </div>
            <div className=" flex flex-col p-20 md:p-20 lg:p-10 ">
              <img
                src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650443456/2-01_swwxf0.jpg"
                alt=""
              />
              <p className="text-center mt-3 font-medium capitalize">
                Pipetle şişeden yeterince serum alın
              </p>
            </div>
            <div className=" flex flex-col p-20 md:p-20 lg:p-10 ">
              <img
                src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650443456/3-01_gixsij.jpg"
                alt=""
              />
              <p className="text-center mt-3 font-medium capitalize">
                Yüzünüze 4 damla uygulayın
              </p>
            </div>
            <div className=" flex flex-col p-20 md:p-20 lg:p-10 ">
              <img
                src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650443456/4_qzsqjq.jpg"
                alt=""
              />
              <p className="text-center mt-3 font-medium capitalize">
                Parmak uçlarınızla dairesel masajla yüzünüze dağıtın
              </p>
            </div>
          </div>
          <div className="my-10 bg-slate-200 py-10 px-5 shadow">
            <h3 className="text-xl font-bold">UYARILAR</h3>
            <p className="text-lg font-medium mt-2">
              Yalnızca haricen kullanım için uygundur. Göz temasından kaçının,
              gözlerinizle temas halinde doktorunuza danışın. Çocuklarınızın
              ulaşamayacağı bir yerde saklayın.{" "}
            </p>
          </div>
          <div className="bg-red-600 mb-10 py-10 px-5 shadow">
            <h3 className="text-xl font-bold text-white">İÇİNDEKİLER</h3>
            <p className="text-lg font-medium text-white mt-2">
              {props.icindekiler}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
