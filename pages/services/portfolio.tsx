import React from "react";
import Image from "next/image";

import Jobbox from "../../public/images/jobbme.png";
import Homie from "../../public/images/homie.png";

const products = [
  {
    id: 1,
    name: "Jobbox",
    href: "#",
    imageSrc: Jobbox,
    imageAlt: "Jobbox",
    description: "A free professional resume builder.",
  },
];

const Portfolio = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-gray-50 to-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto px-3 flex justify-center flex-col text-center md:text-left pb-12 lg:px-28 xl:px-48">
            <h1 className="text-gray-800 font-bold text-3xl md:text-7xl">
              Checkout Some Of Our Amazing Case Studies
            </h1>
            <h2 className="text-gray-800 font-normal pt-10 text-xl md:text-3xl">
              Frame your dream website here
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative lg:px-28 xl:px-48"
              >
                <div className="w-auto h-auto bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="responsive"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
