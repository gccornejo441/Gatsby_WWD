import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Smooch&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main className="pt-16 md:pt-0">{children}</main>
      <Footer />
    </div>
  );
};
