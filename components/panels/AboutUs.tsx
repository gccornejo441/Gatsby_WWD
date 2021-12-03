import React from 'react'
import Image from 'next/image'

import Man_Working  from '../../public/images/Man_Working.svg';

export const About = () => {
    return (
      <div className="w-full md:mt-16 flex justify-center bg-gradient-to-t from-gray-100 to-white">
        <div className="container flex flex-col justify-center md:flex-row md:justify-between px-8 lg:px-32 relative z-1">
          <Image height={700} width={700} src={Man_Working} alt="Man Working" />
          <div className="my-10 md:my-0 md:pl-10 md:flex flex-wrap content-center md:pb-16">
            <div>
              <div className="md:text-left text-center smooch-text">
                <span className=" text-greeny font-normal text-6xl md:text-7xl">
                  About Us
                </span>
              </div>
              <div className="md:text-left text-center text-3xl md:text-2xl lg:text-2xl font-bold text-gray-800 py-5">
                <span>What We Offer</span>
              </div>
              <div className="md:text-left text-center md:w-96 mx-auto">
                <span className="text-gray-400 font-semibold text-sm lg:text-md">
                  If you're in the market for modern solutions, WebWorks Dreams
                  offers the means to empower newcomers to explore the newest
                  and innovative software capabilities.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
