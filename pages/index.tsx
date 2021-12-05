import * as React from 'react';
import Head from "next/head";
import { Hero } from "../components/panels/Hero";
import { About } from "../components/panels/AboutUs";
import { Shapes } from "../components/shapes/Shapes";
import { PreLoader } from "../components/shapes/PreLoader";

interface PageProps {
  load: boolean,
}

const Home: React.FC<PageProps> = () => {
  const [ onLoad, setLoad ] = React.useState<PageProps>({ load: false });
  
  React.useEffect(() => {
    setTimeout(() => {
      setLoad({ load: true })
    }, 1500);
  }, []);

  console.log(onLoad);

  return (
    <>
      {onLoad.load ? (
        <>
          <PreLoader />
        </>
      ) : (
        <>
          <Head>
            <title>WebWorks Dreams</title>
          </Head>
          <main className="flex flex-col">
            <Shapes />
            <Hero />
            <About />
          </main>
        </>
      )}
    </>
  );
}

export default Home;