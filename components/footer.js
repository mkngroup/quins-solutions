import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="relative block bg-slate-900">
      <div className="grid grid-cols-1 space-y-10  mx-5  py-20 md:space-y-0  md:flex justify-around md:space-x-10">
        <div className=" w-full ">
          <h1 className="text-center md:text-left text-base font-light text-white mb-10">
            KURUMSAL
          </h1>
          <div className="text-left felx flex-row space-y-2">
            <p className="text-white text-sm font-semibold">
              <Link href="/hakkimizda"> HAKKIMIZDA</Link>
            </p>
            <p className="text-white text-sm font-semibold">
              <Link href="/makale">MAKALE</Link>
            </p>
            <p className="text-white text-sm font-semibold">
              <a target="_blank" href="https://asparilac.com/">
                ÜRETİCİ - ASPAR İLAÇ
              </a>
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-center md:text-left text-base font-light text-white mb-10">
              SOSYAL MEDYA
            </h1>
            <div className="text-left felx flex-row space-y-2">
              <p className="text-white text-sm font-semibold flex items-center">
                <a
                  target="_blank"
                  href="https://www.facebook.com/quins.solutions"
                  className="flex items-center"
                >
                  <FaFacebookF className="mr-2" />
                  FACEBOOK
                </a>
              </p>
              <p className="text-white text-sm font-semibold flex items-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/quins.solutions/"
                  className="flex items-center"
                >
                  <FaInstagram className="mr-2" />
                  INSTAGRAM
                </a>
              </p>
              <p className="text-white text-sm font-semibold flex items-center">
                <FaTwitter className="mr-2" />
                TWITTER
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-center md:text-left text-base font-light text-white mb-10">
            ALIŞVERİŞ
          </h1>
          <div className="text-left felx flex-row space-y-2">
            <p className="text-white text-sm font-semibold">
              <a target="_blank" href="https://wa.me/905314942594">
                WHATSAPP SİPARİŞ
              </a>
            </p>
            <p className="text-[#F2631E] text-sm font-semibold">
              <a target="_blank" href="https://ty.gl/dpdbd55mk">
                TRENDYOL
              </a>
            </p>
            <p className="text-white text-sm font-semibold">
              <a
                href="https://www.hepsiburada.com/ara?q=quins+derm+solutions"
                target="_blank"
              >
                HEPSİBURADA
              </a>
            </p>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-center md:text-left text-base font-light text-white mb-10">
            İLETİŞİM
          </h1>
          <div className="text-left felx flex-row space-y-2">
            <p className="text-white text-sm font-semibold">
              <a href="tel:+905314942594">+905314942594</a>
            </p>
            <p className="text-white text-sm font-semibold">
              <a href="tel:+902127118080">+902127118080</a>
            </p>
            <p className="text-white text-sm font-semibold">
              <a href="mailto:quins.solutions@gmail.com">
                quins.solutions@gmail.com
              </a>
            </p>
            <p className="text-white text-sm font-semibold">
              <a target="_blank" href="https://goo.gl/maps/GDJc2dgCXf2ySefFA">
                Yakuplu Mah. Dereboyu Cad. No:4/1 Beylikdüzü / İstanbul
              </a>
            </p>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-center md:text-left text-base font-light text-white mb-10">
            ÜRÜN ÇEŞİDİ
          </h1>
          <div className="text-left felx flex-row space-y-2">
            <Link href="/uruncesidi/kirisiklikkarsiti-serumlar">
              <p className="text-white text-sm font-semibold cursor-pointer">
                Kırışıklık Karşıtı Serumlar
              </p>
            </Link>

            <Link href="/uruncesidi/yuztonesitleyiciler">
              <p className="text-white text-sm font-semibold cursor-pointer">
                Yüz Ton Eşitleyiciler
              </p>
            </Link>

            <Link href="/uruncesidi/hyaluronikasiticerikliler">
              <p className="text-white text-sm font-semibold cursor-pointer">
                Hiyalüronık Asit İçerikliler
              </p>
            </Link>

            <Link href="/uruncesidi/yaslanmakarsiti">
              <p className="text-white text-sm font-semibold cursor-pointer">
                Yaşlanma Karşıtı Ürünler
              </p>
            </Link>

            <Link href="/uruncesidi/vitaminb3-b5">
              <p className="text-white text-sm font-semibold cursor-pointer">
                Vitamim B3-B5
              </p>
            </Link>

            <Link href="/ihtiyaclariniz/nemlendiricibakim">
              <p className="text-white text-sm font-semibold cursor-pointer">
                Nemlendiriciler
              </p>
            </Link>

            <Link href="/categories/ciltbakim">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Cilt bakım ürünleri
              </p>
            </Link>

            <Link href="/">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Vücut bakım ürünleri
              </p>
            </Link>

            <Link href="/">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Saç bakım ürünleri
              </p>
            </Link>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-center md:text-left text-base font-light text-white mb-10">
            ÜRÜNLER
          </h1>
          <div className="text-left felx flex-row space-y-2">
            <Link href="/products">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Quins tüm ürünler
              </p>
            </Link>

            <Link href="/categories/rebooster-serumseries">
              <p className="text-white text-sm font-extrabold capitalize cursor-pointer tracking-wider">
                REBOOSTER™ SERUM SERİES
              </p>
            </Link>

            <Link href="/">
              <p className="text-white text-sm font-extrabold capitalize cursor-pointer tracking-wider">
                3D HYDRO MAX+™ SERİES
              </p>
            </Link>

            <Link href="/products/colorperfection-cserum">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Color perfection c serum
              </p>
            </Link>

            <Link href="/products/hydrocomplex-hyaluronikasitserum">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Hydro complex hyaluronic acid serum
              </p>
            </Link>

            <Link href="/products/ultralift-collagenserum">
              <p className="text-white text-sm font-semibold cursor-pointer capitalize">
                Ultra lift collagen serum
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 p-1">
        <h1 className="text-white text-center capitalize">
          2022 © Quins-Solutions Tüm hakları saklıdır
        </h1>
      </div>
    </div>
  );
}

export default Footer;
