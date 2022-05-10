import Urunihtiyac from "../../components/urunihtiyac";
import { hyaluronikaciticerikliler } from "../../datas/tavsiyeolanurunler";
import { hyaluronicacidiceriklileryazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'



function hyaluronikaciticeriklilerf() {

  return (
    <>
    <Head>
      <title>Hyalüronik Asit İçerikliler | Quins Solutions </title>
      <meta name="description" content="Cildinin nem oranını dengeler, bebek gibi pürüzsüz bir görünüm sağlar. Kaliteli bir cilte sahip olmak için geç kalmadan, hyalüronik asit içerikli ürünleri deneyerek farkını ortaya koy"  />
    </Head>
      <Urunihtiyac
        header={hyaluronicacidiceriklileryazi.header}
        descrip={hyaluronicacidiceriklileryazi.descrip}
        data={hyaluronikaciticerikliler}
      />
    </>
  );
}

export default hyaluronikaciticeriklilerf;