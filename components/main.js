import React from "react";
import BannerMain from "./bannermain";
import FeedMain from "./feedmain";

function Main() {
  return (
    <div className="">
      <BannerMain />
      <div className="bg-[url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?w=1380&t=st=1650972947~exp=1650973547~hmac=ca8fd9b3ab702daa402015540682b5fed8591991378a0e21a03444c6102c920a')] bg-cover bg-no-repeat pt-2 pb-10 px-1 mt-10 ">
        <FeedMain />
      </div>
    </div>
  );
}

export default Main;
