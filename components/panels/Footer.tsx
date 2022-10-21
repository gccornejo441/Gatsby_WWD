import React from "react";
import WebWorksDream from "../../public/images/WebWorks-Dreams-Logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaFigma,
  FaYoutube,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white relative z-0 text-gray-400 font-normal text-base">
      <div className="relative flex flex-col w-full max-w-6xl mx-auto px-8">
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
                  <Link href="/services/web-services">
                    <a className="cursor-pointer">Web Services</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex px-2 relative pb-12 w-1/2 md:w-1/4">
            <div>
              <h2 className="md:text-2xl text-xl mb-8 font-sans font-semibold leading-tight text-gray-600">
                Products
              </h2>
              <ul className="m-0 p-0 list-none block">
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-500 pb-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/services/web-services">
                    <a className="cursor-pointer">Overview</a>
                  </Link>
                </li>
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/pricing">
                    <a className="cursor-pointer">Pricing</a>
                  </Link>
                </li>
                <li className="m-0 tracking-normal text-gray-500 hover:text-gray-600 py-2 font-normal leading-5 text-base md:mb-1">
                  <Link href="/portfolio">
                    <a className="cursor-pointer">Portfolio</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-xs pt-6 pb-20 flex justify-between flex-col md:flex-row">
          <div className="flex justify-center">
            <a
              href="https://twitter.com/WebWorksDreams"
              target="_blank"
              aria-label="twitter"
              rel="noreferrer"
              className="flex pr-2"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/WebWorksDreams"
              target="_blank"
              aria-label="facebook"
              rel="noreferrer"
              className="flex px-2"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3RM0Ic1ERezJNHYNwXwa2A"
              target="_blank"
              aria-label="youtube"
              rel="noreferrer"
              className="flex px-2"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/webworks-dreams"
              aria-label="LinkedIn"
              rel="noreferrer"
              className="flex px-2"
            >
              <FaLinkedin className="w-4 h-5" />
            </a>
            <a
              href="https://www.instagram.com/webworks_dreams/"
              aria-label="Instagram"
              rel="noreferrer"
              className="flex px-2"
            >
              <FaInstagramSquare className="w-4 h-5" />
            </a>
          </div>
          <ul className="flex flex-col md:flex-row p-0 m-0 text-gray-500 ">
            <li className="block sm:inline-block pl-2">
              <Link href="/terms-of-service">
                <a className="flex px-2 justify-center py-3">
                  Terms of service
                </a>
              </Link>
            </li>
            <li className="block sm:inline-block pl-2">
              <Link href="/privacy-policy">
                <a className="flex px-2 justify-center py-3">Privacy policy</a>
              </Link>
            </li>
            <li className="block sm:inline-block pl-2">
              <Link href="/sitemap">
                <a className="flex px-2 justify-center py-3">Sitemap</a>
              </Link>
            </li>
          </ul>
          <p className="sm:inline-block text-xs font-semibold text-gray-500 m-0 pt-3 md:pt-0 text-center">
            Copyright © 2022 WebWorks Dreams
          </p>
        </div>
      </div>
    </footer>
  );
};
