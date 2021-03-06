import Urunihtiyac from "../../components/urunihtiyac";
import { gecebesleyicibakim } from "../../datas/tavsiyeolanurunler";
import { gecebesleyiciyazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'



function gecebesleyicibakimf() {

  return (
    <>
    <Head>
      <title>GECE BESLEYİCİ BAKIM | Quins Solutions </title>
      <meta name="description" content="Bakım yapmak için en uygun zamanın gece olduğunu biliyormuydunuz? Gece uyuduğunuz zaman cildiniz kendini yeniler ve onarır. Bu yenilenmeyi uyumadan önce cildinizi iyice temizleyerek ve sonrasında nemlendirerek destekleyebilir siniz. Gece besleyici bakım ürünleri ile, cildiniz rahat nefes alacak ve sizi yeni güne parlak bir yüz ile uyandıracak"  />
    </Head>
      <Urunihtiyac
        header={gecebesleyiciyazi.header}
        descrip={gecebesleyiciyazi.descrip}
        data={gecebesleyicibakim}
      />
    </>
  );
}

export default gecebesleyicibakimf;