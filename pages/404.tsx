import React from 'react';
import Image from "next/image";
import Error_Image from "../public/images/404_WWD.svg"

const Custom404 = () => {
    return (
      <div className="flex justify-center bg-gradient-to-t from-gray-50 to-white">
        <div className="container px-10 md:px-80 py-40 text-center text-lg md:text-6xl text-greeny font-bold">
          <Image 
          src={Error_Image} 
          alt="404 Icon" 
          />
          <span>Page Not Found</span>
        </div>
      </div>
    );
}

export default Custom404;