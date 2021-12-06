import * as React from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components/panels/Layout";
import { PreLoader } from "../components/shapes/PreLoader";

interface PageProps {
  load: boolean;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <Layout>
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
