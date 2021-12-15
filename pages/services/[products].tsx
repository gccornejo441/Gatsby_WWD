import * as React from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  address: string;
  property_type: string;
  city: string;
  zip: string;
  phone: string;
};

const Checkout = () => {
  const router = useRouter();
  const { products, cost } = router.query;
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="my-24">
      <div className="border border-gray-200 bg-gray-50 flex flex-col md:flex md:flex-row max-w-screen-xl mx-auto rounded-md">
        <div className="md:w-1/2 m-7">
          {/****************************************** LEFT COLUMN ******************************************/}
          <div className="flex flex-col md:flex md:flex-col">
            <span>
              <h2 className="font-medium text-lg text-gray-800">
                Contact information
              </h2>
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="py-3 pt-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Email address
                  </label>
                  <input
                    className="p-1 w-full mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                    {...register("email")}
                  />
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
                      First name
                    </label>
                    <input
                      className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                      {...register("firstName")}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Last name
                    </label>
                    <input
                      className="p-1 mt-1 focus:ring-gray-400 focus:border-gray-400 block border border-gray-300 rounded-md"
                      {...register("lastName")}
                    />
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
              </div>
            </form>
          </div>
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
                  <button className="bg-darkestGreeny hover:bg-greeny text-gray-100 w-full py-3 rounded-md tracking-wide">
                    Confirm order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
