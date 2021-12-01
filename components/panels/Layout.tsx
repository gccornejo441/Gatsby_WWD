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
      <main className="pt-16 md:pt-0">{children}</main>
      <Footer />
    </div>
  );
};
