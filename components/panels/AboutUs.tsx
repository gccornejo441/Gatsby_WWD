import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player';


import Man_Working from '../../public/images/Man_Working.png';

export const About = () => {
  return (
    <div className="w-full flex justify-center my-[3rem] md:my-[10rem]">
      <div className="mx-5 md:mx-0 first:container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:text-left">
          <h3 className="text-center md:text-left text-lg md:text-xl lg:text-5xl font-bold text-gray-800 py-4">
            Professional nonprofit websites. 
          </h3>
          <p className="text-center md:text-left text-slate-700  font-light text-base lg:text-lg">
            The right website makes all the difference. Start from dreaming your dream website to interacting with your powerful website.
          </p>
        </div>
        <div>
          <div className="pt-[56.25%] relative">
            <ReactPlayer
              className="absolute top-0 left-0"
              width='100%'
              height='100%'
              url="https://youtu.be/GQWb7KgYkW8" />
          </div>
        </div>
      </div>
    </div>
  );
}

//          <Image height={700} width={700} src={Man_Working} alt="Man Working" />