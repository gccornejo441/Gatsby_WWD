import React from "react";
import WebWorksDream from "../../public/images/WWD.2.svg";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white relative z-0 text-gray-400 font-normal text-base">
      <div className="relative flex flex-col w-full max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-2 pt-16">
          <div className="flex px-2 relative pb-12 w-1/2 md:w-1/4">
            <div>
              <div className="mb-7">
                <Link href="/">
                  <a className="cursor-pointer">
                    <Image
                      src={WebWorksDream}
                      alt="WebWorks Dreams Logo"
                      height="24"
                      width="28"
                    />
                  </a>
                </Link>
              </div>
              <ul className="m-0 p-0 list-none block">
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">Home</a>
                  </Link>
                </li>

                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">About</a>
                  </Link>
                </li>
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">Portfolio</a>
                  </Link>
                </li>
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">Web Design</a>
                  </Link>
                </li>
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">Our Story</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex px-2 relative pb-12 w-1/2 md:w-1/4">
            <div>
              <h2 className="md:text-2xl text-xl mb-8 font-sans font-semibold leading-tight text-gray-600">
                Inventory
              </h2>
              <ul className="m-0 p-0 list-none block">
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-500 pb-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">Pricing</a>
                  </Link>
                </li>

                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/">
                    <a className="cursor-pointer">Products</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="text-xs pt-6 pb-20 flex justify-between">
            <div className="flex">
              <a
                target="_blank"
                href="https://twitter.com/avocode"
                aria-label="twitter"
                className="sc-6w6m2h-0 ggzfjo"
              >
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/avocode/"
                aria-label="facebook"
                className="sc-6w6m2h-0 ggzfjo"
              >
                Facebook
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/avocode/"
                aria-label="instagram"
                className="sc-6w6m2h-0 ggzfjo"
              >
                Instagram
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCaNsjhUdh3BxFL6tzyuhc9g"
                aria-label="youtube"
                className="sc-6w6m2h-0 ggzfjo"
              >
                YouTube
              </a>
              <a
                target="_blank"
                href="https://dribbble.com/avocode"
                aria-label="dribbble"
                className="sc-6w6m2h-0 ggzfjo"
              >
                Dribble
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/avocode-inc-"
                aria-label="linkedin"
                className="sc-6w6m2h-0 ggzfjo"
              >
                Linkedin
              </a>
            </div>
            <ul className="flex p-0 m-0 text-gray-500 ">
              <li className="block sm:inline-block pl-2">
                <a href="/terms-of-service" className="sc-6w6m2h-0 ggzfjo">
                  Terms of service
                </a>
              </li>
              <li className="block sm:inline-block pl-2">
                <a href="/privacy-policy" className="sc-6w6m2h-0 ggzfjo">
                  Privacy policy
                </a>
              </li>
              <li className="block sm:inline-block pl-2">
                <a href="/cookie-policy" className="sc-6w6m2h-0 ggzfjo">
                  Cookies
                </a>
              </li>
              <li className="block sm:inline-block pl-2">
                <a href="/license-acknowledgements" className="sc-6w6m2h-0 ggzfjo">
                  Licenses
                </a>
              </li>
              <li className="block sm:inline-block pl-2">
                <a href="/sitemap" className="sc-6w6m2h-0 ggzfjo">
                  Sitemap
                </a>
              </li>
            </ul>
            <p className="sm:inline-block text-sm font-semibold text-gray-500 m-0">Copyright © 2021 Avocode</p>
          </div>
        
      </div>
    </footer>
  );
};
