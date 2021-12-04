import * as React from "react";
import Link from "next/link";
import headerBlob from "../../public/images/headerBlob.svg";
import Image from "next/image";
import SEOImage from "../../public/images/SEO.svg";
import WebDevelopment from "../../public/images/Web-Development.svg";
import Frameworks from "../../public/images/Frameworks.svg";
import { motion } from "framer-motion";


export const Hero = () => {
  const [scrollY, setScrollTop] = React.useState(0);

  const position = () => {
    setScrollTop(window.pageYOffset);
  };

  //REFs
  const scrollRef1 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", position);
    };

    scrollY >= 0 && scrollY < 550
      ? scrollRef1.current?.classList.add("hero-text")
      : scrollRef1.current?.classList.remove("hero-text");

    return watchScroll();
  });

  return (
    <div className="w-full container mx-auto justify-center px-22 md:px-12 lg:px-32">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div
          ref={scrollRef1}
          className="px-10 lg:mt-5 xl:mt-32 md:px-0 hero-text"
        >
          <div className="my-8">
            <div className="smooch-text">
              <span className=" text-greeny font-normal text-4xl md:text-3xl">
                Welcome
              </span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 flex flex-col">
              <span className="pb-5">You dream it,</span>
              <span className="pb-5">we build it.</span>
            </div>
            <div className="text-gray-400 font-semibold mt-2 leading-loose text-sm md:text-normal">
              The right website is waiting for you, and we are here to make it
              happen.
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-10 md:pb-0">
            <button className="text-white text-sm mb-16 md:mb-0 px-2 lg:px-9 py-2 rounded-full flex justify-center items-center bg-greeny md:mr-10">
              <Link href="/">Get Started</Link>
            </button>
            <button className="text-white text-sm mb-8 md:mb-0 px-2 lg:px-9 py-2 rounded-full flex justify-center items-center bg-greeny">
              <Link href="/">More Info</Link>
            </button>
          </div>
        </div>
        <div>
          <Image src={headerBlob} alt="Hero Image" height={650} width={650} />
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <div>
          <div className="flex flex-col">
            <div className="flex justify-center smooch-text">
              <span className=" text-greeny font-normal text-6xl md:text-7xl">
                Services
              </span>
            </div>
            <div className="text-center text-3xl md:text-xl lg:text-3xl font-bold text-gray-800">
              <span>What We Offer</span>
            </div>
            <div className="text-center w-72 md:w-96 mx-auto">
              <span className="text-gray-400 font-semibold text-xs md:text-sm">
                If you&apos;re in the market for modern solutions, WebWorks
                Dreams offers the means to empower newcomers to explore the
                newest and innovative software capabilities.
              </span>
            </div>
            <div className="my-28">
              <div className="flex justify-between flex-col lg:flex-row">
                <div className="flex flex-col pb-12 lg:pb-0">
                  <Image
                    alt="Search Engine Optimization"
                    height={200}
                    width={200}
                    src={SEOImage}
                  />
                  <div className="text-center text-lg md:text-xl lg:text-xl font-bold text-gray-800 py-4">
                    <span>SEARCH ENGINE OPTIMIZATION</span>
                  </div>
                  <div className="text-center px-10 lg:px-8 lg:max-w-prose">
                    <span className="text-gray-400 font-semibold text-xs md:text-sm">
                      Our websites are tailored to your needs and your user
                      demands, so we have cultivated our process to target
                      customer satisfaction.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col py-12 lg:py-0">
                  <Image
                    alt="Web Developement"
                    height={200}
                    width={200}
                    src={WebDevelopment}
                  />
                  <div className="text-center text-lg md:text-xl lg:text-xl font-bold text-gray-800 py-4">
                    <span>WEBSITE DEVELOPMENT</span>
                  </div>
                  <div className="text-center px-10 md:px-5 lg:px-8 lg:max-w-prose">
                    <span className="text-gray-400 font-semibold text-xs md:text-sm">
                      With little worry about speed and website responsiveness,
                      your customers will truly be receiving a quality
                      experience.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col py-12 lg:py-0">
                  <Image
                    alt="Frameworks"
                    height={200}
                    width={200}
                    src={Frameworks}
                  />
                  <div className="text-center text-lg md:text-xl lg:text-xl font-bold text-gray-800 py-4">
                    <span>MODERN WEBSITE FRAMEWORKS</span>
                  </div>
                  <div className="text-center px-10 lg:px-8 lg:max-w-prose">
                    <span className="text-gray-400 font-semibold text-xs md:text-sm">
                      Creating modern websites has never been easier. With the
                      power of CSS framework, we are at liberty to compose
                      dynamically responsive websites.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
