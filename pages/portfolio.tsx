import React from "react";
import Image from "next/image";

import Jobbox from "../public/images/portfolio/Jobbox-portfolio-cover.webp";
import HomeKeeper from "../public/images/portfolio/Homekeeper-portfolio.webp"
import kleanWindows from "../public/images/portfolio/Klean-wash.webp";
import SIM from "../public/images/portfolio/Spiritual-Intervention-Ministries.webp"
import ESG from "../public/images/portfolio/ADVANCE-ESG-IMAGE.webp"
import LARJP from "../public/images/portfolio/LARJP-WORKS.webp"
import SCT from '../public/images/portfolio/Safety-Compliance-Training.webp'

import { PageSeo } from "../lib/seo";

const products = [
  {
    id: 3,
    name: "Safety Compliance & Training: Roadside Ready",
    href: `https://www.webworksdreams.com/case-studies/SCT`,
    imageSrc: SCT,
    imageAlt: "SCT Landing Page Card",
    description: "Safety Compliance & Training LLC conducts vehicle inspector training on topics such as handling hazardous materials, operating commercial vehicles safely, and following safety protocols in the event of an accident or emergency.",
    target: "_blank",
  },
  {
    id: 2,
    name: "HomeKeeper (Model)",
    href: "https://home-keeper.vercel.app/",
    imageSrc: HomeKeeper,
    imageAlt: "HomeKeeper Home Page",
    description: "Achieve the American Dream Of Homeownership.",
    target: "_blank",
  },
  {
    id: 1,
    name: "Klean Windows (Model)",
    href: "#",
    imageSrc: kleanWindows,
    imageAlt: "Klean Windows Home Page",
    description: "We'll clean your windows.",
    target: "_blank",
  }
];

const metaData = {
  "title": "WebWorks Dreams",
  "sitesnippet": "WebWorks Dreams' best created websites",
  "description": "Look over our list of the best websites created by our professional web designers and developers.",
  "language": "en-us",
  "imageUrl": "https://www.webworksdreams.com/images/sharecard.jpg",
  "alt": "A web developer hard at work",
  "tHandle": "@WebWorksDreams",
  "site": "@WebWorksDreams",
  "tCardType": "summary_large_image",
  "appId": "254907099748012"
}

const css = { width: '100%', height: 'auto' }

const Portfolio = () => {
  return (
    <>
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
      <div className="bg-gradient-to-t from-gray-50 to-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto px-3 flex justify-center flex-col text-center md:text-left pb-12 lg:px-28 xl:px-48">
            <h1 className="text-gray-800 font-bold text-3xl md:text-7xl">
              Checkout Some Of Our Amazing Case Studies
            </h1>
            <h2 className="text-gray-800 font-normal pt-10 text-xl md:text-3xl">
              Frame your dream website here
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative lg:px-28 xl:px-48"
              >
                <div className="w-auto h-auto bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    sizes="100vw"
                    style={css}
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <a href={product.href} target={product.target}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
