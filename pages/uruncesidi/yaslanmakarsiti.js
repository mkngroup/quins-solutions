import Urunihtiyac from "../../components/urunihtiyac";
import { yaslanmakarsitiurunler } from "../../datas/tavsiyeolanurunler";
import { yaslanmakarsitiserumlaryazi } from "../../datas/ihtiyaclarinizyazi";
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
        header={yaslanmakarsitiserumlaryazi.header}
        descrip={yaslanmakarsitiserumlaryazi.descrip}
        data={yaslanmakarsitiurunler}
      />
    </>
  );
}

export default yaslanmakarsiti;