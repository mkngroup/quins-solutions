import { GiHamburgerMenu } from "react-icons/gi";
import { RiWhatsappFill } from "react-icons/ri";
import Dropdown from "./Dropdown";
import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";
import { Ciltbakim, Vucutbakim } from "../Datas/Dropdowns";

function Header() {
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);
  return (
    <header className="h-20  shadow-xl  lg:h-24 z-50  sticky top-0 bg-white">
      {/* mobile screen */}
      <div className="h-full items-center flex bg-slate-100 justify-between  lg:hidden">
        <Link href="/">
          <img
            src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650361458/quinslogo_xdsbwo.svg"
            alt=""
            className="h-3/5 md:h-4/5 ml-3 cursor-pointer"
          />
        </Link>
        <GiHamburgerMenu
          onClick={showSidebar}
          className="text-3xl md:text-4xl mr-3 cursor-pointer"
        />
        <div className={Sidebar ? "toggleMenu" : "toggleMenuHide"}>
          <ToggleMenu click={showSidebar} />
        </div>
      </div>
      {/* large screen */}
      <div className="hidden lg:flex flex-col h-full  max-w-7xl mx-auto  ">
        {/* top */}
        <div className=" h-3/5 flex items-center justify-between shadow-sm ">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650361458/quinslogo_xdsbwo.svg"
              alt=""
              className="h-4/5 ml-3 cursor-pointer"
            />
          </Link>
          <div className="flex mr-3 items-center">
            <Link href="/hakkimizda">
              <p className="italicP">Hakkımızda</p>
            </Link>
            <Link href="/contact">
              <p className="italicP">İletişim</p>
            </Link>
            <Link href="/makale">
              <p className="italicP">Makale</p>
            </Link>

            <a target="_blank" href="https://wa.me/905314942594">
              <button className="bg-[#1FAF58] text-white px-1 rounded-md flex items-center ml-1 transition-all duration-150 ease-in-out hover:bg-[#1faf59] hover:scale-105">
                <RiWhatsappFill className="text-lg mr-1" />
                WHATSAPP
              </button>
            </a>
            <a target="_blank" href="https://asparilac.com/">
              <button className="bg-[#3B82F6] text-white px-1 rounded-md flex items-center ml-1 transition-all duration-150 ease-in-out hover:bg-[#1d6ef1] hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650361459/asparlogobeyaz_bss59u.png"
                  alt="quins-solutons instagram adress"
                  className="w-4 mr-1"
                />
                ASPAR
              </button>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className=" h-2/5  flex justify-between items-center relative ">
          <div className="flex items-center ml-1">
            <div className="menuP group hover:border-b-2 border-blue-700 z-50 ">
              <Link href="/products">Quins Tüm Ürünler</Link>
            </div>

            <div className="menuP group hover:border-b-2 border-blue-700 z-50">
              <Link href="/categories/ciltbakim">Cilt Bakım Ürünleri</Link>
              <div className="hidden absolute left-0 group-hover:block ">
                <Dropdown data={Ciltbakim} oneri={Ciltbakim.oneri} />
              </div>
            </div>
            <div className="menuP group hover:border-b-2 border-blue-700 z-50">
              Vücut Bakım
              {/* <div className="hidden absolute left-0 group-hover:block ">
                <Dropdown data={Vucutbakim} oneri={Vucutbakim.oneri} />
              </div> */}
            </div>
            <div className="menuP group hover:border-b-2 border-blue-700 z-50">
              Saç Bakım
              {/* <div className="hidden absolute left-0 group-hover:block ">
                <Dropdown data={Vucutbakim} oneri={Vucutbakim.oneri} />
              </div> */}
            </div>
          </div>
          <div className="flex items-center mr-2">
            <Link href="/categories/rebooster-serumseries">
              <p className="menuP font-normal hover:border-b-2 border-blue-700">
                REBOOSTER <span className="text-red-600 ">™</span>{" "}
              </p>
            </Link>

            <p className="menuP font-normal hover:border-b-2 border-blue-700">
              3D HYDRO MAX PLUS <span className="text-red-600 ">™</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
