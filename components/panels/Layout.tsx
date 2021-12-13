import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Head from 'next/head';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Layout: React.FC<Props> = ({ children, title = 'WebWorks Dreams' }: Props) => {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <NavBar />
        <main className="pt-16 md:pt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
