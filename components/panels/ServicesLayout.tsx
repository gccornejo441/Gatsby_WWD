import React from "react";
import { NavBarServices } from "./Navbar/NavBarServices";
import { Footer } from "./Footer";
import { ClientOnly } from './ClientOnly'

type Props = {
  children: React.ReactNode;
  links: any;
};

export const ServicesLayout: React.FC<Props> = ({
  children,
  links,
}: Props) => {
  return (
    <>
      <ClientOnly>
        <div className="selection:bg-darkestGreeny selection:text-lighterGreen">
          <NavBarServices links={links} />
          <main className="pt-16 md:pt-0">{children}</main>
          <Footer />
        </div>
      </ClientOnly>
    </>
  );
};
