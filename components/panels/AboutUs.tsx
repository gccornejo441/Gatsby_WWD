import React from 'react'
import ReactPlayer from 'react-player';

export const About = () => {
  return (
    <div className="w-full flex justify-center my-[3rem] md:my-[10rem]">
      <div className="mx-5 md:mx-0 first:container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:text-left">
          <h3 className="text-center md:text-left text-lg md:text-xl lg:text-5xl font-bold text-gray-800 py-4">
           CRAFTING WEBSITES FOR EXCELLENCE
          </h3>
          <p className="text-center md:text-left text-slate-700  font-light text-base lg:text-lg">
           A well-crafted website can redefine your business. From conceptualizing your dream site to engaging with your impactful online presence.
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