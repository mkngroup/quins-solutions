import Urunihtiyac from "../../components/urunihtiyac";
import { Kolajentakviyesi } from "../../Datas/tavsiyeolanurunler";
import { Kolajentakviyesiyazi } from "../../Datas/ihtiyaclarinizyazi";
import Head from 'next/head'



function kolajentakviyesi() {

  return (
    <>
    <Head>
      <title>KOLAJEN TAKVİYESİ | Quins Solutions </title>
      <meta name="description" content="Cildinizin elastik yapıya sahip olmasının en güçlü destekçicisi kolajenlerdir. Vücut yapısının %80-ni oluşturan kolajenlerin temel görevi cilde güç, esneklik ve sağlamlık vererek, cildi ayakta tutmaktır. Faydalarını saymakla bitmeyen kollajenin yaşlandıkça vücudumuzdakı oranı azalmaya başlar, bu yüzden kolajen içerikli bakım ürünleri kullanmaya başlarız. Artık cilt bakım ve kolajen serum takviyesiyle vücutta azalmaya başlayan kolajeni üst seviyelere çıkarıp cildi eski elastikliyine, parlaklığına kavuşturmak mümkündür"  />
    </Head>
      <Urunihtiyac
        header={Kolajentakviyesiyazi.header}
        descrip={Kolajentakviyesiyazi.descrip}
        data={Kolajentakviyesi}
      />
    </>
  );
}

export default kolajentakviyesi;
