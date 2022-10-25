import React from "react";
import Image from "next/image";
import Contacting from "../public/images/contacting.jpg";
import { PageSeo } from "../lib/seo";

const metaData = {
  "title": "WebWorks Dreams",
  "sitesnippet": "WebWorks Dreams support staff is available to assist you",
  "description": "Do you find yourself daydreaming about your ideal website? Do you want to make it happen? Or do you just need to refresh your current site? Please do not hesitate to contact us.",
  "language": "en-us",
  "imageUrl": "https://www.webworksdreams.com/images/sharecard.jpg",
  "alt": "A web developer hard at work",
  "tHandle": "@WebWorksDreams",
  "site": "@WebWorksDreams",
  "tCardType": "summary_large_image",
  "appId": "254907099748012"
}

const Contact = () => {

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
      <main className="flex justify-center px-5 bg-gradient-to-t from-gray-50 to-white">
        <div className="container md:text-left block text-center md:flex py-12">
          <div className="container flex flex-col justify-center xl:px-40">
            <h1 className="text-gray-800 text-4xl sm:text-5xl md:text-5xl font-bold lg:text-5xl xl:text-5xl text-center">
              Schedule A Consultation
            </h1>
            <p className="text-xl md:text-2xl text-black font-light text-center">Need additional information? </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="hidden md:block col-span-2 md:p-5 mt-4 xl:mt-12">
                <Image
                  src={Contacting}
                  alt="Office hall"
                  layout="intrinsic"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <div className="rounded-md col-span-4 md:col-span-2 lg:p-10">
                <div className="mt-8">
                  <div className="mb-10">
                    <h2 className="text-xl md:text-2xl text-black font-light text-center">
                      Please click below to schedule a consultation with one of our Intake Specialist.
                    </h2>
                  </div>
                  <div className="mb-6 text-center">
                    <a
                      href="https://calendly.com/webworksdreams/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-12 py-4 text-white bg-greeny hover:bg-darkGreeny rounded-md focus:bg-lightGreeny focus:outline-none text-1xl sm:text-2xl md:text-2xl cursor-pointer block"
                    >Schedule</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
