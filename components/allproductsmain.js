import React from "react";
import BannerMain from "./bannermain";
import ProductCard from "./productcard";
import { Cards } from "../Datas/allproductscard";

function AllProductsMain() {
  const data = Cards;
  // flex flex-col items-center sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  return (
    <div>
      <BannerMain />
      <div className="h-full  max-w-7xl mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl my-5">
          QUİNS TÜM ÜRÜNLER
        </h1>
        <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((data, key) => {
            return (
              <li key={key}>
                <ProductCard
                  img={data.img}
                  imgalt={data.imgalt}
                  name={data.name}
                  descrip={data.descrip}
                  link={data.link}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AllProductsMain;
