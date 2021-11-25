import React from "react";
import Link from "next/link";
import headerBlob from "../../public/images/headerBlob.svg";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full container">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="px-10">
          <div className="my-8">
            <div className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 flex flex-col">
              <span>You dream it,</span>
              <span>we build it.</span>
            </div>
            <div className="text-gray-400 font-semibold mt-2">
              The right website is waiting for you, and we are here to make it
              happen.
            </div>
          </div>
          <div className="flex flex-col md:flex-row pb-10 md:pb-0">
            <div className="text-white px-4 mb-16 md:mb-0 md:px-9 py-2 rounded-full flex items-center bg-greeny md:mr-10">
              <Link href="/">Get Started</Link>
            </div>
            <div className="text-white px-4 mb-8 md:mb-0 md:px-9 py-2 rounded-full flex items-center bg-greeny">
              <Link href="/">More Info</Link>
            </div>
          </div>
        </div>
        <div>
          <Image src={headerBlob} alt="Hero Image" height={600} width={600} />
        </div>
      </div>
      <div className="flex flex-col pt-10">
        <div className="border-2 border-green-500 flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <span className="bg-lighterGreen px-5 rounded-full text-greeny font-bold text-sm">
                FEATURES
              </span>
            </div>
            <div className="text-center text-3xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              <span>What We Offer</span>
            </div>
            <div className="text-center w-72 md:w-96">
              <span className="text-gray-400 font-semibold text-sm">
                If you're in the market for modern solutions, WebWorks Dreams
                offers the means to empower newcomers to explore the newest and
                innovative software capabilities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
