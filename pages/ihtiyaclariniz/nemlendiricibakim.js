import Urunihtiyac from "../../components/urunihtiyac";
import { nemlendiricibakim } from "../../datas/tavsiyeolanurunler";
import { nemlendiricibakimyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'

function nemlendiricibakimf() {

  return (
    <>
    <Head>
      <title>NEMLENDİRİCİ BAKIM | Quins Solutions </title>
      <meta name="description" content="Kuru ciltlerin düşmanı olarak bilinen nemlendirici özelliğe sahip bakım ürünleri, herkesin hayal ettiği bir cilt tipine sahip olmanız için size arkadaşalık edecektir. Yüzünüzün nem dengesini sağlamak, kuruluk, kaşıntı, pul pul görünme gibi problemleri sizden uzaklaştıracaktır. Unutmayın, nemli bir cilt ile hayata her zaman 1-0 önde başlayacaksınız"  />
    </Head>

      <Urunihtiyac
        header={nemlendiricibakimyazi.header}
        descrip={nemlendiricibakimyazi.descrip}
        data={nemlendiricibakim}
      />
    </>
  );
}

export default nemlendiricibakimf;