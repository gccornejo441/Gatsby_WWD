import * as React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components/panels/Layout";
import { ServicesLayout } from "../components/panels/ServicesLayout";
import Head from "next/head";
import Links from "../public/scripts/Links.json";

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
  const site = "https://webworksdreams.com";
  const canonicalURL = site + router.pathname;

  if (router.pathname.startsWith("/services/")) {
    return (
      <ServicesLayout links={Links} title={title}>
        <Head>
          {canonicalURL !== "https://webworksdreams.com/services/[products]" ? (
            <link rel="canonical" href={canonicalURL} />
          ) : (
            <link
              rel="canonical"
              href="https://webworksdreams.com/services/pricing"
            />
          )}
        </Head>
        <Component {...pageProps} />
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
      </Layout>
    </>
  );
}

export default MyApp;
