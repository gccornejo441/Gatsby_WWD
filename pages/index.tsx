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
        {/* OG */}
        <meta property="og:url" content="https://www.webworksdreams.com/" />
        <meta
          property="og:image"
          content="https://www.webworksdreams.com/sharecard.jpg"
        />
        <meta property="og:site_name" content="WebWorks Dreams" />
        <meta
          property="og:title"
          content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
        />
        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WebWorksDreams" />
        <meta
          name="twitter:title"
          content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
        />
        <meta
          name="twitter:description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
        />
        <meta
          name="twitter:image"
          content="https://www.webworksdreams.com/sharecard.jpg"
        />
        <meta name="twitter:image:alt" content="A developer hard at work" />
        <meta
          name="keywords"
          content="Web Development Company, Custom Web Development Company, Web Development Service, Web Design Services, Nextjs Web Development, Web Development Services, Best Web Developers, Web Development Agency, Web Design, Custom Web Development, Best Web Development, Web Development USA, Web Development Company in the USA, Web Development Services USA, WordPress Website"
        />
      </Head>
      <main className="flex flex-col bg-gradient-to-t from-gray-50 to-white">
        <Shapes />
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
