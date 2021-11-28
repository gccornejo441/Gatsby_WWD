import React from "react";
import Link from "next/link";
import headerBlob from "../../public/images/headerBlob.svg";
import Image from "next/image";
import SEOImage from "../../public/images/SEO.svg";
import WebDevelopment from "../../public/images/Web-Development.svg";
import Frameworks from "../../public/images/Frameworks.svg";

export const Hero = () => {
  return (
    <div className="w-full container px-22 md:px-12 lg:px-32">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="px-10 lg:mt-5 xl:mt-32 md:px-0">
          <div className="my-8">
            <div className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 flex flex-col ">
              <span className="pb-5">You dream it,</span>
              <span className="pb-5">we build it.</span>
            </div>
            <div className="text-gray-400 font-semibold mt-2 leading-loose">
              The right website is waiting for you, and we are here to make it
              happen.
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-10 md:pb-0">
            <div className="text-white px-4 mb-16 md:mb-0 md:px-9 py-2 rounded-full flex items-center bg-greeny md:mr-10">
              <Link href="/">Get Started</Link>
            </div>
            <div className="text-white px-4 mb-8 md:mb-0 md:px-9 py-2 rounded-full flex items-center bg-greeny">
              <Link href="/">More Info</Link>
            </div>
          </div>
        </div>
        <div>
          <Image src={headerBlob} alt="Hero Image" height={650} width={650} />
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <div>
          <div className="flex flex-col">
            <div className="flex justify-center">
              <span className="bg-lighterGreen px-5 rounded-full text-greeny font-bold text-sm">
                SERVICES
              </span>
            </div>
            <div className="text-center text-3xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              <span>What We Offer</span>
            </div>
            <div className="text-center w-72 md:w-96 mx-auto">
              <span className="text-gray-400 font-semibold text-sm">
                If you're in the market for modern solutions, WebWorks Dreams
                offers the means to empower newcomers to explore the newest and
                innovative software capabilities.
              </span>
            </div>
            <div className="my-28">
              <ul className="flex justify-between flex-col md:flex-row">
                <li className="flex flex-col">
                  <Image
                    alt="Search Engine Optimization"
                    height={200}
                    width={200}
                    src={SEOImage}
                  />
                  <div className="text-center text-3xl md:text-2xl lg:text-xl font-bold text-gray-800">
                    <span>LOCAL SEARCH ENGINE OPTIMIZATION</span>
                  </div>
                  <div className="text-center max-w-prose">
                    <span className="text-gray-400 font-semibold text-sm">
                      Our websites are tailored to your needs and your user
                      demands, so we have cultivated our process to target
                      customer satisfaction.
                    </span>
                  </div>
                </li>
                <li className="flex flex-col">
                  <Image
                    alt="Web Developement"
                    height={200}
                    width={200}
                    src={WebDevelopment}
                  />
                  <div className="text-center text-3xl md:text-2xl lg:text-xl font-bold text-gray-800">
                    <span>WEBSITE DEVELOPMENT</span>
                  </div>
                  <div className="text-center max-w-prose">
                    <span className="text-gray-400 font-semibold text-sm">
                      With little worry about speed and website responsiveness,
                      your customers will truly be receiving a quality
                      experience that of the most technologically up-to-date
                      companies in your field.
                    </span>
                  </div>
                </li>
                <li className="flex flex-col justify-center">
                  <Image
                    alt="Frameworks"
                    height={200}
                    width={200}
                    src={Frameworks}
                  />
                  <div className="text-center text-3xl md:text-2xl lg:text-xl font-bold text-gray-800">
                    <span>MODERN WEBSITE FRAMEWORKS</span>
                  </div>
                  <div className="text-center max-w-prose">
                    <span className="text-gray-400 font-semibold text-sm">
                      Creating modern websites has never been easier. With the
                      power of CSS frameworks such as Tailwind CSS, we are at
                      liberty to compose dynamically responsive websites.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
