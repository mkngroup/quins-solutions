import Urunihtiyac from "../../components/urunihtiyac";
import { yuztonesitleyici } from "../../datas/tavsiyeolanurunler";
import { yuztonesitleyiciyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'


function yuztonesitleyicif() {

  return (
    <>
    <Head>
      <title>YÜZ TON EŞİTLEYİCİLER | Quins Solutions </title>
      <meta 
      name="description" 
      content="Cilt tonu eşitleyici derken ilk akla gelen şey C vitamin içerikli serumlardır. Özellikle yaz aylarında cildinizin rahat nefes alması için, fazla makyaj yapmamaya özen göstermelisiniz. Eğer cilt renginizde bir eşitsizlik söz konusuysa, yüz ton eşitleyici ürünler kullanarak farkı minimuma indirin. Ve makyaj yapmadan güzel görünmenin tadını çıkarın"  />
    </Head>
      <Urunihtiyac
        header={yuztonesitleyiciyazi.header}
        descrip={yuztonesitleyiciyazi.descrip}
        data={yuztonesitleyici}
      />
    </>
  );
}

export default yuztonesitleyicif;