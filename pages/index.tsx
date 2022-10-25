import * as React from "react";
import { Hero } from "../components/panels/Hero";
import { Shapes } from "../components/shapes/Shapes";
import { PageSeo } from "../lib/seo";
import { LogoJsonLd } from "next-seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://www.webworksdreams.com/",
  "logo": "https://www.webworksdreams.com/_next/static/media/WebWorks-Dreams.c46646ff.svg"
}

const metaData = {
  "title": "WebWorks Dreams",
  "sitesnippet": "Welcome to WebWorks Dreams where dreams come true",
  "description": "WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits & startups for success in the digital age.",
  "language": "en-us",
  "imageUrl": "https://www.webworksdreams.com/images/sharecard.jpg",
  "alt": "A web developer hard at work",
  "tHandle": "@WebWorksDreams",
  "site": "@WebWorksDreams",
  "tCardType": "summary_large_image",
  "appId": "254907099748012"
}

const Home = () => {
  return (
    <>
      <LogoJsonLd
        logo={structuredData.logo}
        url={structuredData.url}
      />
      <PageSeo
        title={metaData.title}
        description={metaData.description}
        sitesnippet={metaData.sitesnippet}
        imageUrl={metaData.imageUrl}
        alt={metaData.alt}
        tHandle={metaData.tHandle}
        tSite={metaData.tHandle}
        tCardType={metaData.tCardType}
        appId={metaData.appId}
      />
      <main className="flex flex-col bg-gradient-to-t from-gray-50 to-white">
        <Shapes />
        <Hero />
      </main>
    </>
  );
};


export default Home;
