import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

function ProductCard(props) {
  return (
    <div className=" max-w-xs min-h-[600px] shadow-md rounded-md m-5 relative bg-slate-100 box-border">
      <span className="absolute top-0 left-0 bg-[#E8630A] text-white rounded-full p-2 uppercase">
        Yeni
      </span>
      <img src={props.img} alt={props.imgalt} className="w-full" />
      <div className="bg-slate-100 relative">
        <div className="p-3 flex flex-col items-center ">
          <h1 className="text-lg font-bold uppercase text-center">
            {props.name}
          </h1>
          <p className="text-sm font-semibold text-center capitalize">
            {props.descrip}
          </p>
          <div className="flex mt-3">
            <span>
              <AiFillStar className="text-[#FEB139]" />
            </span>
            <span>
              <AiFillStar className="text-[#FEB139]" />
            </span>
            <span>
              <AiFillStar className="text-[#FEB139]" />
            </span>
            <span>
              <AiFillStar className="text-[#FEB139]" />
            </span>
            <span>
              <AiFillStar className="text-[#FEB139]" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-center p-1 my-5 absolute bottom-0">
        <Link href={props.link}>
          <button className="bg-black text-white uppercase py-3 px-8 mb-3 rounded-3xl transition-all ease-in-out duration-150 hover:bg-white  hover:text-black  hover:ring-2 hover:ring-black">
            keşfet
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
