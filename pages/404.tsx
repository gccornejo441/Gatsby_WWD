import React from "react";
import Image from "next/image";
import Error_Image from "../public/images/404_WWD.svg";
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
    <Head>
      <title>Page Not Found | WebWorks Dreams</title>
    </Head>
      <div className="flex justify-center bg-gradient-to-t from-gray-50 to-white">
        <div className="container px-10 md:px-80 py-40 text-center text-lg md:text-6xl text-greeny font-bold">
          <Image src={Error_Image} alt="404 Icon" />
          <h1>Page Not Found</h1>
        </div>
      </div>
    </>
  );
};

export default Custom404;
