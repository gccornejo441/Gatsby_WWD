import * as React from "react";
import Link from "next/link";
import headerBlob from "../../public/images/Web-Design-Team.png";
import Image from "next/image";
import SEOImage from "../../public/images/SEO.svg";
import WebDevelopment from "../../public/images/Web-Development.svg";
import Frameworks from "../../public/images/Frameworks.svg";
import GabeHeadShot from "../../public/images/Gabriel-headshot.png";
import WebFrameworks from "../../public/images/webframeworks.svg";
import { About } from "./AboutUs";

export const Hero = () => {
  //Author's name
  const authorName = "Gabriel Cornejo"
  const jobRole = "Frontend Web Developer"

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

    scrollY >= 0 && scrollY < 550 && window.screen.width >= 768
      ? scrollRef1.current?.classList.add("hero-text")
      : scrollRef1.current?.classList.remove("hero-text");

    return watchScroll();
  });

  return (
    <div className="w-full xl:container mx-auto justify-center px-22 md:px-12 lg:px-12 xl:px-32 relative z-0">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div
          ref={scrollRef1}
          className="px-10 lg:mt-5 xl:mt-32 md:px-0 hero-text"
        >
          <div className="my-8">
            <div className="smooch-text">
              <span className="font-normal text-greeny text-4xl md:text-4xl">
                Welcome
              </span>
            </div>
            <div className="text-5xl md:text-5xl lg:text-7xl font-bold text-gray-700 flex flex-col">
              <h1 className="flex flex-col">
                <span className="pb-5">You dream it,</span>
                <span className="pb-5">we build it.</span>
              </h1>
            </div>
            <div className="text-slate-500 font-light mt-2 leading-loose text-lg lg:text-xl">
              The right website is waiting for you, and we are here to make it
              happen.
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-10 md:pb-0">
            <Link href="/services/pricing">
              <a className="text-white bg-gray-700 font-light hover:bg-greeny hover:text-white tracking-wider md:text-xs xl:text-sm mb-16 md:mb-0 px-2 lg:px-9 py-2 rounded-full flex justify-center items-center md:mr-10">
                Contact Us
              </a>
            </Link>
            <Link href="/services/web-services">
              <a className="text-white bg-gray-700 font-light hover:bg-greeny hover:text-white tracking-wider md:text-xs xl:text-sm mb-8 md:mb-0 px-2 lg:px-9 py-2 rounded-full flex justify-center items-center">
                Web Services
              </a>
            </Link>
          </div>
        </div>
        <div className="px-10 md:px-0 flex justify-center">
          <Image
            src={headerBlob}
            alt="Web Design Creators"
            height={650}
            width={500}
            quality={85}
          />
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <div>
          <div className="flex flex-col md:mt-[6rem]">
            <div className="text-center text-lg md:text-xl lg:text-base font-semibold text-[#5cbdb9] my-8">
              <span className="bg-[#5cbdba33] px-3 py-2 rounded-full">What We Offer</span>
            </div>
            <div className="text-center flex justify-center">
              <div className="text-slate-900 font-bold text-xl lg:text-2xl lg:max-w-4xl px-4">
                <p>&quot;If you&apos;re in the market for modern solutions, WebWorks
                  Dreams offers the means to empower nonprofits to explore the
                  newest and innovative software capabilities.&quot;</p>
              </div>
            </div>
            <div>
              <div className="text-center my-8">
                <Image
                  className="rounded-full"
                  alt="Full Stack Developer Headshot"
                  src={GabeHeadShot}
                  height={100}
                  width={100}
                />
                <span className="block font-semibold">{authorName}</span>
                <span className="block">{jobRole}</span>
              </div>
            </div>

            <About />

            <div className="my-28">
              <div className="flex flex-col mx-4">
                {/* Frameworks SVG */}
                <div className="p-10 md:p-0 grid grid-cols-1 md:grid-cols-2 md:gap-[5rem] pb-12 lg:pb-0">
                  <Image
                    alt="Web Frameworks"
                    height={400}
                    width={400}
                    layout="responsive"
                    src={SEOImage}
                    className="md:slidein"
                  />
                  <div className="flex flex-col self-center">
                    <div className="text-center md:text-left text-lg md:text-xl lg:text-5xl font-bold text-gray-800 py-4">
                      <span>MODERN WEBSITE FRAMEWORKS</span>
                    </div>
                    <div className="text-center md:text-left lg:max-w-prose">
                      <span className="text-slate-700 font-light text-base lg:text-lg">
                        Creating modern websites has never been easier. With the
                        power of CSS framework, we are at liberty to compose
                        dynamically responsive websites.
                      </span>
                    </div>
                    <Link href="/contact">
                      <a className="mx-auto mt-4 md:mx-0 bg-greeny border-2 border-greeny hover:bg-transparent hover:text-greeny text-white w-max px-4 py-2 rounded-full  shadow-gray-400 shadow-lg">Learn More</a>
                    </Link>
                    <div className="mt-5">
                      <Image
                        alt="Web Fr"
                        height={100}
                        width={584}
                        layout="responsive"
                        src={WebFrameworks}
                      />
                    </div>
                  </div>
                </div>
                {/* Frameworks SVG */}
                {/* wEBDEV SVG */}
                <div className="p-10 md:p-0 flex flex-col md:flex-row-reverse pb-12 lg:pb-0">
                  <div className="w-full md:w-1/2">
                    <Image
                      alt="Web Developement"
                      height={400}
                      width={400}
                      layout="responsive"
                      src={WebDevelopment}
                      className="md:slidein-right"
                    />
                  </div>
                  <div className="flex flex-col self-center text-left md:pl-[4rem] md:w-1/2">
                    <div className="text-center md:text-left text-lg md:text-xl lg:text-5xl font-bold text-gray-800 py-4">
                      <span>WEBSITE DEVELOPMENT</span>
                    </div>
                    <div className="text-center md:text-left lg:max-w-prose">
                      <span className="text-slate-700 font-light text-base lg:text-lg">
                        With little worry about speed and website responsiveness,
                        your customers will truly be receiving a quality
                        experience.
                      </span>
                    </div>
                    <Link href="/contact">
                      <a className="mx-auto mt-4 md:mx-0 bg-greeny border-2 border-greeny hover:bg-transparent hover:text-greeny text-white w-max px-4 py-2 rounded-full  shadow-gray-400 shadow-lg">Learn More</a>
                    </Link>
                  </div>
                </div>
                {/* wEBDEV SVG */}
                {/* SEO SVG */}
                <div className="p-10 md:p-0 grid grid-cols-1 md:grid-cols-2 md:gap-[5rem] pb-12 lg:pb-0">
                  <Image
                    alt="Search Engine Optimization"
                    src={Frameworks}
                    height={400}
                    width={550}
                    layout="responsive"
                    className="md:slidein"
                  />
                  <div className="flex flex-col self-center">
                    <div className="text-center md:text-left text-lg md:text-xl lg:text-5xl font-bold text-gray-800 py-4">
                      <span>SEARCH ENGINE OPTIMIZATION</span>
                    </div>
                    <div className="text-center md:text-left lg:max-w-prose">
                      <span className="text-slate-700 font-light text-base lg:text-lg">
                        Our websites are tailored to your needs and your user
                        demands, so we have cultivated our process to target
                        customer satisfaction.
                      </span>
                    </div>
                    <Link href="/contact">
                      <a className="mx-auto mt-4 md:mx-0 bg-greeny border-2 border-greeny hover:bg-transparent hover:text-greeny text-white w-max px-4 py-2 rounded-full  shadow-gray-400 shadow-lg">Learn More</a>
                    </Link>
                  </div>
                </div>
                {/* SEO SVG */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
