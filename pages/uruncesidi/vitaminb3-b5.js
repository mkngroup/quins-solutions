import Urunihtiyac from "../../components/urunihtiyac";
import { Vitaminb3b5 } from "../../Datas/tavsiyeolanurunler";
import { VitaminlerB3B5yazi } from "../../Datas/ihtiyaclarinizyazi";
import Head from 'next/head'


function vitaminb3b5() {

  return (
    <>
    <Head>
      <title>VİTAMİN B3 - B5 Nedir ve Ne İşe Yarar? | Quins Solutions </title>
      <meta 
      name="description" 
      content="B vitamini genel olarak bedenimizde en hassas bölge olan cildimiz için çok faydalıdır. Özellikle, B3 vitamini cildinizi dış etkenlerden koruyarak cilt bariyerini güçlendirirken, B5 vitamini cildin pürüzsüz ve aknesiz bir görünüm kazanmasına yardımcı olur"  />
    </Head>
      <Urunihtiyac
        header={VitaminlerB3B5yazi.header}
        descrip={VitaminlerB3B5yazi.descrip}
        data={Vitaminb3b5}
      />
    </>
  );
}

export default vitaminb3b5;