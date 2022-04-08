import * as React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components/panels/Layout";
import { ServicesLayout } from "../components/panels/ServicesLayout";
import Head from "next/head";
import Links from "../public/scripts/Links.json";
import Script from "next/script";

import { useEffect } from 'react'
import { useRouter } from 'next/router'


declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq('track', name, options)
}

const handleRouteChange = () => {
  pageview()
}


const FacebookPixel = () => {
  const router = useRouter()
  
  useEffect(() => {
    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <>
      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', "401786405074161");
        fbq('track', 'PageView');
      `}
      </Script>
      <noscript><img height="1" width="1" style={{display:"none"}}
        src='https://www.facebook.com/tr?id=401786405074161&ev=PageView&noscript=1"
      /></noscript>
    </>
  )
}


const GTag = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T80JQX1QYQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T80JQX1QYQ');
        `}
      </Script>
    </>
  );
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("WebWorks Dreams");

  React.useEffect(() => {
    if (router.pathname == "/services/web-services") {
      setTitle("Services Overview | WebWorks Dreams");
    } else if (router.pathname == "/services/portfolio") {
      setTitle("Portfolio | WebWorks Dreams");
    } else if (router.pathname == "/services/pricing") {
      setTitle("Pricing | WebWorks Dreams");
    } else {
      setTitle("WebWorks Dreams");
    }

    setLoading(true);
  }, [router.pathname]);
  const site = "https://www.webworksdreams.com";
  const canonicalURL = site + router.pathname;

  if (router.pathname.startsWith("/services/")) {
    return (
      <ServicesLayout links={Links} title={title}>
        <Head>
          {canonicalURL !==
            "https://www.webworksdreams.com/services/[products]" ? (
            <link rel="canonical" href={canonicalURL} />
          ) : (
            <link
              rel="canonical"
              href="https://www.webworksdreams.com/services/pricing"
            />
          )}
        </Head>
        <Component {...pageProps} />
        <GTag/>
        <FacebookPixel/>
      </ServicesLayout>
    );
  }

  return (
    <>
      <Layout links={Links} title="WebWorks Dreams">
        <Head>
          <link rel="canonical" href={canonicalURL} />
        </Head>
        <Component {...pageProps} />
        <GTag />
        <FacebookPixel />
      </Layout>
    </>
  );
}

export default MyApp;
