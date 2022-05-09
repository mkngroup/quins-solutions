import Urunihtiyac from "../../components/Urunihtiyac";
import { Hyaluronikaciticerikliler } from "../../Datas/Tavsiyeolanurunler";
import { HyaluronicAcidiceriklileryazi } from "../../Datas/Ihtiyaclarinizyazi";
import Head from 'next/head'



function hyaluronikaciticerikliler() {

  return (
    <>
    <Head>
      <title>Hyalüronik Asit İçerikliler | Quins Solutions </title>
      <meta name="description" content="Cildinin nem oranını dengeler, bebek gibi pürüzsüz bir görünüm sağlar. Kaliteli bir cilte sahip olmak için geç kalmadan, hyalüronik asit içerikli ürünleri deneyerek farkını ortaya koy"  />
    </Head>
      <Urunihtiyac
        header={HyaluronicAcidiceriklileryazi.header}
        descrip={HyaluronicAcidiceriklileryazi.descrip}
        data={Hyaluronikaciticerikliler}
      />
    </>
  );
}

export default hyaluronikaciticerikliler;