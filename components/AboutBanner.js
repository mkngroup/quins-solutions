import React from "react";
import Comment from "./comment";
import { Comments } from "../Datas/CommentsData";

function AboutBanner1() {
  return (
    <div className="bg-[#F3F3F3]">
      <section>
        <div className="relative block md:max-h-[30rem] bg-[url('https://img.freepik.com/free-photo/simple-white-background-with-smooth-lines-light-colors_476363-5220.jpg?w=1060')] bg-no-repeat bg-cover">
          <div className="p-0 md:p-10">
            <h1 className="text-center px-10 py-5 text-xl font-semibold">
              MARKAMIZ
            </h1>
            <p className="text-center p-10 text-lg font-normal capitalize">
              Ürettiğimiz dermokozmetik bakım ürünlerinin farkını daha iyi
              anlatmamız için Aspar İlaç Kozmetik Sanayi A.Ş. bünyesinde Quins
              Derm Solutions markasını yaratarak sadece cildinize değil, tüm
              vücudunuza dokunmak istedik. REBOOSTER Serum Serisi ve 3DMAX adı
              altında bakım ürünlerimizi sizler için tasarladık. İçinde bulunan
              C, B1-B5 vitaminleri, Hyalüronik asit, Kollajen, Bellatoin ve s.
              ile zengin ürünlerimiz cildinizin daha parlak görünüm kazanmasına
              yardımcı olacak. Ürünlerimizin her biri farklı özellikleri ile
              cildinizi onararak canlılık yaratacaktır.
            </p>
          </div>
        </div>
      </section>
      <section id="nasilbasladi" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <h1 className="text-center text-xl font-semibold py-5">HİKAYEMİZ</h1>
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full ">
            <img
              src="https://img.freepik.com/free-photo/double-exposure-image-business-profit-growth_31965-3022.jpg?w=1060"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                NASIL BAŞLADI?
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Herşey ilaç fabrikasında çalışan vizyon sahibi bir girişimcinin
                kendi fabrikasını kurmak istemesiyle başladı. Zamanla kendi
                ekibini kurarak, büyük azimle ve kararlılıkla başlatdığı işini
                büyüterek 2012 yılında Aspar İlaç Kozmetik Sanayi şirketini
                kurdu. Dermokozmetik alanında bilgi sahibi olan ve kendi
                markasını yaratmak isteğen arkadaşını da fabrikasına davet eden
                XX , işlerini büyütmek için harakete geçtiler. Kuruluşundan
                bugüne kadar geçen yıllar içinde tabiiki zorluklar oldu ama
                başaramamak için hiçbir sebep yoktu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="nasildevamediyor" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/business-woman-talking-about-financial-project-taking-notes-discussing-start-up-ideas-using-laptop-diverse-employees-gathered-co-working-working-process-busy-company-teamwork-help-concept_482257-13564.jpg?t=st=1651774322~exp=1651774922~hmac=e67d9a144b4b8541971eb1041152d6d9272c5d13567c35b7c7e667b2c85b8a54&w=1060"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full rounded-tl-[30rem]"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                NASIL DEVAM EDİYOR?
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Bu gün, Aspar İlaç Kozmetik Sanayi A.Ş. şirketi yüksek üretim
                kapasiteli (5600 m2) fabrikasında geliştirmiş olduğu ilaç ve
                kozmetik ürünlerinin üretimini yaparak pazarda yer edinmiş ve
                her geçen yıl pazar payını arttırarak kendini kanıtlıyor. Aspar
                İlaç Kozmetik Sanayi A.Ş. ailesi olarak ileri laboratuvar imkanı
                ile dermokozmetik üretim alanında dermotolojik testlerden
                geçirilmiş cilt bakım, vücut bakım, saç bakım ürünleri, ilaç
                üretim alanında ise vitaminler, gida takviyeleri, şuruplar ve s
                üretmekteyiz.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="misyonvizyon" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/teamwork-power-successful-business-meeting-workplace-concept_1423-102.jpg?t=st=1651774398~exp=1651774998~hmac=09063d862a703ca9db50bb41edee178b73d5c8823b5296bf610da6c44091dc67&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                MİSYON VE VİZYONUMUZ
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Quins Derm Solutions markası olarak uzmanlık ve kaliteyi bir
                araya getirerek, dermokozmetik şirketleri içinde kendi yerimizi
                aldık, cilt bakım ürünleri, serumları, saç ve vücut bakım
                ürünleri ile fark yaratarak bunu kendimize misyon edindik.
                Vizyonumuz ise yaptığımız işler ile kendimizi ilk sıralara
                taşımak, tüm Avrupa ülkelerinde markamızı temsil etmek ve
                kaliteli ürünlerimiz ile cilt bakımına yeni nefes getirmektir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="hedefimiz" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/digital-graph-with-businessman-hand-overlay_53876-101944.jpg?t=st=1651774460~exp=1651775060~hmac=4cbfcefd141969594278a6a24979257d159a95c53b7ea32ff556a1e096c5ab76&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full rounded-tr-[30rem] "
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold">
                HEDEFİMİZ
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Marka olarak isteğimiz sadece ürün satmak değil, önceliğimiz
                sizlere daha yakın olup ne istediğinizi anlamak ve cilt
                problemlerinizi çözmek için yeni ürünler yaratmaktır. Bunların
                kolay iş olmadığını biliyoruz, fakat biz de zoru seviyoruz.
                Hedefimiz dermokozmetik ürün alanında, bakım ile ilgili her
                konuda ilk akla gelen marka olmaktır. Bu yüzden, cildinizin
                bakıma ihtiyaç duyduğu her anında yanınızdayız. Bunun için,
                farklı cilt tiplerine uygun farklı ürünler üretiyor ve kendimizi
                her geçen gün geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="cildinizicintasarliyoruz" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <h1 className="text-center text-xl font-semibold py-5">
            CİLDİNİZ İÇİN TASARLIYORUZ
          </h1>
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/beautiful-woman-getting-beauty-treatment_329181-18790.jpg?t=st=1650968182~exp=1650968782~hmac=11a82de54c1b8314f46fb6157c489196f7e14571967a9337a8273552b3b8b73b&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full rounded-tl-[30rem]"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                HAYATINIZI GÜZELLEŞTİRMMEK İÇİN CİLDİNİZE İYİ BAKIN!
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Cildinizde yaranan kusurlar, zamanla oluşan kırışıklıklar, güneş
                ve yaşlılık lekeleri sizin elinizde olmayabilir ama onları
                minimize etmek sizin elinizdedir. Vücudunu sevmeyen, dikkat
                göstermeyen kimse kendisini de sevmez. Bu yüzden, öncelikle cilt
                tipinizi tanımalı ve doğru bakım ürününüzü seçerek cildinizi
                zararlı faktörlerden korumalısınız. Mutlu sabaha canlı bir cilt
                ile uyanmak için, derinizi kaliteli ve sağlıklı tutmak için
                bakım yapmayı ihmal etmemelisiniz. Bunu alışkanlık haline
                getirdiğiniz zaman, etkilerini kısa sürede hissedeceksiniz.
                Güzelliğinize renk katmak için yola çıktığımız bu serüvende
                cildiniz için en iyisini tasarlayacağız.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="ekibimiz" className="scroll-mt-20">
        <div className="relative block mt-20 ">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg?t=st=1651774548~exp=1651775148~hmac=4facd744a8545ca6fc790caaff567122f6a6013326f2af65085fe64b41cd2827&w=1380"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                EKİBİMİZ
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Buraya kadar anlattığımız kısım, sadece aysbergin görünen
                tarafıdır. Bu işin arka tarafında tüm gücünü, enerjisini Quins
                Derm Solutuions markasını iyi yerlere taşımak için kullanan ve
                ilk günden bugüne kadar büyük azimle çalışan kocaman bir ekip
                var. Laboratuvar bölümünden paketleme bölümüne kadar, satış ve
                pazarlamadan depo bölümüne kadar, tüm ekibimiz ile sizlere daha
                iyi hizmet sunmak için çalışmaktayız.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="onceligimiz" className="scroll-mt-20">
        <div className="relative block mt-20 pb-5">
          <div className="p-0 md:px-10  md:flex md:space-x-5 w-full">
            <img
              src="https://img.freepik.com/free-photo/happines-cheerful-perforated-paper-smiley-face_53876-14247.jpg?t=st=1651774654~exp=1651775254~hmac=b4d1d196a510594b195af768c3ad418a40fa3df5f552b30ab4c9e6d663598161&w=996"
              alt=""
              className="object-cover h-48  md:h-auto md:w-1/2  w-full"
            />
            <div className="shadow-md bg-white ">
              <h1 className="text-center p-5 md:p-10 text-2xl font-semibold uppercase">
                ÖNCELİĞİMİZ
              </h1>
              <p className="text-center p-5 md:p-10 text-lg font-normal  capitalize">
                Ve tabiiki yaptığımız işte önceliğimiz müşteri memnuniyetini
                sağlamaktır. Bu yüzden ister sosyal medya hesaplarımızda, ister
                site içinde gelen yorumlarınız olsun hepsini okuyor, doğru yolda
                olduğumuzu bir kez daha anlıyoruz.
                <br /> <br /> Müşterilerimiz tarafından çoğunluk olarak gelen
                bazı yorumlarda sizin ürünleri neden kullanmalıyız, sizin
                farkınız nedir diye sorular aldık. Belirttiğimiz gibi, aslında
                cevabı çok açık ve net. Bizim için önemli olan tek şey, her
                şeyin en iyisini yapmak. En iyi cilt bakım ürünleri, en kaliteli
                vücut bakım ürünleri, en güvenilir saç bakım ürünleri sunmak.
                Biz yapıyoruz ve yorumu size bırakıyoruz. Çünkü düşünceleriniz
                bizim için çok değerli.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white  px-10">
        <div className="grid grid-cols-2 gap-5">
          {Comments.map((data, key) => {
            return (
              <Comment
                key={key}
                name={data.name}
                img={data.img}
                time={data.time}
                data={data.data}
                like={data.like}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AboutBanner1;
