import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdEmail, MdPhone } from "react-icons/md";
import WebWorksDreamsLogo from "../../../public/images/WWD.2.svg";
import { MobileNavBarServices } from "./MobileNavBarServices";
import Logo from "../NavLogo";

export const NavBarServices = ({ links }) => {
  return (
    <>
      <nav className="hidden md:flex justify-center py-2 text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny">
        <div className="w-full xl:container flex justify-between px-8 lg:px-12 xl:px-28">
          <div className="grid grid-cols-2 gap-3">
            <a className="flex hover:underline" href="mailto:gcornejo@webworksdreams.com">
              <MdEmail className="text-white text-lg mr-1" />
              gcornejo@webworksdreams.com
            </a>
            <a className="flex hover:underline" href="tel:951-254-2009">
              <MdPhone className="text-white text-lg mr-1" />
              (951) 254 - 2009
            </a>
          </div>
          <div>
            <ul className="flex">
              {links.navbar.socials.map((item) => {
                return (
                  <li key={item._id}>
                    <a
                      href={item.href}
                      target={item.target}
                      aria-label={item.aria_label}
                      rel={item.rel}
                    >
                      <Logo name={item.aria_label} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="hidden md:flex justify-center py-2 px-2 md:px-0">
        <div className="w-full xl:container md:flex justify-between px-8 lg:px-12 xl:px-28">
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
              {links.navbar_services.links.map((item) => {
                return (
                  <div key={item._id}>
                    {item._id !== 4 ? (
                      <li>
                        <div
                          key={item._id}
                          className="mr-8 md:mt-2 lg:mt-3 hover:text-darkGreeny flex items-center"
                        >
                          <Link href={item.href}>{item.name}</Link>
                        </div>
                      </li>
                    ) : (
                      <li>
                        <div className="mt-3" key={item._id}>
                          <Link href={item.href}>
                            <a className="cursor-pointer text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-greeny to-lightGreeny">
                              {item.name}
                            </a>
                          </Link>
                        </div>
                      </li>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNavBarServices links={links} />
      </div>
    </>
  );
};
