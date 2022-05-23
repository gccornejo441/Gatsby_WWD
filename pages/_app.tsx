import * as React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components/panels/Layout";
import { ServicesLayout } from "../components/panels/ServicesLayout";
import Head from "next/head";
import Links from "../public/scripts/Links.json";
import Script from "next/script";
import NProgress from 'nprogress';
import Router from 'next/router'
import * as gtag from "../utils/gtag";
import MessengerCustomerChat from 'react-messenger-customer-chat'


Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


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

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (router.pathname.startsWith("/services/")) {
    return (
      <>
        <ServicesLayout links={Links} title={title}>
          {/* Global Site Code Pixel - Facebook Pixel */}
          <Script
            id="facebook-pixel"
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
               fbq('init', '499310625170244');
               fbq('track', 'PageView');
          `,
            }}
          />
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=UA-215990650-1"
          />
          <Script
          id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-215990650-1');
          `,
            }}
          />
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
        </ServicesLayout>
      </>
    );
  }

  return (
    <>
      <Layout links={Links} title="WebWorks Dreams">
        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-215990650-1"
          />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-215990650-1');
          `,
          }}
        />
        <Script
          id="facebook-pixel"
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
               fbq('init', '499310625170244');
              fbq('track', 'PageView');
          `,
          }}
        />
    
        <Head>
          <link rel="canonical" href={canonicalURL} />
        </Head>
        <Component {...pageProps} />
        <MessengerCustomerChat
          pageId={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID}
          appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
          version={"v13.0"}
          xfbml={true}
        />
      </Layout>
    </>
  );
}

export default MyApp;
