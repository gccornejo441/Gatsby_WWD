import Privacy from "../components/panels/Privacy";
import Head from "next/head"

const message = () => {
  return (
    <main className="bg-gradient-to-t from-gray-50 to-white">
      <Head>
        <title>Privacy Policy | WebWorks Dreams</title>
      </Head>
      <div className="w-full grid justify-items-center my-20">
        <div className="container flex justify-center text-cnter">
          <div className="flex smooch-text">
            <span className="text-greeny font-normal text-6xl md:text-7xl">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-20">
        <Privacy />
      </div>
    </main>
  );
};

export default message;
