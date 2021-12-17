import Terms from "../components/panels/Terms";
import Head from 'next/head';

const message = () => {
  return (
    <main className="bg-gradient-to-t from-gray-50 to-white">
      <Head>
        <title>Terms of Service | WebWorks Dreams</title>
      </Head>
      <div className="w-full grid justify-items-center my-20">
        <div className="container flex justify-center text-center">
          <div className="flex smooch-text">
            <span className="text-greeny font-normal text-6xl md:text-7xl">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-20">
        <Terms />
      </div>
    </main>
  );
};

export default message;
