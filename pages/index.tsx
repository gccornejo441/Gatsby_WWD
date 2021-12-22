import * as React from "react";
import { Hero } from "../components/panels/Hero";
import { About } from "../components/panels/AboutUs";
import { Shapes } from "../components/shapes/Shapes";

interface Props {
}

const Home: React.FC<Props> = () => {
  return (
    <>
      <main className="flex flex-col bg-gradient-to-t from-gray-50 to-white">
        <Shapes />
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
