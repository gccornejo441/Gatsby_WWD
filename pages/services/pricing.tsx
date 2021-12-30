import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { tableInfo } from "../../public/scripts/tableData";
import TableHead from "../../components/table/TableHead";
import TableBody from "../../components/table/TableBody";
import Balloons from "../../public/images/Balloons.svg";

const TITLE: string = "Website Design Price | WebWorks Dreams";

const Pricing = () => {
  let headerInfo = tableInfo[0];
  let bodyInfo = tableInfo[1];

  return (
    <>
      <Head>
        <meta name="robots" content="all" />

        {/* OG */}
        <meta property="fb:app_id" content="254907099748012" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webworksdreams.com/" />
        <meta property="og:title" content={TITLE} />
        <meta
          property="og:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
        />
        <meta property="og:image:alt" content="A web developer hard at work" />
        <meta
          property="og:description"
          content="Find the right plan for your website design needs. If you only need one site, pay for hosting, or go with a paid plan."
        />
        <meta
          name="description"
          content="Find the right plan for your website design needs. If you only need one site, pay for hosting, or go with a paid plan."
        />
        <meta property="og:site_name" content="WebWorks Dreams" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WebWorksDreams" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Find the right plan for your website design needs. If you only need one site, pay for hosting, or go with a paid plan."
        />
        <meta
          name="twitter:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
        />
        <meta name="twitter:image:alt" content="A web developer hard at work" />
        <title>{TITLE}</title>
      </Head>
      <main className="bg-gradient-to-t from-gray-50 to-white">
        <div className="flex justify-center px-2 sm:px-5 md:px-10">
          <div className="container md:text-center block md:flex flex-col my-8 xl:px-40">
            <div className="w-full inline-flex justify-center">
              <div className="text-center w-full">
                <h1 className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-gray-800 font-bold">
                  Purchasing made easy
                </h1>
                <h2 className="sm:text-2xl md:text-3xl lg:text-3xl text-gray-800 mb-12">
                  Our pricing plans have been designed to meet your needs.
                </h2>
                <section className="text-left">
                  <table className="table-auto border-darkestGreeny">
                    <thead className="border-b border-darkestGreeny">
                      <tr>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">
                          Packages
                        </th>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">
                          Starter
                        </th>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">
                          Premium
                        </th>
                        <th className="w-1/4 text-xs sm:text-lg text-gray-700">
                          Executive
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="md:pl-5 text-sm sm:text-lg">
                          <div>{headerInfo.price?.pricing}</div>
                        </td>
                        <td className="text-darkestGreeny text-xs sm:text-lg align-top">
                          <div>
                            <div className="md:py-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                              {headerInfo.price?.price1}
                            </div>
                            <div className="text-darkestGreeny md:pr-5 py-5 text-xs sm:text-sm md:text-md lg:text-md">
                              {headerInfo.price?.disc1}
                            </div>
                          </div>
                        </td>
                        <td className="text-darkestGreeny text-xs sm:text-lg align-top">
                          <div>
                            <div className="md:py-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                              {headerInfo.price?.price2}
                            </div>
                            <div className="text-darkestGreeny md:pr-5 py-5 text-xs sm:text-sm md:text-md lg:text-md">
                              {headerInfo.price?.disc2}
                            </div>
                          </div>
                        </td>
                        <td className="text-darkestGreeny text-xs sm:text-lg align-top">
                          <div>
                            <div className="md:py-5 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                              {headerInfo.price?.price3}
                            </div>
                            <div className="text-darkestGreeny md:pr-5 py-5 text-xs sm:text-sm md:text-md lg:text-md">
                              {headerInfo.price?.disc3}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td> </td>
                        <td className="px-1 md:px-2">
                          <Link href="/services/starter?cost=150" passHref>
                            <div className="cursor-pointer text-xs sm:text-sm md:text-xl bg-darkestGreeny text-white hover:bg-lightGreeny rounded-md py-1 mb-5 w-full text-center">
                              Starter
                            </div>
                          </Link>
                        </td>
                        <td className="px-1 md:px-2">
                          <Link
                            href="/services/small%20business?cost=500"
                            passHref
                          >
                            <div className="cursor-pointer text-xs sm:text-sm md:text-xl bg-darkestGreeny text-white hover:bg-lightGreeny rounded-md py-1 mb-5 w-full text-center">
                              Small Business
                            </div>
                          </Link>
                        </td>
                        <td className="px-1 md:px-2">
                          <Link href="/services/executive?cost=1000" passHref>
                            <div className="cursor-pointer text-xs sm:text-sm md:text-xl bg-darkestGreeny text-white hover:bg-lightGreeny rounded-md py-1 mb-5 w-full text-center">
                              Executive
                            </div>
                          </Link>
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
                        href="../contact"
                        className="text-darkestGreeny flex hover:underline"
                      >
                        <div className="text-darkestGreeny px-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                          Don&apos;t know where to begin?
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="md:h-10 md:w-10 lg:h-10 lg:w-10 h-6 w-6 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
    </>
  );
};

export default Pricing;
