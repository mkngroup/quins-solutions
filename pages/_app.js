import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as fbq from "../lib/fpixel";
import Head from "next/head";
import * as ga from '../lib/google-analytics'


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = (url) => {
      fbq.pageview();
      ga.pageview(url)
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1652202397/quinsicon_fuqmoq.png"
        />

        <meta
          name="facebook-domain-verification"
          content="mc81yaudne9rd4akz4qh4cfk6z9tn2"
        />
        {/* GOOGLE TAG */}
        <Script strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K9SF4XX');
          `}
        </Script>
      </Head>

      {/* GOOGLE ANALYTICS */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `}
      </Script>

      {/* FACEBOOK EVENTS */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${403446994779068});
          fbq('track', 'PageView');
          `,
        }}
      />
      {/* GOOGLE TAG */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K9SF4XX"
          height="0"
          width="0"
          className="hidden invisible"
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
