import React from "react";
import { BsCheck } from "react-icons/bs";
import { GrTopCorner, GrBottomCorner } from "react-icons/gr";

function BannerMain() {
  return (
    <>
    {/* gorsel divi mobile/buyukk */}
      <div className="-z-10 shadow-md w-full relative lg:h-[30rem] lg:flex lg:shadow-md">
        <div className="relative lg:w-1/2 lg:h-full">
          <img
            src="banner3.png"
            alt=""
            className=" lg:h-full lg:w-full lg:object-cover lg:bg-white"
          />
        </div>
        {/* mobile yazi divi */}
        <div className="absolute bottom-5 right-7 md:right-11 lg:hidden">
          <h1 className=" flex flex-col text-2xl font-bold font md:text-4xl lg:text-black">
            <span className="relative">REBOOSTER <span className="absolute -top-2">™</span></span> 
            <span className="text-lg font-light md:text-2xl">
              Color Perfection{" "}
              <strong className="text-red-500 font-extrabold">C Serum</strong>
            </span>
          </h1>
        </div>
        {/* buyuk ekran yazi divi */}
        <div className=" hidden absolute top-0  w-full h-full lg:block  lg:w-1/2  lg:relative ">
          <div>
            <br />
            <br />
            <h1 className=" flex flex-col text-6xl font-bold font lg:text-black">
            <span className="relative">REBOOSTER <span className="absolute -top-2">™</span></span> 
              <span className="text-2xl font-light">
                Color Perfection{" "}
                <strong className="text-red-500 font-extrabold">C Serum</strong>
              </span>
            </h1>
            {/* <br /> */}
            {/* <br /> */}
            <br />
            <h2 className="text-2xl font-semibold capitalize">
              10 GÜNDE IŞILTILI VE DAHA SIKI BİR CİLT **
            </h2>
            <br />
            <li className="list-none flex items-center text-base leading-3  d font-bold">
              {" "}
              <BsCheck className="mr-2  text-3xl text-red-600" />
              %10 SAF C VİTAMİNİ
            </li>
            <li className="list-none flex items-center text-base leading-3 font-bold">
              {" "}
              <BsCheck className="mr-2 text-3xl text-red-600" />
              VİTAMİN B3 - B5
            </li>
            <li className="list-none flex items-center text-base leading-3 font-bold">
              {" "}
              <BsCheck className="mr-2 text-3xl text-red-600" />
              DOĞAL KAYNAKLI HYALÜRONİK ASİT
            </li>
            <div className="relative">
              <br />
              <div className="px-20 relative  w-max">
                <GrTopCorner className="absolute text-[4rem] text-red-600 -top-5 left-0" />
                <h2 className="font-medium">
                  28 GÜN KULLANIM SONRASI <span className="">***</span>
                </h2>
                <h3 className="capitalize">
                  <span className="text-red-600 font-bold ">%79</span> güneş ve
                  yaşlılık lekerinde azalma
                </h3>
                <h3 className="capitalize">
                  <span className="text-red-600 font-bold ">%82</span> Kaz
                  Ayaklarının görünümünde azalma
                </h3>
                <GrBottomCorner className="absolute text-[4rem] top-7 -right-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerMain;
