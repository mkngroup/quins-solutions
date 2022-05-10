import React from "react";
import { FcLike } from "react-icons/fc";

function Comment(props) {
  return (
    <div className="max-w-3xl  mt-10 shadow-md  py-2">
      <div className="flex ">
        <div className="relative">
          <img
            src={props.img}
            alt=""
            className="h-14 w-14 rounded-full mx-5 object-cover"
          />
        </div>
        <div className="flex w-full justify-between ml-3">
          <div>
            <p className="">
              {" "}
              <span className="font-bold">{props.name}</span> {props.data}
            </p>
          </div>
          <div>
            <FcLike className="mt-1 ml-1 mr-2" />
          </div>
        </div>
      </div>
      <div className="ml-[90px] mr-2  mt-3">
        <div className="flex gap-5 items-center">
          <p className="text-sm font-medium text-[#8e8e8e]">{props.time}</p>
          <p className="text-sm font-medium text-[#8e8e8e]">
            {props.like} beğenme
          </p>
          <p className="text-sm font-medium text-[#8e8e8e]">Yanıtla</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
