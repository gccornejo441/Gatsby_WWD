import { Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { Fragment } from "react";
import Image from "next/image";
import WebWorksDreamsLogo from "../../public/images/WWD.2.svg";

export const MobileNavBar = () => {
  return (
    <Menu
      as="div"
      className="justify-center text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny fixed z-10 w-full"
    >
      <div className="flex justify-between px-4">
        <div className="flex items-center">
          <Image src={WebWorksDreamsLogo} width="30" height="30" />
          <span className="text-lg text-white ml-1">WebWorks Dreams</span>
        </div>
        <Menu.Button>
          <FiMenu className="h-16 w-auto py-1" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items>
          <div className="bg-white text-greeny text-md flex flex-col absolute z-10 w-full drop-shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "bg-greeny text-white"
                  } ${"py-3 px-4"}`}
                  href="/"
                >
                  Home
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "bg-greeny text-white"
                  } ${"py-3 px-4"}`}
                  href="/about"
                >
                  About Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "bg-greeny text-white"
                  } ${"py-3 px-4"}`}
                  href="/services"
                >
                  Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "bg-greeny text-white"
                  } ${"py-3 px-4"}`}
                  href="/blog"
                >
                  Blog
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "bg-greeny text-white"
                  } ${"py-3 px-4"}`}
                  href="/contact"
                >
                  Contact Us
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "bg-greeny text-white"
                  } ${"py-3 px-4"}`}
                  href="/quote"
                >
                  Get A Quote
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
