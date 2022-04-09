import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import React from "react";
import { FB_PIXEL_ID } from '../lib/fpixel'

type Props = {};

class Document extends NextDocument<Props> {

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Smooch&display=swap"
            rel="stylesheet"
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
          <noscript>
            <Image
              height="1"
              width="1"
              className="hidden"
              alt="facebook pixel"
              src={`https://www.facebook.com/tr?id=499310625170244&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
