import React from 'react'
import Image from 'next/image'

import  Man_Working  from '../../public/images/Man_Working.svg';

export const About = () => {
    return (
      <div className="w-full container mt-16 flex px-36">
        <Image height={500} width={500} src={Man_Working} alt="Man Working" />
        <div className="border-2 border-red-400">
          <div className="text-center text-3xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            <span>What We Offer</span>
          </div>
          <div className="text-center w-72 md:w-96 mx-auto">
            <span className="text-gray-400 font-semibold text-sm">
              If you're in the market for modern solutions, WebWorks Dreams
              offers the means to empower newcomers to explore the newest and
              innovative software capabilities.
            </span>
          </div>
        </div>
      </div>
    );
}
