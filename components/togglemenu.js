import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
function ToggleMenu(props) {
  return (
    <div className="relative  h-full">
      <div className="flex w-full h-20 items-center justify-end  shadow-lg">
        <AiOutlineClose
          className="text-4xl mr-3 cursor-pointer text-white"
          onClick={props.click}
        />
      </div>
      {/* urunler kismi */}
      <div className="flex flex-col items-center mt-2">
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          <Link href="/products">QUİNS TÜM ÜRÜNLER</Link>
        </p>
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          <Link href="/categories/ciltbakim">CİLT BAKIM ÜRÜNLERİ</Link>
        </p>
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          VÜCUT BAKIM ÜRÜNLERİ
        </p>
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          SAÇ BAKIM ÜRÜNLERİ
        </p>
      </div>
      {/* hakkimizda kismi */}
      <hr className="mt-2" />
      <div className="flex flex-col items-center mt-2">
        <hr />
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          <Link href="/hakkimizda">HAKKIMIZDA</Link>
        </p>
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          <Link href="/contact">İLETİŞİM</Link>
        </p>
        <p className="text-base text-white font-medium   w-11/12 rounded-md text-left pl-2 my-2  leading-8 hover:bg-blue-900">
          <Link href="/makale">MAKALE</Link>
        </p>
      </div>
      {/* sosyal kismi */}
      <div className="absolute bottom-5 px-2 w-full">
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <h1 className="uppercase text-white text-sm font-medium">
            sosyal medya
          </h1>
          <div className="flex ml-4 items-center">
            <a
              target="_blank"
              href="https://www.facebook.com/quins.solutions"
              className="flex items-center"
            >
              <BsFacebook className="text-white mx-1" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/quins.solutions/"
              className="flex items-center"
            >
              <BsInstagram className="text-white mx-1" />
            </a>
            <BsTwitter className="text-white mx-1" />
            <BsLinkedin className="text-white mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleMenu;
