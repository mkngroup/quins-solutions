import Link from "next/link";

function Dropdown(props) {
  const oneri = props.oneri;
  const data = props.data
  
  return (
    
    <div className=" w-full max-w-max  grid grid-cols-4 shadow-lg p-7 cursor-default bg-slate-50 mt-1">
      <div className="p-7 pb-2 max-w-max ">
        <h1 className=" text-left mb-6 text-lg font-bold">ÜRÜN ÇEŞİDİ</h1>
        <hr />
        <br />
        {data.uruncesidi.map((data, key) => {
          return (
            <p key={key} className="cursor-pointer text-base font-normal my-5  capitalize">
              <Link href={data.link}>{data.data}</Link>
            </p>
          );
        })}
      </div>
      <div className="p-7 pb-2 max-w-max  ">
        <h1 className=" text-left mb-6 text-lg font-bold">İHTİYAÇLARINIZ</h1>
        <hr />
        <br />
        {data.ihtiyaclariniz.map((data, key) => {
          return (
            <p key={key} className="cursor-pointer text-base font-normal my-5  capitalize">
              <Link href={data.link}>{data.data}</Link>
            </p>
          );
        })}
      </div>
      <div className="p-7 pb-2 max-w-max ">
        <h1 className=" text-left mb-6 text-lg font-bold">ÜRÜNLER</h1>
        <hr />
        <br />
        {data.urunler.map((data, key) => {
          return (
            <p key={key} className="cursor-pointer text-base font-normal my-5  capitalize">
              <Link href={data.link}>{data.data}</Link>
            </p>
          );
        })}
      </div>
      <div className="p-7 pb-2 max-w-max bg-slate-100">
        <h1 className=" text-right mb-6 text-lg font-bold">Öneri</h1>
        <hr />
        {/* <br /> */}
        <Link href={oneri.link}>
          <div className="cursor-pointer">
            <p className="cursor-pointer text-right text-base font-normal my-5">
              {oneri.name}
            </p>

            <img
              src={oneri.img}
              alt={oneri.imgalt}
              className="object-contain"
            />
            <p className="cursor-pointer text-right text-base font-normal my-5">
              {oneri.descrip}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dropdown;
