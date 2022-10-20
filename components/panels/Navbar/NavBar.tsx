import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdEmail, MdPhone } from "react-icons/md";
import WebWorksDreamsLogo from "../../../public/images/WWD.2.svg";
import { MobileNavBar } from "./MobileNavBar";
import Logo from "../NavLogo";
import { Menu, Transition } from '@headlessui/react';


export const NavBar = ({ links }) => {
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
              <li className="mt-3">
                <div
                  className="mr-8 md:mt-2 lg:mt-3 hover:text-darkGreeny flex items-center"
                >
                  <Link href="/">Home</Link>
                </div>
              </li>

              <li className="mt-3">
                <Menu>
                  <Menu.Button className="mr-8 md:mt-2 lg:mt-3 hover:text-darkGreeny flex items-center">Products</Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {links.navbar.links.map((link) => {
                        return (
                          <div className="p-1" key={link._id}>
                            {link._id !== 1 && link._id !== 7 ? (
                              <Menu.Item
                                as="a"
                                key={link._id}
                                href={link.href}
                                className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                              >
                                {({ active }) => (
                                  <button
                                    className={`${active ? 'bg-greeny text-white' : 'text-darkGreeny'
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    {link.name}
                                  </button>
                                )}
                              </Menu.Item>
                            ) : <></>}
                          </div>
                        )
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li>
                <div
                  className="mr-8 md:mt-2 lg:mt-3 hover:text-darkGreeny flex items-center"
                >
                  <Link href="/contact">
                    <a className="cursor-pointer text-white px-3 py-2 lg:px-6 lg:py-3 rounded-full bg-gradient-to-r from-greeny to-lightGreeny">
                      Get A Quote
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNavBar links={links} />
      </div>
    </>
  );
};
