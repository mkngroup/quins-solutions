import React from "react";
import { AiOutlineClose, AiFillHeart } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

function togglemenuyeni(props) {
  return (
    <div className="w-full h-full relative select-none">
      <p className="text-white absolute top-10 left-3 select-none">
        Quins Derm Solutions ® <br />{" "}
        <span className="italic text-sm tracking-widest">
          Cildiniz İçin Tasarlıyoruz ...
        </span>
      </p>
      <div
        className="absolute right-3 top-7 text-white text-3xl cursor-pointer"
        onClick={props.click}
      >
        <AiOutlineClose />
      </div>
      <div className="flex items-center w-full h-full justify-center">
        <div className="space-y-5 text-white text-xl font-semibold">
          <p className="border py-3 px-10 rounded-md bg-transparent text-center hover:bg-white hover:drop-shadow-2xl hover:text-black hover:border-black transition-all ease-in-out duration-200">
            <Link href="/products">Quins Tüm Ürünler</Link>
          </p>
          <p className="border py-3 px-10 rounded-md bg-transparent text-center hover:bg-white hover:drop-shadow-2xl hover:text-black hover:border-black transition-all ease-in-out duration-200">
            <Link href="/categories/ciltbakim">Cilt Bakım Ürünleri</Link>
          </p>
          <p className="border py-3 px-10 rounded-md bg-transparent text-center hover:bg-white hover:drop-shadow-2xl hover:text-black hover:border-black transition-all ease-in-out duration-200">
            <Link href="/categories/rebooster-serumseries">
              Rebooster Serum Series ™
            </Link>
          </p>
          <p className="border py-3 px-10 rounded-md bg-transparent text-center hover:bg-white hover:drop-shadow-2xl hover:text-black hover:border-black transition-all ease-in-out duration-200">
            <Link href="/hakkimizda">Hakkımızda</Link>
          </p>
          <p className="border py-3 px-10 rounded-md bg-transparent text-center hover:bg-white hover:drop-shadow-2xl hover:text-black hover:border-black transition-all ease-in-out duration-200">
            <Link href="/makale">Makale</Link>
          </p>
          <p className="border py-3 px-10 rounded-md bg-transparent text-center hover:bg-white hover:drop-shadow-2xl hover:text-black hover:border-black transition-all ease-in-out duration-200">
            <Link href="/contact">İletişim</Link>
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-3 flex items-center">
        <p className=" text-white select-none ">Sosyal Medya :</p>
        <div className="flex">
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
      <p className="select-none absolute right-3 bottom-5 text-white flex flex-col items-center text-center font-extrabold">
        Made With <br /> Love{" "}
        <span className="text-2xl text-red-600">
          <AiFillHeart />
        </span>
      </p>
    </div>
  );
}

export default togglemenuyeni;
