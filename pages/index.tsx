import Head from 'next/head'
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebWorks Dreams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center py-2 text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny">
          <div className="container">
            <a
            className="flex"
            href="mailto:webworksdreams@gmail.com"
            alt="WebWorks Dreams Email"
            >
              <MdEmail className="text-white text-lg mr-2" />
              webworksdreams@gmail.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
