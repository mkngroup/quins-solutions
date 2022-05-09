import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

function KesfetBtn(props) {
  return (
    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-20 ">
      <Link href={props.link}>
        <button className="hoverButton flex items-center">
          <RiArrowRightSLine />
          KEŞFET
        </button>
      </Link>
    </div>
  );
}

export default KesfetBtn;
