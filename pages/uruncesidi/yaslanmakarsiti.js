import Urunihtiyac from "../../components/urunihtiyac";
import { Yaslanmakarsitiurunler } from "../../Datas/tavsiyeolanurunler";
import { Yaslanmakarsitiserumlaryazi } from "../../Datas/ihtiyaclarinizyazi";
import Head from 'next/head'

function yaslanmakarsiti() {

  return (
    <>
    <Head>
      <title>YAŞLANMA KARŞITI SERUMLAR | Quins Solutions </title>
      <meta 
      name="description" 
      content="Hiç yaşlanmadan hep genç kalsak nasıl güzel olurdu değil mi? :) Oysaki bu mümkün değil, fakat yaşlanan bir cildi yenilemek, gençleştirmek mümkündür. Yaşlanma karşıtı bakım ürünlerini keşfet, her anını doya doya yaşa"  />
    </Head>

      <Urunihtiyac
        header={Yaslanmakarsitiserumlaryazi.header}
        descrip={Yaslanmakarsitiserumlaryazi.descrip}
        data={Yaslanmakarsitiurunler}
      />
    </>
  );
}

export default yaslanmakarsiti;