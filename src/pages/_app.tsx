import Head from "next/head";
import type { AppProps } from "next/app";

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/globalStyles";

import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Filip Wnęk</title>
        <meta name="description" content="Filip Wnęk portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preconnect"
          href="/fonts/ArsenicaTrial-Italic.ttf"
          type="font/ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="/fonts/ArsenicaTrial-MediumItalic.ttf"
          type="font/ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
