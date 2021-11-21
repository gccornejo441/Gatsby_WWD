import Head from 'next/head'
import { NavBar } from '../components/NavBar'

export default function Home() {
  return (
    <nav>
      <Head>
        <title>WebWorks Dreams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar/>
      </main>
    </nav>
  );
}
