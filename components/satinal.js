import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

function satinal(props) {
  return (
    <div className="fixed right-3 bottom-10 ">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-[#0F172A] text-white p-2 rounded-md cursor-default">
          <p>SATIN AL</p>
        </div>
        <div className="group flex items-center gap-2">
          {/* <span className=" absolute -right-[1000px]  transition-all ease-in-out duration-200 group-hover:block group-hover:right-20">Trendyol</span> */}
          <a href={props.selllink} target="_blank">
            <img
              src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1653377596/trendyol_logo_jzzn2m.webp"
              alt=""
              className="w-[42px] h-[42px] rounded-full hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer"
            />
          </a>
        </div>
        <a target="_blank" href="https://wa.me/905314942594">
          <IoLogoWhatsapp className="text-5xl text-green-500 hover:scale-110 transition-all ease-in-out duration-150" />
        </a>
      </div>
    </div>
  );
}

export default satinal;
