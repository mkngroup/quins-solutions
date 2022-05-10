import React from "react";
import KesfetBtn from "./kesfetbtn";

function FeedMain() {
  return (
    <section>
      <div className=" flex justify-center my-10">
        <h1 className="uppercase  text-xl font-normal text-center ">
          dermokozmetiğin öncü markası{" "}
          <strong className="font-bold text-blue-500 italic ">
            quins derm{" "}
            <span className="relative">
              solutions <span className="absolute -top-2">®</span>{" "}
            </span>
          </strong>{" "}
          <br />
          cildiniz için tasarlıyoruz
        </h1>
      </div>
      {/* cards 2 adet */}
      <div className="max-w-7xl mx-auto mt-5 ">
        {/* card 1 */}
        <div className=" lg:grid grid-cols-5 gap-6">
          <div className=" shadow-md mb-10 lg:mb-0 col-span-2 relative group bg-white bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 w-full h-full bg-cover bg-no-repeat">
            <div className="px-5 pb-20 pt-5 sm:p-20">
              <h1 className="uppercase mb-8 text-lg font-bold">
                Quinsin kişisel bakım ürünlerini tanı ve güzellik dünyasını
                keşfet
              </h1>
              <p className=" capitalize text-2xl font-thin break-words">
                10 yılı aşkın süredir dermokozmetik alanında tecrübe sahibiyiz.
                İnsana ve doğaya zarar verebilecek hiçbir kimyasal madde
                içermeme taahhütünde bulunan marka ürünlerimiz ile güçlü adımlar
                atıyor, kozmetik şirketleri içinde kendi yerimizi alarak, bakım
                ürünlerimiz ile fark yaratıyoruz. Siz de bu farkı anlamak için
                Quinsin mucizevi gücünü keşfedin.
              </p>
            </div>
            <KesfetBtn 
            link = "/products"
            />
          </div>

          <div className="group mb-10 lg:mb-0 shadow-md col-span-3 relative bg-white bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-contain md:bg-cover bg-no-repeat">
            <div className="px-5 pb-20 pt-5 sm:p-20">
              <h1 className="uppercase mb-8 text-lg font-bold ">
                CİLDİMİZİ TANIYALIM!
              </h1>
              <p className=" capitalize text-2xl font-thin break-words">
                Cildimiz çok hassas bölge olduğu için, olası sorunlardan hızlı
                şekilde etkilenebilir. Cilt bakım ürünlerimiz ile, cildiniz dış
                etkenler, hava kirliliği, güneşin zararlı etkileri, hava
                değişiklikleri gibi yıkıcı etkilere karşı daha dirençli hale
                gelir. Organik kozmetik markaları içerisinde doğaya ve insana
                zarar verebilecek hiçbir kimyasal madde içermeme taahhütünde
                bulunan markamız ile güçlü adımlar atıyor, ürünlerimizde,
                mineral yağ, paraben, silikon ve renklendiriciler, genel olarak
                kimyasal madde türevli içerikler bulundurmuyoruz. Dermatolojik
                kontrol altında test edilmiş, %94 bitkisel içeriğe malik
                ürünlerimizi, doğada çözünebilen ve insan sağlığına zarar
                vermeyen gıda tipli ambalajlarda saklıyor, hayvanlar üzerinde
                test yapmıyoruz.
              </p>
            </div>
            <KesfetBtn 
            link = "/makale/#cildtipleri"
            />
          </div>
        </div>
        {/* second line grid 5 */}
        <div className="lg:grid grid-cols-5 gap-6 mt-10">
          <div className="group mb-10 lg:mb-0 shadow-md col-span-3 relative bg-white bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-cover bg-no-repeat">
            <div className="px-5 pb-20 pt-5 sm:p-20">
              <h1 className="uppercase mb-8 text-lg font-bold">
                Uzman kişiler tarafından test edildi ve onaylandı!
              </h1>
              <p className=" uppercase  text-2xl font-thin break-words">
                Ürün kalitesi, bir ürünün üretilmesi veya pazarlanması için
                kritik bir husustur. Ürünlerimiz laboratuvar ortamında
                titizlikle yapılan çalışmalardan sonra, insan denekleri üzerinde
                testlere tabi tutulur. Gönüllü insanlarla yaptığımız
                deneyimlerde, hassas noktamız olan hayvan haklarını koruyarak
                hiç bir deneyimimizde kullanmadık. Uzman kişiler, dermatologlar
                tarafından 4 aylık süreç içinde, 400 gönüllü ile yapılan
                deneyimler sonucunda ürünlerimizin güvenlik değerlendirilmesi
                tamamlanmıştır.
              </p>
            </div>
            <KesfetBtn 
            link = "/hakkimizda"
            />
          </div>
          <div className="group mb-10 lg:mb-0 shadow-md col-span-2 relative bg-white bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500">
            <div className="px-5 pb-20 pt-5 sm:p-20">
              <h1 className="uppercase mb-8 text-lg font-bold">
                İşimize saygı duyuyoruz
              </h1>
              <p className=" uppercase  text-2xl font-thin break-words">
                <span className="font-bold text-red-600 mb-3">
                  % 0 gereksiz, % 100 temel{" "}
                </span>{" "}
                Cilde sadece ihtiyaç duyduğu kadarını vermek için tasarlandı
                Quins Derm Solutions, hem cildinize hem de çevreye saygılı
                ürünler geliştirir. Formülasyonlarımızda, deriniz için gereksiz,
                ve en önemlisi derinize veya yaşadığımız çevreye zarar
                verebilecek hiç bir şey içermez. Bu bedenimize, işimize ve
                gezegenimize olan saygımızı gösterir.
              </p>
            </div>
            <KesfetBtn 
            link = "/hakkimizda/#nasilbasladi"
            />
          </div>
        </div>
        <div className=" lg:grid grid-cols-5 gap-6 mt-10">
          <div className="shadow-md mb-10 lg:mb-0 col-span-2 relative group bg-white bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-contain bg-no-repeat">
            <div className="px-5 pb-20 pt-5 sm:p-20">
              <h1 className="uppercase mb-8 text-lg font-bold">
                Hyalüronik asit
              </h1>
              <p className=" uppercase  text-2xl font-thin break-words">
                Hyalüronik asit bir polisakkarittir. Polisakkaritler
                birbirlerine glikozit bağı ile bağlı glikoz molekülleridir.
                Farklı moleküllerin birbirlerine farklı bağlarla bağlanması
                sonucu ortaya yeni polisakkaritler çıkabilir. Bu farklı
                polisakkaritlerden biri olan hyalüronik asit, bir glukuronik
                asit ile bir N-asetilglukozamin molekülünün birbirlerine
                bağlanması ile oluşur ve vücudumuzda hyalüronidaz enzimi ile
                üretilir. Üretilen bu yeni molekülün uzun ve doğrusal zincirler
                boyunca tekrar etmesiyle yüksek molekül ağırlıklı, hyalüronik
                asit ortaya çıkar.
              </p>
            </div>
            <KesfetBtn 
            link = "/makale/#hyaluronikasit"
            />
          </div>

          <div className="group mb-10 lg:mb-0 shadow-md col-span-3 relative bg-white bg-opacity-70 hover:bg-opacity-100 transition-all ease-in-out duration-500 bg-no-repeat bg-cover">
            <div className="px-5 pb-20 pt-5 sm:p-20">
              <h1 className="uppercase mb-8 text-lg font-bold ">
                Güven veriyoruz!
              </h1>
              <p className="capitalize  text-2xl font-thin break-words">
                <span className="font-bold text-xl">
                  Hassas ciltler de dikkate alınarak tasarlandı
                </span>
                <br />
                <br />
                Ürünlerimizin formulasyonunu oluştururken ince ayrıntılarına
                kadar düşündük. Hassas ciltler için özel formüle edilmesinin
                yanı sıra, Quins'in cilt bakım ürünleri hipoalerjeniktir ve
                paraben içermez. Eğer alerjiye yatkın ve hassas bir cilde
                sahipseniz, siz de etkili güneş ışınlarının, soğuk ve kuru
                havanın etkisi altında kaldığınızda hipoalerjenik ürünlere
                yönelmelisiniz.
              </p>
            </div>
            <KesfetBtn 
            link = "/hakkimizda"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedMain;
