import React from "react";
import { NavBar } from "./Navbar/NavBar";
import { Footer } from "./Footer";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title: string;
  links: any;
};

export const Layout: React.FC<Props> = ({
  children,
  title = "WebWorks Dreams",
  links,
}: Props) => {
  
  return (
    <>
      <div className="selection:bg-darkestGreeny selection:text-lighterGreen">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="titla, meta, nextjs" />
          <meta name="author" content="Gabriel Cornejo" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
        </Head>
        <NavBar links={links} />
        <main className="pt-16 md:pt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
