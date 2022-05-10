import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

function Urunihtiyac(props) {
  return (
    <div>
      <Header />
      <div className="relative block md:max-h-[30rem] bg-[url('https://img.freepik.com/free-photo/simple-white-background-with-smooth-lines-light-colors_476363-5220.jpg?w=1060')] bg-no-repeat bg-cover">
        <div className="p-0 md:p-10">
          <h1 className="text-center px-10 py-5 text-xl font-semibold">
            {props.header}
          </h1>
          <p className="text-center p-10 text-lg font-normal">
            {props.descrip}
          </p>
        </div>
      </div>
      <div className="h-full  max-w-7xl mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl my-5">
          TAVSİYE OLUNAN ÜRÜNLER
        </h1>
        <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {props.data.map((data, key) => {
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
      <Footer />
    </div>
  );
}

export default Urunihtiyac;
