import Link from "next/link";
function Dropdown() {
  return (
    <div className=" w-full max-w-max  grid grid-cols-4 shadow-lg p-7 cursor-default bg-slate-50 mt-1">
      <div className="p-7 pb-2 max-w-max ">
        <h1 className=" text-left mb-6 text-lg font-bold">ÜRÜN ÇEŞİDİ</h1>
        <hr />
        <br />

        <p className="cursor-pointer text-base font-normal my-5  capitalize">
          <Link href="/products">Kırışıklık Karşıtı Serumlar</Link>
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize">
          <Link href="/products/cserum">Yüz Ton Eşitleyiciler</Link>
        </p>
        <p className="cursor-pointer text-base font-normal my-5  capitalize">
          Hiyalüronık Asit İçerikliler
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize ">
          Yaşlanma Karşıtı Ürünler
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize ">
          Vitamim B3-B5
        </p>
        <p className="cursor-pointer text-base font-normal my-5 mb-0 capitalize ">
          Nemlendiriciler
        </p>
      </div>
      <div className="p-7 pb-2 max-w-max  ">
        <h1 className=" text-left mb-6 text-lg font-bold">İHTİYAÇLARINIZ</h1>
        <hr />
        <br />

        <p className="cursor-pointer text-base font-normal my-5  capitalize">
          Kolajen Takviyesi
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize">
          Gece Besleyici Bakım
        </p>
        <p className="cursor-pointer text-base font-normal my-5  capitalize">
          Nemlendirici Bakım Ürünleri
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize ">
          Vitamin Kompleksi
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize ">
          Akne-Sivilce Yatıştırıcı Ürünler
        </p>
      </div>
      <div className="p-7 pb-2 max-w-max ">
        <h1 className=" text-left mb-6 text-lg font-bold">ÜRÜNLER</h1>
        <hr />
        <br />

        <p className="cursor-pointer text-base font-normal my-5  capitalize">
          <a href="./products/colorperfectioncserum">
            Color Perfection C Vitamin Serum
          </a>
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize">
          Hydo Complex Hyaluronic Acid Serum
        </p>
        <p className="cursor-pointer text-base font-normal my-5  capitalize">
          Ultra Lift Collagen Serum
        </p>
        <p className="cursor-pointer text-base font-normal my-5 capitalize ">
          Triple Moisture Night Face Cream
        </p>
      </div>
      <div className="p-7 pb-2 max-w-max bg-slate-100">
        <h1 className=" text-right mb-6 text-lg font-bold">Öneri</h1>
        <hr />
        {/* <br /> */}

        <p className="cursor-pointer text-right text-base font-normal my-5">
          Kolajen Peptit
        </p>

        <img
          src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1650361461/A-4_redkyh.jpg"
          alt="İnce Çizgilerin Giderilmesinde Bir Numaralı Çözüm"
          className="object-contain"
        />
        <p className="cursor-pointer text-right text-base font-normal my-5">
          İnce Çizgilerin Giderilmesinde Bir Numaralı Çözüm
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
