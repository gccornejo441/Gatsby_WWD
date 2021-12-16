import * as React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components/panels/Layout";
import { PreLoader } from "../components/shapes/PreLoader";
import { ServicesLayout } from "../components/panels/ServicesLayout";

interface PageProps {
  load: boolean;
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const [ loading, setLoading ] = React.useState(false);
  const [ title, setTitle ] = React.useState("WebWorks Dreams");
  
  React.useEffect(() => {
    if (router.pathname == "/services/web-services") {
      setTitle("Services Overview | WebWorks Dreams");
    } else if (router.pathname == "/services/portfolio") {
      setTitle("Portfolio | WebWorks Dreams");
    } else if (router.pathname == "/services/pricing") {
      setTitle("Pricing | WebWorks Dreams");
    } else {
      setTitle("Pricing | WebWorks Dreams");
    }

    setLoading(true);
  }, [router.pathname]);

  if (router.pathname.startsWith("/services/")) {

    
      return (
        <>
          {loading ? (
            <ServicesLayout title={title}>
              <Component {...pageProps} />
            </ServicesLayout>
          ) : (
            <div className="h-screen flex flex-col md:flex-row justify-center items-center smooch-text">
              <PreLoader />
              <span className="text-greeny font-normal text-5xl md:text-7xl pt-60 md:pl-28">
                Loading...
              </span>
            </div>
          )}
        </>
      );
  }

  return (
    <>
      {loading ? (
        <Layout title="WebWorks Dreams">
          <Component {...pageProps} />
        </Layout>
      ) : (
        <div className="h-screen flex flex-col md:flex-row justify-center items-center smooch-text">
          <PreLoader />
          <span className="text-greeny font-normal text-5xl md:text-7xl pt-60 md:pl-28">
            Loading...
          </span>
        </div>
      )}
    </>
  );
}

export default MyApp;
