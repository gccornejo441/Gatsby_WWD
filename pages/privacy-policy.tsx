import Privacy from "../components/panels/Privacy";

const message = () => {
  return (
    <main className="bg-gradient-to-t from-gray-50 to-white">
      <div className="w-full grid justify-items-center mb-20">
        <div className="container">
          <div className="flex smooch-text">
            <span className="text-greeny font-normal text-6xl md:text-7xl">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Privacy />
      </div>
      <div className="h-96"> </div>
    </main>
  );
};

export default message;
