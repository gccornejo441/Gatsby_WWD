import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { PreLoader } from "../shapes/PreLoader";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div>
        <NavBar />
        <main className="pt-16 md:pt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
