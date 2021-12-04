import Head from "next/head";
import { Hero } from "../components/panels/Hero";
import { About } from "../components/panels/AboutUs";
import { Shapes } from "../components/shapes/Shapes";

export default function Home() {
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
}
