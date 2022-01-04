import * as React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components/panels/Layout";
import { ServicesLayout } from "../components/panels/ServicesLayout";
import Head from "next/head";
import Links from "../public/scripts/Links.json";
import Script from "next/script";

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
      </Layout>
    </>
  );
}

export default MyApp;
