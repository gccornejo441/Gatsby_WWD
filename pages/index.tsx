import * as React from "react";
import { Hero } from "../components/panels/Hero";
import { About } from "../components/panels/AboutUs";
import { Shapes } from "../components/shapes/Shapes";
import Head from "next/head";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="all" />

        {/* OG */}
        <meta property="fb:app_id" content="254907099748012" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webworksdreams.com/" />
        <meta
          property="og:title"
          content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
        />
        <meta
          property="og:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
        />
        <meta property="og:image:alt" content="A web developer hard at work" />
        <meta
          property="og:description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
        />
        <meta
          name="description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
        />
        <meta property="og:site_name" content="WebWorks Dreams" />

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
          content="https://www.webworksdreams.com/images/sharecard.jpg"
        />
        <meta name="twitter:image:alt" content="A web developer hard at work" />
        <link rel="canonical" href="https://www.webworksdreams.com/" />
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
