import Urunihtiyac from "../../components/urunihtiyac";
import { Vitaminkompleksi } from "../../datas/tavsiyeolanurunler";
import { Vitaminkompleksiyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'


function vitaminkompleksi() {

  return (
    <>
    <Head>
      <title>VİTAMİN KOMPLEKSİ | Quins Solutions </title>
      <meta name="description" content="Sağlıklı cilde sahip olmanın en önemli noktası vitamin ile zenginleştirilmiş bir vücuttur. Vitamin kompleksi, cilt kaliteniz ve güzelliğiniz için en büyük destekçilerdendir. Cildiniz, sizi dış etkenlerden korurken fazlasıyla yıpranır. Yıpranan cildinizi yenilemek, daha sağlıklı, esnek ve canlı bir görünüme kavuşturmak ise sizin elinizdedir"  />
    </Head>
      <Urunihtiyac
        header={Vitaminkompleksiyazi.header}
        descrip={Vitaminkompleksiyazi.descrip}
        data={Vitaminkompleksi}
      />
    </>
  );
}

export default vitaminkompleksi;