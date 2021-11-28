import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
