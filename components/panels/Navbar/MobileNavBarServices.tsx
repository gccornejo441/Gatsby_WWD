import { Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { Fragment, useRef } from "react";
import Image from "next/image";
import WebWorksDreamsLogo from "../../../public/images/WebWorks-Dreams-Logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { MyLink } from "./navscripts";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18.03921568627451%)"
    strokeLinecap="square"
    {...props}
  />
);

export const MobileNavBarServices = ({ links }) => {
  const containerRef = useRef(null);
  return (
    <Menu
      as="div"
      className="justify-center text-white text-xs bg-gradient-to-r from-greeny to-lightGreeny fixed z-10 w-full"
    >
      {({ open }) => (
        <>
          <div className="flex justify-between px-4">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer" style={{transform: "translateY(14px)"}}>
                <Image
                  src={WebWorksDreamsLogo}
                  width="30"
                  height="30"
                  alt="WebWorks Dreams Logo"
                />
                <span className="text-lg text-gray-800 ml-1">
                  WebWorks Dreams
                </span>
              </div>
            </Link>
            <Menu.Button>
              <motion.div animate={open ? "open" : "closed"} ref={containerRef}>
                <button
                  className="p-3 my-2 rounded-full bg-teal-100"
                  aria-label="Menu Button"
                >
                  <svg width="19" height="19" viewBox="0 0 19 19">
                    <Path
                      variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                      }}
                    />
                    <Path
                      d="M 2 9.423 L 20 9.423"
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                      }}
                      transition={{ duration: 0.1 }}
                    />
                    <Path
                      variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                      }}
                    />
                  </svg>
                </button>
              </motion.div>
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
              <div className="text-lg bg-white text-darkestGreeny font-semibold h-auto text-md flex flex-col absolute z-10 w-full drop-shadow-2xl">
                <Menu.Item>
                  <MyLink
                    className={`${"py-3 px-4 border-b-2 border-gray-100"}`}
                    href="/services/web-services"
                  >
                    Services
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    className={`${"py-3 px-4 border-b-2 border-gray-100"}`}
                    href="/mobile-app-development"
                  >
                    Mobile App
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    className={`${"py-3 px-4 border-b-2 border-gray-100"}`}
                    href="/portfolio"
                  >
                    Portfolio
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    className={`${"py-3 px-4 border-b-2 border-gray-100"}`}
                    href="/blog"
                  >
                    Blog
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    className={`${"py-3 px-4 border-b-2 border-gray-100"}`}
                    href="/pricing"
                  >
                    Pricing
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink
                    className={`${"py-3 px-4 border-b-2 border-gray-100"}`}
                    href="/contact"
                  >
                    Get A Quote
                  </MyLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
