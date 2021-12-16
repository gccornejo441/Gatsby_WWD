import React from 'react'
import Image from "next/image";

import Contacting from '../public/images/contacting.jpg';

const contact = () => {
    return (
      <div>
        <div className="flex justify-center px-5 bg-gradient-to-t from-gray-50 to-white">
          <div className="container md:text-left block text-center md:flex py-12">
            <div className="container flex flex-col justify-center xl:px-40">
              <h1 className="text-gray-800 text-4xl sm:text-5xl md:text-5xl font-bold lg:text-5xl xl:text-5xl text-center">
                Contact Hub
              </h1>
              <p className="text-xl md:text-2xl text-black font-light text-center">
                Need additional information? Complete the form below and
                we&apos;ll reach out soon.
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="hidden md:block col-span-2 md:p-5 mt-28 xl:mt-12">
                  <Image src={Contacting} alt="Office hall" />
                </div>
                <div className="rounded-md col-span-4 md:col-span-2 lg:p-10">
                  <div className="mt-8">
                    <form action="/api/contact" method="POST">
                      <div className="grid grid-cols-1 gap-6">
                        <label htmlFor="FirstName" className="block text-left">
                          <span className="pr-1 text-red-600">*</span>
                          <span className="text-greeny text-lg md:text-lg">
                            First Name
                          </span>
                          <input
                            type="text"
                            id="FirstName"
                            name="FirstName"
                            maxLength={255}
                            className="border border-lightGreeny focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1 block w-full text-black font-semibold rounded-md p-2 "
                            required
                          />
                        </label>
                        <label htmlFor="name" className="block text-left">
                          <span className="pr-1 text-red-600">*</span>
                          <span className="text-greeny text-lg md:text-lg">
                            Last Name
                          </span>
                          <input
                            type="text"
                            id="LastName"
                            name="LastName"
                            maxLength={255}
                            className="border border-lightGreeny focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1 block w-full text-black font-semibold rounded-md p-2 "
                            required
                          />
                        </label>
                        <label htmlFor="Email" className="block text-left">
                          <span className="pr-1 text-red-600">*</span>
                          <span className="text-greeny text-lg md:text-lg">
                            Email Address
                          </span>
                          <input
                            id="Email"
                            type="email"
                            name="Email"
                            maxLength={255}
                            className="border border-lightGreeny focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1 block w-full text-black font-semibold rounded-md p-2 "
                            required
                          />
                        </label>

                        <label htmlFor="Details" className="block text-left ">
                          <span className="pr-1 text-red-600">*</span>
                          <span className="text-greeny text-lg md:text-lg">
                            Details
                          </span>
                          <textarea
                            required
                            id="Details"
                            name="Details"
                            typeof="text"
                            className="border border-lightGreeny focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-1 block w-full text-black font-semibold rounded-md p-2 "
                            rows={5}
                          ></textarea>
                        </label>
                        <div className="mb-6 text-center">
                          <button
                            type="submit"
                            className="px-12 py-4 text-white bg-greeny hover:bg-darkGreeny rounded-md focus:bg-lightGreeny focus:outline-none text-1xl sm:text-2xl md:text-2xl cursor-pointer"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default contact;