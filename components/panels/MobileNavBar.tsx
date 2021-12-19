import { Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { Fragment } from "react";
import Image from "next/image";
import WebWorksDreamsLogo from "../../public/images/WWD.2.svg";
import Link from "next/link";

export const MobileNavBar = () => {
  return (
    <Menu
      as="div"
      className="justify-center text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny fixed z-10 w-full"
    >
      <div className="flex justify-between px-4">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src={WebWorksDreamsLogo}
              width="30"
              height="30"
              alt="WebWorks Dreams Logo"
            />
            <span className="text-lg text-white ml-1">WebWorks Dreams</span>
          </div>
        </Link>
        <Menu.Button>
          <FiMenu aria-label="Menu Button" className="h-12 w-auto py-1" />
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
        <Menu.Items static>
          <div className="text-2xl bg-white text-darkestGreeny font-semibold h-screen text-md flex flex-col absolute z-10 w-full drop-shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <Link href="/">
                  <a
                    className={`${
                      active && "bg-greeny text-white"
                    } ${"py-3 px-4"}`}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/services/web-services">
                  <a
                    className={`${
                      active && "bg-greeny text-white"
                    } ${"py-3 px-4"}`}
                  >
                    Services
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact">
                  <a
                    className={`${
                      active && "bg-greeny text-white"
                    } ${"py-3 px-4"}`}
                  >
                    Contact Us
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/contact">
                  <a
                    className={`${
                      active && "bg-greeny text-white"
                    } ${"py-3 px-4"}`}
                  >
                    Get A Quote
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
