import Urunihtiyac from "../../components/urunihtiyac";
import { Nemlendiricibakim } from "../../datas/tavsiyeolanurunler";
import { Nemlendiricibakimyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'

function nemlendiricibakim() {

  return (
    <>
    <Head>
      <title>NEMLENDİRİCİ BAKIM | Quins Solutions </title>
      <meta name="description" content="Kuru ciltlerin düşmanı olarak bilinen nemlendirici özelliğe sahip bakım ürünleri, herkesin hayal ettiği bir cilt tipine sahip olmanız için size arkadaşalık edecektir. Yüzünüzün nem dengesini sağlamak, kuruluk, kaşıntı, pul pul görünme gibi problemleri sizden uzaklaştıracaktır. Unutmayın, nemli bir cilt ile hayata her zaman 1-0 önde başlayacaksınız"  />
    </Head>

      <Urunihtiyac
        header={Nemlendiricibakimyazi.header}
        descrip={Nemlendiricibakimyazi.descrip}
        data={Nemlendiricibakim}
      />
    </>
  );
}

export default nemlendiricibakim;