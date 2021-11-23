import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter, FaFigma } from 'react-icons/fa';
import WebWorksDreamsLogo from '../../public/images/WWD.2.svg'
import { MobileNavBar } from "./MobileNavBar";

export const NavBar = ({ props }) => {
    return (
      <>
        <nav className="hidden md:flex justify-center py-2 text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny">
          <div className="container flex justify-between px-2 md:px-0">
            <a className="flex" href="mailto:webworksdreams@gmail.com">
              <MdEmail className="text-white text-lg mr-1" />
              webworksdreams@gmail.com
            </a>
            <div>
              <ul className="flex">
                <li>
                  <a href="/">
                    <FaFacebookF className="text-white text-lg mr-1" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram className="text-white text-lg mr-1" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter className="text-white text-lg mr-1" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaFigma className="text-white text-lg mr-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hidden md:flex justify-center py-2 px-2 md:px-0">
          <div className="container md:flex justify-between">
            <div className="flex items-center">
              <Image src={WebWorksDreamsLogo} width="30" height="30" />
              <span className="text-lg text-gray-600 ml-1">
                WebWorks Dreams
              </span>
            </div>
            <div className="flex item-center">
              <ul className="flex flex-col md:flex-row text-xs font-bold text-greeny">
                <li className="mr-8 hover:text-darkGreeny flex items-center">
                  <Link href="/">Home</Link>
                </li>
                <li className="mr-8 hover:text-darkGreeny flex items-center">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mr-8 hover:text-darkGreeny flex items-center">
                  <Link href="/service">Services</Link>
                </li>
                <li className="mr-8 hover:text-darkGreeny flex items-center">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="mr-8 hover:text-darkGreeny flex items-center">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="text-white px-6 py-3 rounded-full flex items-center bg-gradient-to-r from-greeny to-lightGreeny">
                  <Link href="/quote">Get A Quote</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <MobileNavBar />
        </div>
      </>
    );
}
