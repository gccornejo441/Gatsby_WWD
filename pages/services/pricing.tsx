import React from "react";
import Image from "next/image";
import Link from "next/link";

import { tableInfo } from "../../public/scripts/tableData";
import TableHead from "../../components/table/TableHead";
import TableBody from "../../components/table/TableBody";
import Balloons from "../../public/images/Balloons.svg";

const Pricing = () => {
    
    let headerInfo = tableInfo[0];
    let bodyInfo = tableInfo[1];

  return (
    <div>
      <main>
        <div className="flex justify-center px-2 sm:px-5 md:px-10">
          <div className="container md:text-center block md:flex flex-col my-8 xl:px-40">
            <div className="container">
              <h1 className="uppercase flex justify-center md:justify-start text-2xl md:text-4xl font-bold text-gray-800">
                Pricing
              </h1>
              <div className="md:h-1 md:w-24 md:bg-greeny"></div>
            </div>
            <div className="w-full inline-flex justify-center">
              <div className="text-center w-full">
                <p className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-darkestGreeny font-bold">
                  Purchasing made easy
                </p>
                <p className="sm:text-2xl md:text-3xl lg:text-3xl text-darkestGreeny mb-12">
                  Our pricing plans have been designed to meet your needs.
                </p>
                <section className="text-left">
                  <table className="table-auto border-darkestGreeny">
                    <thead className="border-b border-darkestGreeny">
                      <tr>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">Packages</th>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">Starter</th>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">Premium</th>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">Executive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="md:pl-5 text-sm sm:text-lg">
                          <div>{headerInfo.price?.pricing}</div>
                        </td>
                        <td className="text-darkestGreeny text-xs sm:text-lg">
                          <div className="flex-col">
                            <div className="md:py-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                              {headerInfo.price?.price1}
                            </div>
                            <div className="text-darkestGreeny pr-5 py-5 text-xs sm:text-sm md:text-md lg:text-md">
                              {headerInfo.price?.disc1}
                            </div>
                          </div>
                        </td>
                        <td className="text-darkestGreeny text-xs sm:text-lg">
                          <div className="flex-col">
                            <div className="md:py-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                              {headerInfo.price?.price2}
                            </div>
                            <div className="text-darkestGreeny pr-5 py-5 text-xs sm:text-sm md:text-md lg:text-md">
                              {headerInfo.price?.disc2}
                            </div>
                          </div>
                        </td>
                        <td className="text-darkestGreeny text-xs sm:text-lg">
                          <div className="flex-col">
                            <div className="md:py-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                              {headerInfo.price?.price3}
                            </div>
                            <div className="text-darkestGreeny pr-5 py-5 text-xs sm:text-sm md:text-md lg:text-md">
                              {headerInfo.price?.disc3}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> </td>
                        <td>
                          <form action="./package/starter">
                            <button
                              type="submit"
                              className="text-xs sm:text-sm md:text-xl bg-darkestGreeny text-white hover:bg-lightGreeny rounded-md py-1 mb-5 w-3/4"
                            >
                              Starter
                            </button>
                          </form>
                        </td>
                        <td>
                          <form action="./package/business">
                            <button
                              type="submit"
                              className="text-xs sm:text-sm md:text-xl bg-darkestGreeny text-white hover:bg-lightGreeny rounded-md py-1 mb-5 w-3/4"
                            >
                              Small Business
                            </button>
                          </form>
                        </td>
                        <td>
                          <form action="./package/executive">
                            <button
                              type="submit"
                              className="text-xs sm:text-sm md:text-xl bg-darkestGreeny text-white hover:bg-lightGreeny rounded-md py-1 mb-5 w-3/4"
                            >
                              Executive
                            </button>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                    <TableHead header={headerInfo.features} />
                    <TableBody
                      col1={headerInfo.packages}
                      col2={bodyInfo.pages1}
                      col3={bodyInfo.pages2}
                      col4={bodyInfo.pages3}
                    />
                    <TableBody
                      col1={headerInfo.mobile}
                      col2={bodyInfo.check}
                      col3={bodyInfo.check}
                      col4={bodyInfo.check}
                    />
                    <TableHead header={headerInfo.services} />
                    <TableBody
                      col1={headerInfo.mocksites}
                      col2={bodyInfo.dash}
                      col3={bodyInfo.check}
                      col4={bodyInfo.check}
                    />
                    <TableBody
                      col1={headerInfo.hosting}
                      col2={bodyInfo.check}
                      col3={bodyInfo.check}
                      col4={bodyInfo.check}
                    />
                    <TableBody
                      col1={headerInfo.cert}
                      col2={bodyInfo.check}
                      col3={bodyInfo.check}
                      col4={bodyInfo.check}
                    />
                    <TableBody
                      col1={headerInfo.SEO}
                      col2={bodyInfo.dash}
                      col3={bodyInfo.check}
                      col4={bodyInfo.check}
                    />
                    <TableBody
                      col1={headerInfo.revisions}
                      col2={bodyInfo.dash}
                      col3={bodyInfo.check}
                      col4={bodyInfo.check}
                    />
                  </table>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center lg:text-left w-full md:mt-12">
          <div className="md:container flex flex-col-reverse md:flex-row md:justify-between lg:px-36">
            <div className="flex justify-center">
              <Image
                src={Balloons}
                alt="Air Balloon Animation"
                height={400}
                width={500}
              />
            </div>
            <div>
              <div className="md:text-left flex justify-center my-auto">
                <div className="w-full">
                  <div className="container mx-auto flex justify-center md:my-32 my-12">
                    <Link href="/contact">
                      <a
                        href="../message"
                        className="text-darkestGreeny flex hover:underline"
                      >
                        <div className="text-darkestGreeny px-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                          Don't know where to begin?
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:h-10 md:w-10 lg:h-10 lg:w-10 h-6 w-6 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;