import React from "react";
import Head from "next/head";

import { NavBarServices } from "./Navbar/NavBarServices";
import { Footer } from "./Footer";
import { ClientOnly } from './ClientOnly'

type Props = {
  children: React.ReactNode;
  title: string;
  links: any;
};

export const ServicesLayout: React.FC<Props> = ({
  children,
  title = "WebWorks Dreams",
  links,
}: Props) => {
  return (
    <>
      <ClientOnly>
        <div className="selection:bg-darkestGreeny selection:text-lighterGreen">
          <Head>
            <title>{title}</title>
          </Head>
          <NavBarServices links={links} />
          <main className="pt-16 md:pt-0">{children}</main>
          <Footer />
        </div>
      </ClientOnly>
    </>
  );
};
