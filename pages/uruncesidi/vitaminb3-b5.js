import Urunihtiyac from "../../components/urunihtiyac";
import { vitaminb3b5 } from "../../datas/tavsiyeolanurunler";
import { vitaminlerb3b5yazi } from "../../datas/ihtiyaclarinizyazi";
import Head from 'next/head'


function vitaminb3b5f() {

  return (
    <>
    <Head>
      <title>VİTAMİN B3 - B5 Nedir ve Ne İşe Yarar? | Quins Solutions </title>
      <meta 
      name="description" 
      content="B vitamini genel olarak bedenimizde en hassas bölge olan cildimiz için çok faydalıdır. Özellikle, B3 vitamini cildinizi dış etkenlerden koruyarak cilt bariyerini güçlendirirken, B5 vitamini cildin pürüzsüz ve aknesiz bir görünüm kazanmasına yardımcı olur"  />
    </Head>
      <Urunihtiyac
        header={vitaminlerb3b5yazi.header}
        descrip={vitaminlerb3b5yazi.descrip}
        data={vitaminb3b5}
      />
    </>
  );
}

export default vitaminb3b5f;