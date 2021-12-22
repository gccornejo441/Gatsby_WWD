import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Layout: React.FC<Props> = ({
  children,
  title = "WebWorks Dreams",
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
          <meta name="robots" content="all" />
          <meta
            property="og:title"
            content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
          />
          <meta
            name="description"
            content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
          />
          <meta
            name="keywords"
            content="Web Development Company, Custom Web Development Company, Web Development Service, Web Design Services, Nextjs Web Development, Web Development Services, Best Web Developers, Web Development Agency, Web Design, Custom Web Development, Best Web Development, Web Development USA, Web Development Company in the USA, Web Development Services USA, WordPress Website"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.webworksdreams.com/sharecard.jpg"
          />
          <meta property="og:url" content="https://www.webworksdreams.com/" />
          <meta
            name="twitter:title"
            content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
          />
          <meta
            name="twitter:image"
            content="https://www.webworksdreams.com/sharecard.jpg"
          />
          <title>{title}</title>
        </Head>
        <NavBar />
        <main className="pt-16 md:pt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
