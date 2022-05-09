import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProductsPage from "../../../components/ProductsPage";
import { Vitaminc } from "../../../Datas/ProductsPageData";


function index() {
  const data = Vitaminc;
  return (
    <div>
      <Header />
      <ProductsPage
        metatitle={data.metatitle}
        metadescrip={data.metadescrip}
        yon2link = {data.yon2link}
        yon2={data.yon2}
        yon3link = {data.yon3link}
        yon3={data.yon3}
        yon4={data.yon4}
        mainimg={data.mainimg}
        mainimgalt={data.mainimgalt}
        urunserisi={data.urunserisi}
        urunismi={data.urunismi}
        uruncesidiyazi1={data.uruncesidiyazi1}
        uruncesidiyazi2={data.uruncesidiyazi2}
        ihtiyaclarinizyazi={data.ihtiyaclarinizyazi}
        urundescripbold={data.urundescripbold}
        urundescripbold2={data.urundescripbold2}
        urundescrip={data.urundescrip}
        formula={data.formula}
        formulali={data.formulali}
        etkinligi={data.etkinligi}
        etkinligi2={data.etkinligi2}
        dorthafta={data.dorthafta}
        dorthaftali={data.dorthaftali}
        sekizhafta={data.sekizhafta}
        sekizhaftali={data.sekizhaftali}
        cilttipiyazili={data.cilttipiyazili}
        kullanimzamaniyazi={data.kullanimzamaniyazi}
        kullanimalaniyazi={data.kullanimalaniyazi}
        deneyyorumyazi={data.deneyyorumyazi}
        icindekiler={data.icindekiler}
      />
      <Footer />
    </div>
  );
}

export default index;
