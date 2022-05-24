import React from "react";
import KesfetBtn from "./kesfetbtn";
import Link from 'next/link'

function secondfeedmain() {
  return (
    <>
      <div className="px-2 md:px-5">
        <IlkyaziBanner />
      </div>
      <br />
      <br />
      <br />
      <BannerCollagen />
      <br />
      <br />
      <div className="px-2 md:px-5">
        <SecondYaziBanner />
      </div>
      <br />
      <br />
      <br />
      <BannerHyaluronic />
      <br />
      <br />

      <div className="px-2 md:px-5">
        <ThirdYaziBanner />
      </div>
      <br />
      <br />
      <br />
      <BannerC />
      <br />
      <br />
      <AlisverisBanner />
    </>
  );
}

export default secondfeedmain;
export const AlisverisBanner = () => {
  return (
    <>
      <div className="bg-[#A3C1AD] w-full md:max-h-fit relative">
        <p className="pt-2 pl-2 md:absolute md:top-5 md:left-5 text-white">
          Quins Derm Solutions ® | Rebooster Serum Series ™
        </p>
        <div className="p-5 md:p-20">
          <p className="text-center text-xl font-semibold">
            Quins Derm Solutions markası olarak uzmanlık ve kaliteyi bir araya
            getirerek, dermokozmetik şirketleri içinde kendi yerimizi aldık,
            cilt bakım ürünleri, serumları, saç ve vücut bakım ürünleri ile fark
            yaratarak bunu kendimize misyon edindik. Vizyonumuz ise yaptığımız
            işler ile kendimizi ilk sıralara taşımak, tüm Avrupa ülkelerinde
            markamızı temsil etmek ve kaliteli ürünlerimiz ile cilt bakımına
            yeni nefes getirmektir.
          </p>
        </div>
      </div>
    </>
  );
};

