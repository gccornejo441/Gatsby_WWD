import Image from "next/image";
import Link from "next/link";

import DesignImage from "../../public/images/Design-team.svg";
import WebDesignOffice from "../../public/images/web-design-office.jpg";
import WebDesign from "../../public/images/web-design.jpg";

const webServices = () => {
  return (
    <div>
      <main className="container sm:px-14 md:px-10 lg:px-10 xl:px-32 w-full mx-auto">
        <div className="w-full grid justify-items-center my-14 md:mb-20 text-center md:text-left">
          <h1 className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-gray-800 font-bold">
            Get All Your Web Services Done Better
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="xl:mx-12 w-1/2 mx-auto md:w-3/4 animate-fade-in-left">
              <Image
                alt="Web Design Office"
                src={WebDesignOffice}
                width={500}
                height={700}
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="text-center md:text-left w-3/4 mx-auto xl:mx-12 md:w-full text-sm md:text-xl lg:text-2xl md:ml-12 leading-10 font-light">
              <p>
                <span className="text-gray-800 font-bold">WebWorks Dreams</span>{" "}
                has captured modern tech tools to shape and engineer every
                clients vision into a reality. When the need arises, WebWorks
                Dreams is disposed to consult any of our clients needs. With our
                competitive pricing, we are better able to focus our attention
                on our clients needs.
              </p>
            </div>
          </div>
          <div className="w-full flex my-12 md:hidden">
            <div className="w-2 h-2 mx-auto bg-greeny"></div>
            <div className="w-2 h-2 mx-auto bg-greeny"></div>
            <div className="w-2 h-2 mx-auto bg-greeny"></div>
          </div>
          <div className="flex flex-col md:flex-row md:mt-32">
            <div className="text-center md:text-left w-3/4 mx-auto xl:mx-12 md:w-full text-sm md:text-xl lg:text-2xl leading-10 font-light">
              <div>
                <h3 className="text-gray-800 font-bold">
                  Why Professional Designs Matter
                </h3>
              </div>
              <div>
                <p>
                  A website&apos;s design has many uses which extend beyond
                  aesthetics and appearances. What does this exactly mean? This
                  means that our team places a strong emphasis on the visual
                  experience of the entire website, from the Landing page to the
                  Frequently Asked Questions page. Here at WebWorks Dreams, we
                  take design beyond looks to build websites that fit our
                  clients&apos; needs.{" "}
                </p>
              </div>
            </div>
            <div className="p-10 md:pl-10">
              <Image src={DesignImage} alt="Design Team" />
            </div>
          </div>
        </div>
      </main>
      <div className="w-full md:mt-12">
        <div className="w-full h-full bg-scale-background">
          <div className="container xs:px-5 sm:px-14 md:px-0 xl:px-32 w-full mx-auto">
            <div className="md:grid grid-cols-2 gap-4">
              <div>
                <div className="px-10 pt-5 md:pt-0 md:my-8 lg:my-6 xl:my-8">
                  <Image
                    src={WebDesign}
                    alt="Web Design Layout"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div>
                <div className="px-10 py-5 md:mt-0 lg:mt-5 xl:mt-4 text-center md:text-left">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800">
                    Web Design & Web Development
                  </h3>
                  <div className="text-sm sm:text-sm md:text-md lg:text-xl leading-6 lg:leading-10 text-gray-800 font-light">
                    We are fully committed to creating websites that go beyond
                    looks. In addition, we aim to build websites that generate
                    leads and growth for our customers. As a result, our team of
                    web designers practice an active approach when determining
                    which design layouts are a precise fit for our client&apos;s
                    end goals. This is to assure nothing is left on the table
                    and clients are satisfied with the results in action.
                    Chiefly, our expertise are dependent on modern tools such as
                    Shopify, WordPress, and WooCommerce.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-gradient-to-t from-gray-100 to-white">
          <div className="my-20 text-center py-5">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 pb-10">
              Contact us to schedule a consulting.
            </h3>
            <Link href="../contact">
              <a className="text-lg md:text-xl bg-darkestGreeny hover:bg-greeny text-blue-50 font-semibold p-3 md:p-4 rounded-md focus:outline-none focus:shadow-outline">
                Get Started!
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default webServices;
