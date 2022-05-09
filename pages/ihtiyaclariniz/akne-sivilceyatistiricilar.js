import Urunihtiyac from "../../components/Urunihtiyac";
import { Aknesivilce } from "../../Datas/Tavsiyeolanurunler";
import { Aknesivilceyazi } from "../../Datas/Ihtiyaclarinizyazi";
import Head from 'next/head'



function aknesivilce() {

  return (
    <>
    <Head>
      <title>AKNE-SİVİLCE YATIŞTIRICI ÜRÜNLER | Quins Solutions </title>
      <meta name="description" content="Akne ve sivilce izleri, hiç hayal etmediğimiz bir görüntülerdir. Cildimizin fazla sebum üretmesi sonucu gözeneklerin kapanmasına ve ardınca sivilce-akne oluşumuna neden olur. Sivilce bir kaç gün içinde geçsede izleri uzun süre kalabilir. Cildinde oluşabilecek sivilce ve akne gibi cilt kusurlarını gidermek artık o kadarda zor değil. Quins Derm Solutions markasının akne ve sivilceye eğilimli ciltler için tasarladığı cilt bakım ürününü kullanarak kötü görüntülerden kurtulabilir siniz"  />
    </Head>
      <Urunihtiyac
        header={Aknesivilceyazi.header}
        descrip={Aknesivilceyazi.descrip}
        data={Aknesivilce}
      />
    </>
  );
}

export default aknesivilce;