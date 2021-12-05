import * as React from "react";
import Head from "next/head";
import { Hero } from "../components/panels/Hero";
import { About } from "../components/panels/AboutUs";
import { Shapes } from "../components/shapes/Shapes";

interface Props {
}

const Home: React.FC<Props> = () => {
  return (
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
  );
};

export default Home;
