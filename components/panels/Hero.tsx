import React from "react";
import Link from "next/link";
import headerBlob from "../../public/images/headerBlob.svg";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="container flex justify-between">
      <div>
        <div className="my-8">
          <div className="text-6xl font-bold text-gray-800 flex flex-col">
            <span>You dream it,</span>
            <span>we build it.</span>
          </div>
          <div className="text-gray-400 font-semibold mt-2">
            The right website is waiting for you, and we are here to make it
            happen.
          </div>
        </div>
        <div className="flex">
          <div className="text-white px-9 py-2 rounded-full flex items-center bg-greeny mr-10">
            <Link href="/">Get Started</Link>
          </div>
          <div className="text-white px-9 py-2 rounded-full flex items-center bg-greeny">
            <Link href="/">More Info</Link>
          </div>
        </div>
      </div>
      <div>
        <Image src={headerBlob} alt="Hero Image" height={600} width={600} />
      </div>
    </div>
  );
};
