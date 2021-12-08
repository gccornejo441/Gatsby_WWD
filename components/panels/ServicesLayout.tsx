import React from "react";
import { NavBarServices } from "./NavBarServices";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const ServicesLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div>
        <NavBarServices />
        <main className="pt-16 md:pt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
