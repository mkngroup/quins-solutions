import Urunihtiyac from "../../components/urunihtiyac";
import { aknesivilce } from "../../datas/tavsiyeolanurunler";
import { aknesivilceyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'



function aknesivilcef() {

  return (
    <>
    <Head>
      <title>AKNE-SİVİLCE YATIŞTIRICI ÜRÜNLER | Quins Solutions </title>
      <meta name="description" content="Akne ve sivilce izleri, hiç hayal etmediğimiz bir görüntülerdir. Cildimizin fazla sebum üretmesi sonucu gözeneklerin kapanmasına ve ardınca sivilce-akne oluşumuna neden olur. Sivilce bir kaç gün içinde geçsede izleri uzun süre kalabilir. Cildinde oluşabilecek sivilce ve akne gibi cilt kusurlarını gidermek artık o kadarda zor değil. Quins Derm Solutions markasının akne ve sivilceye eğilimli ciltler için tasarladığı cilt bakım ürününü kullanarak kötü görüntülerden kurtulabilir siniz"  />
    </Head>
      <Urunihtiyac
        header={aknesivilceyazi.header}
        descrip={aknesivilceyazi.descrip}
        data={aknesivilce}
      />
    </>
  );
}

export default aknesivilcef;