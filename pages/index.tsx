import Head from "next/head";
import { Hero } from '../components/panels/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>WebWorks Dreams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="border-2 border-red-500 flex justify-center">
        <Hero />
      </main>
    </>
  );
}
