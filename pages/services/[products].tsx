import * as React from "react";
import Head from "next/head";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormValues } from "../../public/scripts/types";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    firstName: yup.string().required("This is a required field"),
    lastName: yup.string().required("This is a required field"),
    email: yup.string().email().required("This is a required field"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  })
  .required();

const Checkout = () => {
  const router = useRouter();
  const { products, cost } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormValues) => {
    fetch("/api/sales", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };  

  let pageTitle: string;
  switch (products) {
    case 'starter':
      pageTitle = 'Starter';
      break;
    case 'small business':
      pageTitle = "Small Business";
      break;
    case 'executive':
      pageTitle = "Executive";
      break;
  }

  return (
    <div className="my-24 bg-gradient-to-t from-gray-50 to-white pb-10">
      <Head>
        <title>{pageTitle!} | WebWorks Dreams</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-gray-200 bg-gray-50 flex flex-col md:flex md:flex-row max-w-screen-xl mx-auto rounded-md">
          <div className="md:w-1/2 m-7">
            {/****************************************** LEFT COLUMN ******************************************/}
            <div className="flex flex-col md:flex md:flex-col">
              <span>
                <h2 className="font-medium text-lg text-gray-800">
                  Contact information
                </h2>
              </span>
              <div>
                <div className="py-3 pt-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    <span className="text-red-600">*&nbsp;</span>
                    Email address
                  </label>
                  <input
                    className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                    {...register("email")}
                  />
                  <p className="text-xs text-red-600">
                    {errors.email?.message}
                  </p>
                </div>
                <hr className="my-5 " />
                <span>
                  <h2 className="font-medium text-lg text-gray-800 mb-5">
                    Shipping information
                  </h2>
                </span>
                <div className="pb-5 flex flex-col md:grid md:grid-rows-2 lg:grid-rows-1 md:grid-flow-col md:gap-4">
                  <div className="flex flex-col w-auto">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      <span className="text-red-600">*&nbsp;</span>
                      First name
                    </label>
                    <input
                      className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                      {...register("firstName")}
                    />
                    <p className="text-xs text-red-600">
                      {errors.firstName?.message}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      <span className="text-red-600">*&nbsp;</span>
                      Last name
                    </label>
                    <input
                      className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                      {...register("lastName")}
                    />
                    <p className="text-xs text-red-600">
                      {errors.lastName?.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-5">
                <label
                  htmlFor="company"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Company
                </label>
                <input
                  className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                  {...register("company")}
                />
              </div>
              <div className="pb-5">
                <label
                  htmlFor="address"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Address
                </label>
                <input
                  className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                  {...register("address")}
                />
              </div>
              <div className="pb-5">
                <label
                  htmlFor="property_type"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Apartment, suite, etc.
                </label>
                <input
                  className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                  {...register("property_type")}
                />
              </div>
              <div className="pb-5 flex flex-col md:grid md:grid-rows-1 md:grid-flow-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    City
                  </label>
                  <input
                    className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                    {...register("city")}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="zip"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Zip code
                  </label>
                  <input
                    className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                    {...register("zip")}
                  />
                </div>
              </div>

              <div className="pb-5">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                  {...register("phone")}
                />
                <p className="text-xs text-red-600">{errors.phone?.message}</p>
              </div>
            </div>
              <Link href="/">
                <a className="text-red-500 text-sm font-light">Back</a>
              </Link>
          </div>
          <div className="md:w-3/5">
            <div>
              {/****************************************** RIGHT COLUMN ******************************************/}
              <div className="p-7 md:p-3 lg:p-7">
                <span>
                  <h2 className="font-medium text-lg text-gray-800 mb-5">
                    Order summary
                  </h2>
                </span>
                <div className="rounded-md bg-white border border-gray-200 h-full">
                  <div className="uppercase text-3xl text-darkestGreeny font-bold p-5">
                    <span>{products}</span>
                  </div>
                  <hr />
                  <div className="px-5 pt-5 font-medium text-lg text-gray-800 mb-5 flex justify-between">
                    <span>Subtotal</span>
                    <span>{"$" + cost}</span>
                  </div>
                  <div className="px-5 font-medium text-lg text-gray-800 mb-5 flex justify-between">
                    <span>Estimated Sales Tax</span>
                    <span>---</span>
                  </div>
                  <hr />
                  <div className="p-5 font-semibold text-xl text-gray-800 mb-5 flex justify-between">
                    <span>Estimated Sales Tax</span>
                    <span>{"$" + cost}</span>
                  </div>
                  <div className="border-t p-5 flex justify-center">
                    <input
                      type="submit"
                      className="bg-darkestGreeny hover:bg-greeny text-gray-100 w-full py-3 rounded-md tracking-wide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
