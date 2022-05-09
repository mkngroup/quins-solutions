import React from "react";
import ProductCard from "./ProductCard";
import Head from "next/head";

function MakaleBanner() {
  return (
    <div className="bg-[#F3F3F3]">
      <Head>
        <title>Makale | Quins Solutions</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="cilt bakımı, c vitamini, vitamin, leke, kırışıklık, yaşlanma karşıtı, antiaging, hyalüronik asit, kolajen, botoks, yüz bakımı, kırışıklık karşıtı, leke giderici"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </Head>
      <section>
        <div className="relative block md:max-h-[30rem] bg-[url('https://img.freepik.com/free-photo/simple-white-background-with-smooth-lines-light-colors_476363-5220.jpg?w=1060')] bg-no-repeat bg-cover">
          <div className="p-0 md:p-10">
            <h1 className="text-center px-10 py-5 text-xl font-semibold">
              MAKALE
            </h1>
            <p className="text-center p-10 text-lg font-normal">
              Dilediğiniz ihtiyaçları bir araya toplamak biraz zaman aldı, fakat
              en iyisini yaptığımızdan emin olabilir siniz. Günlük bakım
              rutinleri, güzellik sırları, hayatınızı olumlu yönde etkileyecek
              değişiklikler yapmaya hazırmısınız? Kendinizi değerli
              hissettirecek alışkanlıklar edinin.. Bakımınızı ihmal etmeyin,
              çünki vücudunuzun buna ihtiyacı var.
            </p>
          </div>
        </div>
      </section>
      <section id="cildtipleri" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <h1 className="text-center text-xl font-semibold py-5">
            CİLT TİPLERİ
          </h1>
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/multiracial-group-cheerful-young-women-lying-back_23-2148206851.jpg?t=st=1651775124~exp=1651775724~hmac=537d4ea669a2be9a57737ad4fe4d541aad2894896ea852e63ae4e7d7ce25464b&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                CİLDİNİ TANI!
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Cilt tipleri, genellikle cildinizin neye ihtiyacı olduğunu
                belirlemek için bilmeniz gereken önemli detaylardandır. Cilt
                tipleri kişiden kişiye farklılık gösterebilir. Hatta, cinsiyet
                ve yaş gibi faktörler, havanın nemi, sıcaklığı gibi etkenlerde
                cilt tipinizi belirlemekte yardımcı olan faktörlerdendir.
                Herkesin bildiği, genel olarak tanımlanan 5 cilt tipi mevcuttur.
                Bunlar, kuru, yağlı, karma, normal ve hassas ciltler olarak
                bilinmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="kuruciltler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/face-young-woman-with-dark-spots-acne-wrinkles_49758-486.jpg?w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full  "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                KURU CİLTLER
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Kuru ciltler, nemsiz cilt problemlerinin oluşmasına yol açar.
                Yeteri kadar su tüketmemek, sağlıklı ve dengeli beslenmemek,
                kuru ciltlerin daha da pürüzlü görünümüne yol açar. Eğer kuru
                bir cilde sahipseniz, devamlı nemlendirmek durumundasınız. Aksi
                takdirde, yüzünüzde pullanma, gerginlik, soyulma, kaşıntı ve
                ince çizgiler gibi hoş olmayan görüntüler ortaya çıkar. Hem
                sağlık açısından zararlı olduğu gibi, kişilerin özgüven
                eksikliğine de yol açabilir. Bu gibi etkenlerle karşılaşmamak
                için, cildinizi daima korumalı, kuruluk giderici kremler,
                serumlar kullanmalı ve doğru cilt bakımı yapmalısınız.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="yagliciltler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/beautiful-woman-showing-her-acne-with-confidence_23-2148982561.jpg?t=st=1651775297~exp=1651775897~hmac=fc9c5dc33c974f936ebef255b3e0ae4026e9635d441880c7b86dcfebace64b3e&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full  "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                YAĞLI CİLTLER
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Yağlı ciltler ise kuru ciltlerin tam tersi, cilinizde fazla yağ
                ve sebum üretimi sonucu oluşmaktadır. Sebum üretimi cildinizin
                nemliyini korur, ama fazla üretildiği zaman anormal yağlanmaya
                yol açar. Sebumun aşırı üretiminin sebebi, aslında cildinizde
                doğru oranda nem dengesinin olmamasından kaynaklanmaktadır. Bu
                yüzden, cildinizi ne eksik ne fazla, sadece yeteri kadar
                nemlendirmeniz, günboyu canlı ve dolgun görünüm kazanmanıza
                sebep olacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="karmaciltler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/young-woman-with-acne-dry-skin-black-dots-skin-zoom-circle-young-girl-beauty-portrait-close-up_99433-684.jpg?w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full  "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                KARMA CİLTLER
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Karma ciltler, en yaygın ve bakımı en zor olan cilt
                tiplerindendir. Yüzünüzde T bölgesi adlandırılan alın, burun ve
                çene kısımları yağlı cilt tipine, yanaklar ise kuru veya normal
                cilt tipine ayrılır. Bu yüzden bakımı zordur. Çünkü iki farklı
                bakım ürünü kullanmanız gerekmektedir. Kuru bölge için
                nemlendirici özelliğe sahip serumlar veya kremler, yağlı bölge
                için ise yağemici bakım ürünleri kullanmalısınız.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="normalciltler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-model-posing_155003-29554.jpg?t=st=1651775440~exp=1651776040~hmac=590f284351de03ab5e4b4c71c53a183745524e87d63ba191068eafa28baa28eb&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full  "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                NORMAL CİLTLER
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Normal ciltler, herkesin arzu etdiği cilt tipidir desek
                yanılmayız herhalde. Çünkü hem yağ oranı, hem nem dengesi hem de
                kuruluk doğru oranda yüzünüzde dağılım göstermektedir. Sağlıklı
                bir cilt tipi olarak bilinmektedir, gerektiği kadar esnek ve
                dolgun bir yapıya sahiptir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="hassasciltler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/elegant-pale-girl-with-golden-earrings-expressing-amazement-close-up-shot-sensual-brunette-lady-with-plant_197531-14068.jpg?t=st=1651775488~exp=1651776088~hmac=72f6b8101e38e3cd6c9198bc3785a66aa906466ee4e69ab81820329ad41c716b&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full  "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                HASSAS CİLTLER
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Hassas ciltler, dış ve iç etkenlere çok hızlı tepki verir.
                Gösterdiği tepkiler, hafif bir kızarıklıktan ciddi kaşıntılara
                ve döküntülere kadar değişiklik gösterebilir. Normal bir cilt
                tipini etkilemeyen faktörler, hassas ciltlerde dikkat çeken
                sorunlara yol açabilir. Sıcaklık değerlerindeki ani değişimler,
                hassas ciltlerde sorun yaratan faktörlerden birisidir. Bundan
                dolayı hassas ciltlerin kızarmasına ve benzeri tepkiler
                göstermesine yol açabilir. Direkt güneş ışığı altında kalmak da
                benzer sonuçlar yaratır. Cildin koruyucu bariyerinin
                zayıflaması, aşırı hassasiyete yol açan etkenlerden birisidir.
                Sağlıklı bir ciltte, dış ve iç etkenlere karşı engel oluşturan
                tabakalar vardır. Bu tabakaların zarar görmesi, en ufak bir
                etkenin bile cilt üzerinde tepkimelere yol açmasını sağlar.
                Zararlı alışkanlıklar da cildi hassaslaştırır. Alkol, sigara,
                beslenme bozuklukları bunlardan yalnızca birkaçıdır.
              </p>
            </div>
          </div>
          <div>
            <p className="text-center p-5 mt-5 md:my-10 md:mx-32 text-lg font-normal text-[#8e8e8e] shadow-md bg-slate-50">
              <span className="font-semibold text-black">Not: </span>
              Yazımızın başında belirttiğimiz gibi, cilt tipinizi belirlemeniz,
              cildinizin neye ihtiyacı olduğunu anlamanız için önemli bir
              husustur. Eğer yüzünüzün hangi cilt tipine ait olduğunu
              belirlediğseniz, bir sonrakı adımınız cildinize uygun bakım
              ürünleri ile doğru bakım yapmanız olacaktır.{" "}
            </p>
          </div>
        </div>
      </section>
      <section id="yaslanmamaninsirlari" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <h1 className="text-center text-xl font-semibold py-5">
            YAŞ ALARAK YAŞLANMAMANIN SIRLARI
          </h1>
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/middle-aged-beautiful-woman-applies-anti-aging-cream-face-undergoes-beauty-treatments-cares-about-skin_273609-45486.jpg?t=st=1651775525~exp=1651776125~hmac=27046978e99b6819fde729de77fab26aa3590cf287fa04712be987ba98e9638b&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                YAŞLANMAYI GECİKTİRMEK VE GENÇ GÖRÜNMEK KENDİ ELİNİZDE!
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Kadınların korkulu rüyasının yaşlanma belirtilerini hissetmektir
                desek yanılmayız herhalde. Özellikle 35 yaşını aşan kadınlar,
                vücudunda bulunan sarkmalardan, cildindeki kırışıklıklardan
                şikayetçidir. Bunu tabii ki, tüm kadınlar için söylememiz doğru
                olmaz, çünkü yaşlanma belirtileri kendini sadece bakımsız bir
                vücutda gösterir. Yaşlanmayı geciktirmek ve sürekli genç
                görünmek sizin elinizdedir. Nu makaleyi okuduğunuz andan
                itibaren, önereceğimiz yaşam rutinine uyarak yaşlanmanın ve
                yaşlı görünmenin önüne geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="temizciltleuyu" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/cropped-image-lovely-young-woman-washes-face-with-foaming-soap-has-pleased-facial-expression-keeps-hands-together-chin-has-morning-routine_273609-30740.jpg?t=st=1651842059~exp=1651842659~hmac=8bc8b1d1b9486284d82f78015328a0214f02258077eacb380c0fdcf65b8487db&w=1060"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                TEMİZ CİLT İLE UYUYUN
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Uyumadan önce yüzünüzde makyaj olmasa bile mutlaka yüzünüzü
                sabun veya yüz temizleme jeli ile temizleyin ve su ile
                durulayın. Bu cildinizi daima tok tutacak ve canlı görünüm
                kazanmasına yardımcı olacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="tatlidanuzakdur" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/eastern-sweets_2829-13987.jpg?t=st=1651840463~exp=1651841063~hmac=b0d651dc466eda8c8614e411e4bec9853df0fc224823031054434267c30bed72&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                TATLIDAN UZAK DURUN!
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Şeker sağlığınıza zarar verir, elastin ve kollajendeki
                proteinlere saldırarak glikasyon denilen bir sürece ve cildin
                daha yaşlı görünmesine sebep olur. 35 yaş ve sonrasında aşırı
                şeker tüketimi kaynaklı yaşlanma etkileri hızla gözlemlenir. Bu
                yüzden günde en fazla 25gram şeker tüketerek, tatlı ihtiyacınızı
                karşılamanız tavsiye edilir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sevmediginizistecalismayin" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/tired-businesswoman-covering-her-eyes-with-drawn-eyes-paper_23-2148813192.jpg?t=st=1651842178~exp=1651842778~hmac=975fb840ab903ee3e70bafdbae25524df26af5301e7e4d319971538535da7609&w=1060"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                SEVMEDİĞİNİZ İŞTE ÇALIŞMAYIN
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Aşırı stres ve sinir erken yaşlanmanın sebeplerinden biridir.
                Stres hayatın her anında var ama bunu minimize edebilmek
                gerekir. Sevmediğiniz bir işe gitmek, mutsuz ortamda zorunlu
                olarak kalmak gibi etkenler sizi olumsuz etkileyecek, kalp
                hastalıkları, erken yaşlanmanı belirtilerini arttıracaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sagliklibesinlerkullanin" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?t=st=1651840415~exp=1651841015~hmac=9b50deaa5a80d7fe982158900b4766902fb2496d41924d6252f7853c0b3e09c6&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                SAĞLIKLI BESİNLER KULLANIN
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Sağlıklı besinlerden kastımız, sebze ağırlıklı ve az yağ içeren
                yiyeceklere üstünlük verilmesidir. Kızartma, ızgara, kavurma,
                işlenmiş ve konserve işlemi sırasında ısıtılan gıdalar AGE
                oluşturur. AGE inflamasyon ve oksidasyonu artırabilir yaşlanma,
                kalp, beyin, kemik ve eklem, böbrek, insülin direnci, anemi ve
                cildi etkileyen yaşa bağlı hastalıkların temel nedenidir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="bolsuicin" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/drinking-water-healthy-lifestyle-diet-concept-healthy-eating_141858-142.jpg?w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                BOL SU İÇİN!
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Güne 2 bardak su içerek başlamak sizi her zaman 1-0 önde yapar
                :) günlük su tüketimi kişinin kilosuna göre değişkenlik
                gösterebilir ama minimum 2 litre su içilmesi tavsiye edilir. Su
                tüketimi cildinizi nemli tutar ve kırışıklıkların yaranmasını
                geciktirir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="zararlialiskanliklardankacinin" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/woman-s-hand-holding-packet-cigarettes_23-2148185336.jpg?w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                ZARARLI ALIŞKANLIKLARDAN KAÇININ
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Sigara, alkol, tütün gibi zararlı alışkanlıklar vücudunuzun
                direnç gücünü azaltır, solunan duman içinde bulunan zararlı
                kimyasallardan biri olan katran, akciğer dokusunda birikir ve
                zamanla bu dokularda harabiyete yol açar. Bunun sonucunda
                solunum kapasitesi azalır ve astım, kronik obstrüktif akciğer
                hastalığı gibi solunum sistemi ile ilişkili ciddi hastalıkların
                görülme riski artar. Ayrıca alkol ise, vücutta susuzluğa sebep
                olduğu için cildinize zarar verir. Bu yüzden, yaşınız
                ilerlemeden bu gibi zararlı alışkanlıkları hayatınızdan
                çıkarmanız gerekmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="uykuduzeninedikkatedin" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/sleeping-young-woman-lies-bed-with-eyes-closed_171337-13215.jpg?t=st=1651842069~exp=1651842669~hmac=da8e7b049afbccc0c199656bd51fde02d2ff11f8263e345f9a8e86f6363122b7&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                UYKU DÜZENİNİZE DİKKAT EDİN
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal">
                Araştırmalar, sağlıklı uykunun ortalama 7 saat olduğunu
                söylüyor. İş adamları, girişimciler ne kadar az uyku çok iş
                deselerde , bunun ileriki zamanlarda sağlığa ciddi zarar
                verdiğini es geçmemek lazımdır. Uyku bozukluğu, düzensiz
                saatlerde uyumak herşeyden önce sizi yorgun salır ve daha çok
                uyumak isteği getirir. Beraberinde kortizol eksikliğine
                (böbreküstü bezinden salgılanan bir hormon) yol açar. Gece
                kesintisiz 7 saat sağlam uykuda vücudun kendini tamir etmesi
                mümkündür. İyileşme, hafıza, cilt esnekliği, normal kortizol
                düzeyi ve metabolizma için önemlidir.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-center p-5 mt-5 md:my-10 md:mx-32 text-lg font-normal text-[#8e8e8e] shadow-md bg-slate-50">
            <span className="font-semibold text-black">Not: </span>
            Ve son olarak cildinizi her daim nemlendirmeyi, kendiniz için
            düzenli bakım rutini oluşturmayı unutmayın. Quins Derm Solutions`in
            mucizevi dünyasında yer alan bakım ürünlerini deneyerek, cildinizi
            koruyun :)
          </p>
        </div>
      </section>
      <section id="bakimrutini" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <h1 className="text-center text-xl font-semibold py-5">
            BAKIM RUTİNİ
          </h1>
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-woman-with-smooth-skin-towel-head-sensually-looking-camera-white-background_574295-2146.jpg?t=st=1651840010~exp=1651840610~hmac=ee7c90b32585bcc179d3784ad7bf5e8f5da8bc5664f78e7b3b5f34909aa5a058&w=1060"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md   relative ">
              <div className="shadow-md   relative">
                <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase bg-white ">
                  GECE BAKIM RUTİNİ
                </h1>
              </div>
              <div className="max-h-[350px] md:max-h-[400px] bg-white overflow-auto ">
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  Gece uyumadan önce cildinizi ferahlatın.. İzlemeniz gereken 7
                  adım. Günboyu farklı ortamlarda bulunuyor, cildiniz farklı
                  yüzlerle temasda oluyor dahası ise işe gitmeden önce
                  yaptığınız makyaj akşama kadar yüzünüzde kalıyor. Belki de
                  yorgun geldiğiniz zaman yüzünüzü bile yıkamadan yatağa
                  gidiyorsunuz. Sabahları erken uyanmak bile bazen sizi
                  zorlayabilir. Bunlar cildinizde problemlerin oluşması için
                  başlıca nedenlerdendir. Endişelenmeye gerek yok, size tavsiye
                  etdiğimiz küçük ipuçları ile sabahları daha canlı bir cilt ile
                  açacak ve gününüzü ferah bir yüz ile kapatacaksınız :)
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 1: makyajınızı temizleyin
                  </span>{" "}
                  Eve geldiğiniz zaman, koşarak yatağa geçmek yerine banyoyu
                  tercih edin. Yüzünüzdeki kiri veya makyajı temizlemeniz
                  yapmanız gereken ilk adımdır. Cilt tipinize uygun
                  makyajtemizleyici veya sabun ile, yüzünüzü iyice temizleyin.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col ">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 2: ılık su ile durulayın
                  </span>
                  Cildinizi temizleyip tüm makyajı ve kiri çıkarttığınızdan emin
                  olduktan sonra cildinizi ilk önce ılık su ile yıkayın. Çünki
                  ılık su, damarları harekete geçirerek kan akşını hızlandırır
                  ve cildinizin taze bir görünüme kavuşmasına yardımcı olur.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col ">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 3: soğuk su ile devam edin
                  </span>
                  Daha bitmedi :) soğuk su cildinizin temizliyi için olmazsa
                  olmaz bir faktördür. Bu yüzden, ılık su ile cildinizi
                  duruladıktan sonra soğuk suyla yüzünüzü yıkayın. Soğuk su,
                  cildinizin sıkılaşmasına yardımcı olacaktır.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col ">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 4: temiz havlu ile kurulayın
                  </span>
                  Size tavsiyemiz, eğer cildiniz kuru ve nemsiz ise, cildinizi
                  yıkadıktan sonra kurulamayın. Suyun cildinize emmesine izin
                  verin. Diğer cilt tiplerine sahip iseniz, havlu ile yüzünüzü
                  kurulayabilir siniz. Dikkat etmeniz gereken püf nokta ise,
                  havlunun temiz olması ve cildinizi yukarıya doğru haraketlerle
                  nazikce kurulamanız.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col ">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 5: nemlendirin
                  </span>
                  Cilt temizliyini yaptıktan sonra cildinizi nemlendirmenin
                  zamanı geldi demektir. Cildiniz için doğru nemlendiriciyi
                  bulduysanız (bu bir krem veya serum olabilir) her gece
                  yatmadan önce cildinize nem desteği sağlamayı unutmayın. Tüm
                  cilt tipleri için uygun olan Quins Derm Solutions markasının
                  Rebooster serili Hydro Complex Hyaluronic Acid Serumunu baş
                  ucunuzdan ayırmayın derim:) Hyalüronik asitin nemlendirici
                  özelliği cildinize parlak ve dolgun bir görünüm
                  kazandıracaktır.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col ">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 6: peeling yapın
                  </span>
                  Cildinizi nemlendirdikten sonra peeling kullanarak cildinizi
                  gün boyu şehir temposunda kirleten ve bozan tüm dış
                  etkenlerden kurtararak rahatlatabilir siniz. Bu taze his, hem
                  daha rahat uyumanıza hem de cildinizin yenilenmesine yardımcı
                  olacaktır.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 flex flex-col ">
                  <span className="font-semibold capitalize text-[#F27A1A]">
                    adım 7: yüz maskesi uygulayın
                  </span>
                  Son olarak haftada iki veya üç kez maske kullanmanızı
                  öneririz. Günboyu cildinize maske yapıp bekletme şansınız
                  olmayabilir,bu yüzden gece bunun için en doğru zamandır
                  diyebiliriz.
                </p>
                <hr />
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  <span className="font-semibold  text-[#F27A1A]">Not:</span>{" "}
                  Maskeler ile ilgili diğer vlogumuzda doğru maske kullanımı
                  nasıl olmalı ve ne tür maskeler cildinize iyi gelir diye bir
                  araştırma yaptık ve doğru adımları sizler için derledik.
                  Okuduktan sonra uygulamanız şartıyla göz atabilir siniz :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="kullandigimizicerikler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <h1 className="text-center text-xl font-semibold py-5">
            KULLANDIĞIMIZ İÇERİKLER
          </h1>
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/close-up-hyaluronic-acid-tratment_23-2149286734.jpg?t=st=1651842412~exp=1651843012~hmac=a66570367c22fc377957eda2b7d756c1f4018529c3192b033a038f79a6ff0609&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div
              id="hyaluronikasit"
              className="shadow-md  relative  scroll-mt-40"
            >
              <div className="shadow-md   relative">
                <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase bg-white ">
                  HYALÜRONİK ASİT - NEDİR? CİLDİNİZE NASIL FAYDA SAĞLAR?
                </h1>
              </div>
              <div className="max-h-[350px] md:max-h-[350px] bg-white overflow-auto ">
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  Sağlıklı ve kaliteli bir cilt hayal edin. Nemli ve pürüzsüz,
                  sıkı ve elastik, aydın ve lekesiz. Hayal ettiğiniz cilde sahip
                  olmaktan daha güzel ne olabilir ki? Pürüzsüz bir cilt bebek
                  cildi gibi yumşak ve lekesizdir. Kaliteli cildin esas özelliyi
                  özgüven sağlaması, güzelliğin ötesinde bedeninizin sağlıklı
                  kalmasını amaçlamasıdır. Kaliteli cildin en önemli gençlik
                  sermayesi nemdir. Cildin neminden sorumlu madde ise hyalüronik
                  asittir. Hyalüronik asit, hyalüronik asit bir polisakkarittir.
                  Polisakkaritler birbirlerine glikozit bağı ile bağlı glikoz
                  molekülleridir. Farklı moleküllerin birbirlerine farklı
                  bağlarla bağlanması sonucu ortaya yeni polisakkaritler
                  çıkabilir. Bu farklı polisakkaritlerden biri olan hyalüronik
                  asit, bir glukuronik asit ile bir N-asetilglukozamin
                  molekülünün birbirlerine bağlanması ile oluşur ve vücudumuzda
                  hyalüronidaz enzimi ile üretilir. Üretilen bu yeni molekülün
                  uzun ve doğrusal zincirler boyunca tekrar etmesiyle yüksek
                  molekül ağırlıklı, hyalüronik asit ortaya çıkar. Anlaşılır
                  hali ile, hyalüronik asit cildin doğal nem dengesini koruyan
                  temel yapısıdır. Bir sünger görevi üstlenir ve adeta nemi
                  cildinize hapseder. Cilde dolgun görüntü ve esneklik katar.
                  Zaman geçtikce cilt eski parlaklığını, kalitesini kaybeder.
                  Sebebi , yaşlandığımız zaman ciltte bulunan nem oranının
                  düşmesi ve cildin kuru kalmasıdır. Bu kuruluk ince çizgiler,
                  kırışıklıklar gibi istenilmeyen görüntülere yol açar.
                  Yeterince nemlilik olmadığı için ciltte destek lifleri kolajen
                  ve elastin gibi yapımlar azalır, parçalanır, cilt sıkılığını
                  kaybeder ve sarkar. Bu zaman cildin kalitesini arttırmak
                  gerekir. Hyalüronik asit, günümüzde pek çok kozmetik üründe ve
                  ilaçta ana bileşen olarak kullanılan ve endüstriyel boyutta
                  üretilen bir ham maddedir. Hücrelerin yenilenmesi üzerindeki
                  olumlu etkileri sebebiyle, yaşlandırma karşıtı serumlarda,
                  kremlerde kullanılmaktadır. Cilt kalitesini arttırmak ve
                  sağlıklı görünüm kazandırmak için ilk önceliğimiz cildi yoğun
                  nemlendirmek olmalıdır. Hydro Complex Hyaluronic Acid Serum,
                  cildinizi nemlendirerek nemi cildinize hapseder. Düzenli
                  kullanıldığında hem kırışıklık, hem de ince çizgilerin
                  görünümünü azaltır ve yüzün daha pürüzsüz görünmesine destek
                  olur.
                </p>
                <div className="bg-slate-50 py-2">
                  <p className="text-center capitalize font-semibold text-lg pb-5 text-[#F27A1A]">
                    tavsiye olunan ürün
                  </p>
                  <div className=" flex  justify-center">
                    <ProductCard
                      img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1651751003/hyaluronik_asit_1_jjzcvn.jpg"
                      imgalt="hydro complex hyaluronic acid serum"
                      name="hydro complex hyaluronic acid serum"
                      descrip="Quins Derm Solutions 48 Saat Nemlendirici–yaşlanma Karşıtı 2 Çeşit %2 Hyalüronik Asit Kompleksi 2x30ml Nemlendirici Serum"
                      link="/products/hydrocomplex-hyaluronikasitserum"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="kolajennedir" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/close-up-hyaluronic-acid-tratment_23-2149286733.jpg?w=996&t=st=1651842523~exp=1651843123~hmac=92c23600d3badaac78e22777d7584a7507127c199c5e3182eeecdd5307c8ee83"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md   relative ">
              <div className="shadow-md   relative">
                <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase bg-white ">
                  KOLAJEN - NEDİR? CİLDE NASIL ETKİ SAĞLAR
                </h1>
              </div>
              <div className="max-h-[350px] md:max-h-[350px] bg-white overflow-auto ">
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  Vücutta doku ve organlarda bulunan farklı tip proteinler
                  vardır, her birinin farklı görevi bulunmaktadır. Fakat bu
                  proteinlerin en büyük özelliği hepsinin bir araya gelip
                  vücudun sağlıklı kalması için mücadele eder. Vücut için en
                  önemli proteinlerin başında ise kolajen gelir. Kolajen
                  fibroblastlar ve diğer hücreler tarafından oluşturulan bir
                  proteindir. Fibroblast, bağ doğukusunun temel hücresidir ve en
                  önemli görevi cilt için son derece önemli olan parlaklık ve
                  esneklik sağlayan kolajen üretmesidir. Kolajenin cilt için
                  faydalarını saymakla bitmez. İlk önce belirtmek gerekir ki,
                  kolajen olmadan vücut yapısı bir hiçtir. Çünkü vücut yapısının
                  %80-ni oluşturan kolajenin temel görevi cilde güç, esneklik ve
                  sağlamlık vererek, cildi ayakta tutar. Ama bilmeniz gerekir
                  ki, sağladığı faydalar ne kadar çok olsa da, kolajen zaman
                  içerisinde tükenebilen bir yapıya sahiptir. Yaşadığımız mühit,
                  yediyimiz yemekler, yaşam biçimimiz kolajen üretiminin
                  tükenebilme kabiliyetini etkilemektedir. En başlıca etken ise,
                  elimizde olmayan sebep, yaş almaktır. Yaşımız ilerledikçe cilt
                  elastikiyetinde azalma, ciltte kuruma, sarkma, kırışıklık,
                  güneş lekeleri, saç kalitesinde bozulma ve kırılgan tırnaklar
                  ortaya çıkar. Bu belirtileri minimuma indirmek için, kolajen
                  etkili cilt bakım ürünleri kullanmanız gerekmektedir. Artık
                  cilt bakım ve kolajen serum takviyesiyle vücutta azalmaya
                  başlayan kolajeni üst seviyelere çıkarıp cildi eski
                  elastikliyine kavuşturmak mümkündür. Yeni Ultra Lift Collagen
                  Serum, cildinize pürüzsüz görünüm kazandırarak, hücrelerin
                  sıkılaşma gücünü artıracaktır. Ciltdeki kırışıklıklarda
                  azalmanın yanı sıra yüz hatlarında belirginlik
                  gözlemlenmektedir. Gözenek ve kırışıklık görünümüne karşı
                  sunduğu bakım desteği ile daha güçlü bir cilt bariyeri
                  oluşturmaya hazır olun.
                </p>
                <div className="bg-slate-50 py-2">
                  <p className="text-center capitalize font-semibold text-lg pb-5 text-[#F27A1A]">
                    tavsiye olunan ürün
                  </p>
                  <div className=" flex  justify-center">
                    <ProductCard
                      img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1651154803/Kolajen1_pp5bzm.jpg"
                      imgalt="ultra lift collagen serum"
                      name="Ultra lift collagen serum"
                      descrip="Quins Derm Solutions Sarkma Önleyici – Anında Sıkılaşma Hissi %10 Kolajen + Vitamin B3 Ultra Lift Collagen Serum 2x30ml"
                      link="/products/ultralift-collagenserum"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cvitaminifaydalari" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/close-up-hyaluronic-acid-tratment_23-2149286739.jpg?t=st=1651842523~exp=1651843123~hmac=c40f6aea8f53d0c6567d7a8f903fd3391b3de149eee504058262f0430671cb08&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md   relative ">
              <div className="shadow-md   relative">
                <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase bg-white ">
                  C VİTAMİNİ VE FAYDALARI
                </h1>
              </div>
              <div className="max-h-[350px] md:max-h-[350px] bg-white overflow-auto ">
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  C vitamini - veya askorbik asit, suda çözünen bir vitamindir.
                  Araştırmalara göre, C vitamini vücudun her bölgesindeki
                  dokuların onarımı için gerekli bir maddedir. Yaraları
                  iyileştirmeye, dişleri, cildi ve kıkırdağı onarmaya ve
                  korumaya yardımcı olur. C vitamini, serbest radikaller olarak
                  adlandırılan zararlı moleküllerin yanı sıra toksik kimyasallar
                  ve sigara dumanı gibi kirleticilerden kaynaklanan hasara karşı
                  vücudu koruyabilen özelliğe sahiptir. C vitamini ile zengin
                  olan meyvelerin demir emilimini arttırması özelliği sağlıklı
                  bir cilt ve güçlü saçlar için fayda sağlar. C vitaminin saç,
                  cilt, kan damarları, eklem gibi yerlerin bağ dokularında yoğun
                  şekilde bulunan kolajen üretiminde önemli bir rolü olduğu
                  için, eksikliğini düşünmek bile korkutucu gelebilir. Ama
                  endişelenmeye gerek yok, çünkü C vitamini vücudumuzda
                  bulunmadığı için onu besinlerden almaktayız. Hatta portakal
                  meyvesini C vitamini kaynağı olarak her yerde görebiliriz.
                  Bunun yanı sıra, mandalina, greyfurt, limon, domates, kivi,
                  çilek, ıspanak, lahana, brokoli de C vitamini içeren
                  yiyeceklerdendirler. Vücudumuzda en önemli ve göz önünde olan
                  yer yüzümüz olduğu için,eğer C vitamini eksikliği varsa,
                  mutlaka gidermemiz gerekmektedir. C vitamini serumları bunun
                  için en iyi örnek olabilir.C vitamini serumu, koyu lekelerin
                  görünümünü azaltmaya yardımcı olur. Dermatologlar tarafından
                  test edilen ve onaylanan Color Perfection C Serum düzenli
                  kullanım zamanı, daha eşit görünen bir cilt tonu ve daha
                  pürüzsüz görünüm sağlar. Akne izlerinde de etkili olan C
                  vitamin serumu, kızarıklık yapmadan cildinizde bulunan
                  lekelere karşı savaşır ve akne lezyonlarının görünümünü
                  iyileştirebilir. En önemli özelliği ise, hassas ciltlerin de
                  kullanabileceği bir ürün olmasıdır.Hassas ciltlerin rahatlıkla
                  kullanabileceği bu C vitamin serumu, harika bir yaşlanma
                  karşıtı bakım yapıyor ve cildin ışıltısını ortaya çıkarıyor.
                </p>
                <div className="bg-slate-50 py-2">
                  <p className="text-center capitalize font-semibold text-lg pb-5 text-[#F27A1A]">
                    tavsiye olunan ürün
                  </p>
                  <div className=" flex  justify-center">
                    <ProductCard
                      img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1651154633/c_serum_1_tdp55i.jpg"
                      imgalt="color perfection c serum"
                      name="Color perfection c serum"
                      descrip="Quins Derm Solutions %10 Saf Vitamin C Serum 2x30ml–10 Günde Cilt Tonunu Eşitler–güneş, Yaşlılık Lekeleri Hassas Ciltler"
                      link="/products/colorperfection-cserum"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vitaminb3b5" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/close-up-hyaluronic-acid-tratment_23-2149286718.jpg?t=st=1651842629~exp=1651843229~hmac=868dfd8b9c39a658935c9d94bbc278af86b88b38bceba197435708c57cc5c5b8&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md   relative ">
              <div className="shadow-md   relative">
                <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase bg-white ">
                  VİTAMİN B3-B5
                </h1>
              </div>
              <div className="max-h-[350px] md:max-h-[350px] bg-white overflow-auto ">
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  B vitamini genel olarak sudaçözünülebilir bir vitamin
                  kompleksidir. 8 çeşit B vitamin kategorisi vardır, her birinin
                  vücudumuz için farklı görevi ve önemi vardır. Özellikle B3-B5
                  vitamin kompleksi çok geniş yayılmış vitaminler olarak
                  bilinir. B3 vitamini, sinir sisteminin korunması için gerekli
                  bir vitamindir. Karbonhidrat, yağ ve protein içeren besinlerde
                  bulunur. B5 vitamini, cilt sağlığı için çok önemli bir
                  vitamindir. Cildin pürüzsüz ve aknesiz bir görünüm kazanması
                  için B5 vitamini içeren besinler tüketilebilir. B vitamini
                  genel olarak bedenimizde en hassas bölge olan cildimiz için
                  çok faydalı özelliklere sahiptir. Herhangi bir bakım ürününün
                  içeriğinde yer alarak cildimizin yenilenmesine ve hücre
                  bölünmesine yardımcı oluyor. Aynı zamanda nem kapasitesinin de
                  korunmasını sağlayabilir. Ciltte sebum üretimini sağlayarak
                  koruyucu ve kırışıklık önleyici rol üstlenir. Cilt
                  serumlarında da sıklıkla kullanılan B3-B5 vitaminleri cilt
                  bariyerini korumaya ve onarmaya yardımcı olur.
                </p>
                <div className="bg-slate-50 py-2">
                  <p className="text-center capitalize font-semibold text-lg pb-5 text-[#F27A1A]">
                    tavsiye olunan ürün
                  </p>
                  <div className=" flex   ">
                    <ProductCard
                      img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1651154633/c_serum_1_tdp55i.jpg"
                      imgalt="color perfection c serum"
                      name="Color perfection c serum"
                      descrip="Quins Derm Solutions %10 Saf Vitamin C Serum 2x30ml–10 Günde Cilt Tonunu Eşitler–güneş, Yaşlılık Lekeleri Hassas Ciltler"
                      link="/products/colorperfection-cserum"
                    />
                    <ProductCard
                      img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1651154803/Kolajen1_pp5bzm.jpg"
                      imgalt="ultra lift collagen serum"
                      name="Ultra lift collagen serum"
                      descrip="Quins Derm Solutions Sarkma Önleyici – Anında Sıkılaşma Hissi %10 Kolajen + Vitamin B3 Ultra Lift Collagen Serum 2x30ml"
                      link="/products/ultralift-collagenserum"
                    />
                    <ProductCard
                      img="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1651751003/hyaluronik_asit_1_jjzcvn.jpg"
                      imgalt="hydro complex hyaluronic acid serum"
                      name="hydro complex hyaluronic acid serum"
                      descrip="Quins Derm Solutions 48 Saat Nemlendirici–yaşlanma Karşıtı 2 Çeşit %2 Hyalüronik Asit Kompleksi 2x30ml Nemlendirici Serum"
                      link="/products/hydrocomplex-hyaluronikasitserum"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="peptitler" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/close-up-hyaluronic-acid-tratment_23-2149286764.jpg?t=st=1651842512~exp=1651843112~hmac=bf1e84cd16814f0a9225553673fc7abcfcc7267dd8133d35a996264571fdf597&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md   relative ">
              <div className="shadow-md   relative">
                <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase bg-white ">
                  PEPTİTLER
                </h1>
              </div>
              <div className="max-h-[350px] md:max-h-[350px] bg-white overflow-auto ">
                <p className="text-center p-5 md:p-10 text-lg font-normal pb-5 ">
                  Peptitler, cildin ihtiyaç duyduğu bazı proteinleri oluşturan
                  amino asitlerdir. Bazılarına biraz yabancı isim gibi gelsede,
                  peptitler aslında 3 zincir halinde kolajenleri oluşturur ve
                  bildiğiniz gibi kolajenler cildiniz için en önemli
                  bileşenlerden biridir. Bu yüzden cilt bakım rutininize peptit
                  eklerseniz, cildinizin daha fazla kolajen üretmesini teşvik
                  edebilirsiniz. Cildiniz daha fazla kolajen ürettiğinde ise
                  daha sıkı ve daha genç görünen bir cilt elde edersiniz.
                  Peptitleri cildinize uyguladığınız zaman, cilt tarafından
                  emilebilme özelliğine sahiptir ve cilde çok büyük katkıları
                  vardır. Öncelikle, vücudumuzu bakterilerden, UV ışınlarından,
                  dış etkenlerden savunan cilt bariyerini güçlendirmeye yardımcı
                  olur. Aynı zamanda kolajen üretimini teşvik ettikleri için
                  cildin daha dolgun görünmesine yardımcı olabilir. Cildinizin
                  daha dolgun ve daha sıkı olmasıyla kırışıklıklarınız ile ince
                  çizgileriniz daha az görünür hale gelir. Ve en önemlisi,
                  peptitler, elastin lifleri oluşturmaktadır. Elastin lifler ise
                  cildin daha sıkı ve gergin görünmesi sağlar. Tüm bu faydaları
                  bir serumda oluşturduk desek, tepkiniz ne olurdu? Kolajen
                  etkili Yeni Ultra Lift Collagen Serum ile, gelin birlikte
                  deneyelim :) Cildinizin elastiklik gücünü arttırarak dolgun
                  görünüm kazandıran bu serum, sarkmaları önleyerek daha parlak
                  cilde sahip olmanıza yardımcı olacaktır.
                </p>
                {/* <div className="bg-slate-50 py-2">
                  <p className="text-center capitalize font-semibold text-lg pb-5 text-[#F27A1A]">
                    tavsiye olunan ürün
                  </p>
                  <div className=" flex  justify-center">
                    <ProductCard
                      img="https://www.vichy.com.tr/site/pages/showImageResized.aspx?EncMediaId=ZTIzemMxQSsvY2dTL3RwQUhTbnpYZz09&ImageFormatAppCode=IMAGEFORMAT_ORIGINAL&v=220224194675"
                      imgalt="color perfection serum"
                      name="Color perfection c serum"
                      descrip="10 günde cilt tonunu eşitler"
                      link="/products/cserum"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MakaleBanner;