export const BannerC = () => {
  return (
    <div className="relative w-full h-full md:grid grid-cols-2 shadow-xl">
      <div className="w-full md:h-[500px]  relative  ">
        <img
          src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1653403519/quins%20posts/site%20banner%20images/Acid_-_Copy_segugi.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative md:flex  md:items-center p-2 md:px-10">
        <div className="relative ">
          <div className="bg-red-700 absolute top-0 left-0 w-full h-full  z-10 rounded-md"></div>
          <div className="max-h-[500px] overflow-auto px-5 py-14 text-white z-20 relative drop-shadow-2xl">
            <p>Rebooster Serum Series ™</p>
            <br />
            <h1 className="text-4xl font-bold w-3/4">
              COLOR PERFECTION C SERUM
            </h1>
            <br />
            <p className="text-xl font-medium w-3/4">
              LEKE KARŞITI ETKİLİ FORMÜL 10 GÜNDE CİLT TONUNU EŞİTLER <br />{" "}
              <br /> Yüz ve boyun C Serumu; cildin daha parlak, pürüzsüz ve
              yumuşak olmasını sağlar. Çeşitli nedenlerden kaynaklanan lekelerin
              görünümünü azaltmak için tasarlanmıştır. Bu serum konsantre %10
              Saf C Vitamini, B3 - B5 - E Vitaminleri ve Allantoin'i bir araya
              getirerek optimum etkinlik sağlar. Hassas ciltler için de
              uygundur.
            </p>
            <div className="mt-10">
              <Bannerbtn 
              link = "/products/colorperfection-cserum"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BannerHyaluronic = () => {
  return (
    <div className="relative w-full h-full md:grid grid-cols-2 shadow-xl">
      <div className="w-full md:h-[500px]  relative  ">
        <img
          src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1653400542/quins%20posts/site%20banner%20images/Post_2_121211_xiqhpq.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative md:flex  md:items-center p-2 md:px-10">
        <div className="relative ">
          <div className="bg-blue-700 absolute top-0 left-0 w-full h-full  z-10 rounded-md"></div>
          <div className="max-h-[500px] overflow-auto px-5 py-14 text-white z-20 relative drop-shadow-2xl">
            <p>Rebooster Serum Series ™</p>
            <br />
            <h1 className="text-4xl font-bold w-3/4">
              HYDRO COMPLEX HYALURONIC ACID SERUM
            </h1>
            <br />
            <p className="text-xl font-medium w-3/4">
              YÜKSEK KONSANTRASYONLU HYALÜRONİK ASİT SERUM BU 48 SAAT BOYUNCA
              DERİNLEMESİNE NEMLENDİRİCİ VE KIRIŞIKLIK GÖRÜNÜMÜNÜ AZALTMAK İÇİN
              TASARLANDI. <br /> <br /> Quins'in ultra nemlendirici serumu;
              cildinize dolgun, parlak bir görünüm kazandırır ve yaşlanma
              görünümünü azaltır. Hydro Complex formülü, cilt tarafından hızla
              emilen 2 tip saf hiyalüronik asit içerir. B5 vitamini ile
              zenginleştirilmiş formül cilt bariyerini korumaya ve onarmaya
              yardımcı olur.
            </p>
            <div className="mt-10">
              <Bannerbtn 
              link = "/products/hydrocomplex-hyaluronikasitserum"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BannerCollagen = () => {
  return (
    <>
      <div className="relative w-full h-full md:grid grid-cols-2 shadow-xl">
        <div className="w-full md:h-[500px]  relative  ">
          <img
            src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1653168724/quins%20posts/Post_1_qiw6hn.jpg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative md:flex  md:items-center p-2 md:px-10">
          <div className="relative ">
            <div className="bg-purple-700 absolute top-0 left-0 w-full h-full  z-10 rounded-md"></div>
            <div className="max-h-[500px] overflow-auto px-5 py-14 text-white z-20 relative drop-shadow-2xl">
              <p>Rebooster Serum Series ™</p>
              <br />
              <h1 className="text-4xl font-bold w-3/4">
                ULTRA LIFT COLLAGEN SERUM
              </h1>
              <br />
              <p className="text-xl font-medium w-3/4">
                SARKMA ÖNLEYİCİ MAKSİMUM GÜÇ FORMÜLÜ ANINDA SIKILAŞMA HİSSİ
                VERİR <br /> <br /> 2 çeşit kolajen ve B3-B5-C ve E vitaminler
                kompleksi cildinizi güçlendirir, sarkmaları toplar ve anında
                sıkılaşma hissi verir. Tüm cilt tiplerine uygun Ultra-Lift
                kolajen serumu, konsantre özel formülü ile cildin en alt
                tabakasına kolajen takviyesi yapar. 4 haftalık kullanımda
                yüzdeki sarkmaları azaltır, cildiniz daha genç ve daha güçlü
                görünüm kazanır. Vitaminler cildinize parlaklık ve dolgunluk
                katar.
              </p>
              <div className="mt-10">
                <Bannerbtn
                link = "/products/ultralift-collagenserum"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Bannerbtn = (props) => {
  return (
    <>
      <p className="px-5 py-3 bg-transparent border max-w-fit rounded-md text-white whitespace-nowrap transition-all ease-in-out duration-150 hover:bg-white hover:drop-shadow-xl hover:text-black">
        <Link href={props.link}>ŞİMDİ KEŞFET</Link>
      </p>
    </>
  );
};

export const IlkyaziBanner = () => {
  return (
    <>
      <div className=" lg:grid grid-cols-5 gap-6">
        <div className=" shadow-md mb-10 lg:mb-0 col-span-2 relative group bg-[#F0F8FF]  hover:bg-opacity-100 transition-all ease-in-out duration-500 w-full h-full bg-cover bg-no-repeat drop-shadow-2xl">
          <div className="px-5 pb-20 pt-5 sm:p-20">
            <p>Rebooster Serum Series ™</p>
            <br />
            <h1 className="uppercase mb-8 text-4xl font-bold w-3/4 text-violet-700">
              Quinsin kişisel bakım ürünlerini tanı ve güzellik dünyasını keşfet
            </h1>
            <p className="  text-xl font-medium w-3/4 break-words">
              10 yılı aşkın süredir dermokozmetik alanında tecrübe sahibiyiz.
              İnsana ve doğaya zarar verebilecek hiçbir kimyasal madde içermeme
              taahhütünde bulunan marka ürünlerimiz ile güçlü adımlar atıyor,
              kozmetik şirketleri içinde kendi yerimizi alarak, bakım
              ürünlerimiz ile fark yaratıyoruz. Siz de bu farkı anlamak için
              Quinsin mucizevi gücünü keşfedin.
            </p>
          </div>
          <KesfetBtn link="/products" />
        </div>

        <div className="group mb-10 lg:mb-0 shadow-md col-span-3 relative bg-[#F0F8FF]  hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-contain md:bg-cover bg-no-repeat  drop-shadow-2xl">
          <div className="px-5 pb-20 pt-5 sm:p-20">
            <p>Makale | Cilt Tipleri</p>
            <br />
            <h1 className="uppercase mb-8 text-4xl font-bold w-3/4 text-violet-700">
              CİLDİMİZİ TANIYALIM!
            </h1>
            <p className="  text-xl font-medium w-3/4 break-words">
              Cildimiz çok hassas bölge olduğu için, olası sorunlardan hızlı
              şekilde etkilenebilir. Cilt bakım ürünlerimiz ile, cildiniz dış
              etkenler, hava kirliliği, güneşin zararlı etkileri, hava
              değişiklikleri gibi yıkıcı etkilere karşı daha dirençli hale
              gelir. Organik kozmetik markaları içerisinde doğaya ve insana
              zarar verebilecek hiçbir kimyasal madde içermeme taahhütünde
              bulunan markamız ile güçlü adımlar atıyor, ürünlerimizde, mineral
              yağ, paraben, silikon ve renklendiriciler, genel olarak kimyasal
              madde türevli içerikler bulundurmuyoruz. Dermatolojik kontrol
              altında test edilmiş, %94 bitkisel içeriğe malik ürünlerimizi,
              doğada çözünebilen ve insan sağlığına zarar vermeyen gıda tipli
              ambalajlarda saklıyor, hayvanlar üzerinde test yapmıyoruz.
            </p>
          </div>
          <KesfetBtn link="/makale/#cildtipleri" />
        </div>
      </div>
    </>
  );
};
export const SecondYaziBanner = () => {
  return (
    <div className="lg:grid grid-cols-5 gap-6 mt-10">
      <div className="group mb-10 lg:mb-0 shadow-md col-span-3 relative bg-[#F0F8FF] bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-cover bg-no-repeat  drop-shadow-2xl">
        <div className="px-5 pb-20 pt-5 sm:p-20">
          <p>Quins Derm Solutions ® | Hakkımızda</p>
          <br />
          <h1 className="uppercase mb-8 text-4xl font-bold w-3/4 text-violet-700">
            Uzman kişiler tarafından test edildi ve onaylandı!
          </h1>
          <p className="text-xl font-medium w-3/4 break-words">
            Ürün kalitesi, bir ürünün üretilmesi veya pazarlanması için kritik
            bir husustur. Ürünlerimiz laboratuvar ortamında titizlikle yapılan
            çalışmalardan sonra, insan denekleri üzerinde testlere tabi tutulur.
            Gönüllü insanlarla yaptığımız deneyimlerde, hassas noktamız olan
            hayvan haklarını koruyarak hiç bir deneyimimizde kullanmadık. Uzman
            kişiler, dermatologlar tarafından 4 aylık süreç içinde, 400 gönüllü
            ile yapılan deneyimler sonucunda ürünlerimizin güvenlik
            değerlendirilmesi tamamlanmıştır.
          </p>
        </div>
        <KesfetBtn link="/hakkimizda" />
      </div>
      <div className="group mb-10 lg:mb-0 shadow-md col-span-2 relative bg-[#F0F8FF] bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500  drop-shadow-2xl">
        <div className="px-5 pb-20 pt-5 sm:p-20">
          <p>Quins Derm Solutions ® | HİKAYEMİZ</p>
          <br />
          <h1 className="uppercase mb-8 text-4xl font-bold w-3/4 text-violet-700">
            İşimize saygı duyuyoruz
          </h1>
          <p className="text-xl font-medium w-3/4 break-words">
            <span className="font-bold text-red-600 mb-3">
              % 0 gereksiz, % 100 temel{" "}
            </span>{" "}
            Cilde sadece ihtiyaç duyduğu kadarını vermek için tasarlandı Quins
            Derm Solutions, hem cildinize hem de çevreye saygılı ürünler
            geliştirir. Formülasyonlarımızda, deriniz için gereksiz, ve en
            önemlisi derinize veya yaşadığımız çevreye zarar verebilecek hiç bir
            şey içermez. Bu bedenimize, işimize ve gezegenimize olan saygımızı
            gösterir.
          </p>
        </div>
        <KesfetBtn link="/hakkimizda/#nasilbasladi" />
      </div>
    </div>
  );
};
export const ThirdYaziBanner = () => {
  return (
    <div className=" lg:grid grid-cols-5 gap-6 mt-10">
      <div className="shadow-md mb-10 lg:mb-0 col-span-2 relative group bg-[#F0F8FF] bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-contain bg-no-repeat drop-shadow-2xl">
        <div className="px-5 pb-20 pt-5 sm:p-20">
          <p>Makale | Hyalüronik Asit Nedir? Cildinize Nasıl Fayda Sağlar</p>
          <br />
          <h1 className="uppercase mb-8 text-4xl font-bold w-3/4 text-violet-700">
            Hyalüronik asit
          </h1>
          <p className="  text-xl font-medium w-3/4 break-words">
            Hyalüronik asit bir polisakkarittir. Polisakkaritler birbirlerine
            glikozit bağı ile bağlı glikoz molekülleridir. Farklı moleküllerin
            birbirlerine farklı bağlarla bağlanması sonucu ortaya yeni
            polisakkaritler çıkabilir. Bu farklı polisakkaritlerden biri olan
            hyalüronik asit, bir glukuronik asit ile bir N-asetilglukozamin
            molekülünün birbirlerine bağlanması ile oluşur ve vücudumuzda
            hyalüronidaz enzimi ile üretilir. Üretilen bu yeni molekülün uzun ve
            doğrusal zincirler boyunca tekrar etmesiyle yüksek molekül
            ağırlıklı, hyalüronik asit ortaya çıkar.
          </p>
        </div>
        <KesfetBtn link="/makale/#hyaluronikasit" />
      </div>

      <div className="group mb-10 lg:mb-0 shadow-md col-span-3 relative bg-[#F0F8FF] bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-no-repeat bg-cover drop-shadow-2xl">
        <div className="px-5 pb-20 pt-5 sm:p-20">
          <p>Rebooster Serum Series ™ | Önceliğimiz</p>
          <br />
          <h1 className="uppercase mb-8 text-4xl font-bold w-3/4 text-violet-700">
            Güven veriyoruz!
          </h1>
          <p className="  text-xl font-medium w-3/4 break-words">
            <span className="font-bold text-xl">
              Hassas ciltler de dikkate alınarak tasarlandı
            </span>
            <br />
            <br />
            Ürünlerimizin formulasyonunu oluştururken ince ayrıntılarına kadar
            düşündük. Hassas ciltler için özel formüle edilmesinin yanı sıra,
            Quins'in cilt bakım ürünleri hipoalerjeniktir ve paraben içermez.
            Eğer alerjiye yatkın ve hassas bir cilde sahipseniz, siz de etkili
            güneş ışınlarının, soğuk ve kuru havanın etkisi altında kaldığınızda
            hipoalerjenik ürünlere yönelmelisiniz.
          </p>
        </div>
        <KesfetBtn link="/hakkimizda" />
      </div>
    </div>
  );
};
