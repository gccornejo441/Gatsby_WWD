import React from "react";
import { NavBar } from "./Navbar/NavBar";
import { Footer } from "./Footer";
import {ClientOnly} from './ClientOnly'

type Props = {
  children: React.ReactNode;
  links: any;
};

export const Layout: React.FC<Props> = ({
  children,
  links,
}: Props) => {
  
  return (
    <>
      <ClientOnly>
        <div className="selection:bg-darkestGreeny selection:text-lighterGreen">
          <NavBar links={links} />
          <main className="pt-16 md:pt-0">{children}</main>
          <Footer />
        </div>
      </ClientOnly>
    </>
  );
};
