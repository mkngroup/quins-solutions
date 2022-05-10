import Urunihtiyac from "../../components/urunihtiyac";
import { vitaminkompleksi } from "../../datas/tavsiyeolanurunler";
import { vitaminkompleksiyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'


function vitaminkompleksif() {

  return (
    <>
    <Head>
      <title>VİTAMİN KOMPLEKSİ | Quins Solutions </title>
      <meta name="description" content="Sağlıklı cilde sahip olmanın en önemli noktası vitamin ile zenginleştirilmiş bir vücuttur. Vitamin kompleksi, cilt kaliteniz ve güzelliğiniz için en büyük destekçilerdendir. Cildiniz, sizi dış etkenlerden korurken fazlasıyla yıpranır. Yıpranan cildinizi yenilemek, daha sağlıklı, esnek ve canlı bir görünüme kavuşturmak ise sizin elinizdedir"  />
    </Head>
      <Urunihtiyac
        header={vitaminkompleksiyazi.header}
        descrip={vitaminkompleksiyazi.descrip}
        data={vitaminkompleksi}
      />
    </>
  );
}

export default vitaminkompleksif;