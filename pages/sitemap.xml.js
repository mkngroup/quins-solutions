import React from "react";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "http://quins-solutions.com";

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
    <loc>http://quins-solutions.com/categories/ciltbakim</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>

    <url>
    <loc>http://quins-solutions.com/categories/rebooster-serumseries</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/categories/sacbakim</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/categories/vucutbakim</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/ihtiyaclariniz/akne-sivilceyatistiricilar</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/ihtiyaclariniz/gecebesleyicibakim</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/ihtiyaclariniz/kolajentakviyesi</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/ihtiyaclariniz/nemlendiricibakim</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/ihtiyaclariniz/vitaminkompleksi</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/makale</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/products</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/products/colorperfection-cserum</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/products/deneme</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/products/hydrocomplex-hyaluronikasitserum</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/products/ultralift-collagenserum</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/uruncesidi/hyaluronikasiticerikliler</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/uruncesidi/kirisiklikkarsiti-serumlar</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/uruncesidi/vitaminb3-b5</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/uruncesidi/yaslanmakarsiti</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/uruncesidi/yuztonesitleyiciler</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/contact</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/hakkimizda</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    <url>
    <loc>http://quins-solutions.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    </url>
    
    
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
