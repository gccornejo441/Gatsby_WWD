import React from "react";
import { NavBar } from "./NavBar";

type Props = {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};
