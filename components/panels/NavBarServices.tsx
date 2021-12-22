import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import WebWorksDreamsLogo from "../../public/images/WWD.2.svg";
import { MobileNavBarServices } from "./MobileNavBarServices";

export const NavBarServices = () => {
  return (
    <>
      <nav className="hidden md:flex justify-center py-2 text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny">
        <div className="container flex justify-between px-28">
          <a className="flex" href="mailto:webworksdreams@gmail.com">
            <MdEmail className="text-white text-lg mr-1" />
            webworksdreams@gmail.com
          </a>
          <div>
            <ul className="flex">
              <li>
                <a
                  href="https://www.facebook.com/WebWorksDreams"
                  target="_blank"
                  aria-label="facebook"
                  rel="noreferrer"
                >
                  <FaFacebookF className="text-white text-lg mr-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/WebWorksDreams"
                  target="_blank"
                  aria-label="twitter"
                  rel="noreferrer"
                >
                  <FaTwitter className="text-white text-lg mr-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC3RM0Ic1ERezJNHYNwXwa2A"
                  target="_blank"
                  aria-label="youtube"
                  rel="noreferrer"
                >
                  <FaYoutube className="text-white text-lg mr-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hidden md:flex justify-center py-2 px-2 md:px-0">
        <div className="container md:flex justify-between px-8 lg:px-28">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src={WebWorksDreamsLogo}
                width="50"
                height="50"
                alt="WebWorks Dreams Logo"
              />
              <span className="text-sm lg:text-lg text-gray-600 ml-1">
                WebWorks Dreams
              </span>
            </div>
          </Link>
          <div className="flex item-center">
            <ul className="flex flex-col md:flex-row text-xs font-bold text-darkestGreeny">
              <li className="mr-8 hover:text-darkGreeny flex items-center">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-8 hover:text-darkGreeny flex items-center">
                <Link href="/services/pricing">Pricing</Link>
              </li>
              <li className="mr-8 hover:text-darkGreeny flex items-center">
                <Link href="/services/portfolio">Portfolio</Link>
              </li>
              <li className="flex items-center">
                <Link href="/contact" passHref>
                  <div className="cursor-pointer text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-greeny to-lightGreeny">
                    Get A Quote
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNavBarServices />
      </div>
    </>
  );
};
