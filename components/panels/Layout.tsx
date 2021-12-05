import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { PreLoader } from "../shapes/PreLoader";

type Props = {
  children: React.ReactNode;
};

interface PageProps {
  load: boolean;
}

export const Layout: React.FC<Props & PageProps> = ({ children }: Props) => {
  const [onLoad, setLoad] = React.useState<PageProps>({ load: true });
  React.useEffect(() => {
    window.addEventListener("load", (evt) => {
      if (evt.type == "load") {
        setLoad({
          ...onLoad,
          load: false,
        });
      }
    });
  }, []);

  return (
    <>
      {onLoad.load ? (
        <div className="h-screen flex justify-center items-center smooch-text">
          <PreLoader />
          <span className="text-greeny font-normal text-5xl md:text-7xl pl-28">
            Loading
            <span className="load_dot">.</span>
          </span>
        </div>
      ) : (
        <>
          <div>
            <NavBar />
            <main className="pt-16 md:pt-0">{children}</main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};
