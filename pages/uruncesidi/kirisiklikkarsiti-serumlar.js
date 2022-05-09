import Urunihtiyac from "../../components/Urunihtiyac";
import { Kirisiklikkarsitiserumlar } from "../../Datas/Tavsiyeolanurunler";
import { Kirisiklikkarsitiyazi } from "../../Datas/Ihtiyaclarinizyazi";
import Head from 'next/head'


function kirisiklikkarsitiserumlar() {

  return (
    <>
    <Head>
      <title>Kırışıklık Karşıtı Serumlar | Quins Solutions </title>
      <meta 
      name="description" 
      content="Kırışıklık önleyici serumlar farkını ortaya koymaya devam ediyor. Cilde uygulandığı andan itibaren daha nemli ve pürüzsüz bir yüz sunarak, yaşlanma görünümünü de azaltır. Siz de cildinizde oluşan kırışıklık ve ince çizgilerden şikayetçiyseniz, zaman kaybetmeden harakete geçin"  />
    </Head>
      <Urunihtiyac
        header={Kirisiklikkarsitiyazi.header}
        descrip={Kirisiklikkarsitiyazi.descrip}
        data={Kirisiklikkarsitiserumlar}
      />
    </>
  );
}

export default kirisiklikkarsitiserumlar;