import Urunihtiyac from "../../components/urunihtiyac";
import { kirisiklikkarsitiserumlar } from "../../datas/tavsiyeolanurunler";
import { kirisiklikkarsitiyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'


function kirisiklikkarsitiserumlarf() {

  return (
    <>
    <Head>
      <title>Kırışıklık Karşıtı Serumlar | Quins Solutions </title>
      <meta 
      name="description" 
      content="Kırışıklık önleyici serumlar farkını ortaya koymaya devam ediyor. Cilde uygulandığı andan itibaren daha nemli ve pürüzsüz bir yüz sunarak, yaşlanma görünümünü de azaltır. Siz de cildinizde oluşan kırışıklık ve ince çizgilerden şikayetçiyseniz, zaman kaybetmeden harakete geçin"  />
    </Head>
      <Urunihtiyac
        header={kirisiklikkarsitiyazi.header}
        descrip={kirisiklikkarsitiyazi.descrip}
        data={kirisiklikkarsitiserumlar}
      />
    </>
  );
}

export default kirisiklikkarsitiserumlarf;