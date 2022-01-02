import "../styles/globals.css";
import Head from "next/head";
import Cursor from "../comps/Cursor";
import { Header } from "../comps/Header";
import useWindowSize from "../hooks/useWindowSize";
import useScrollTop from "../hooks/useScrollTop";
import { useState, useEffect } from "react";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  const size = useWindowSize();
  const scrollTop = useScrollTop();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <>
      <Cursor
        position={position}
        setPosition={setPosition}
        hovering={hovering}
      />

      <Header dark={dark} setDark={setDark} />

      <Head>
        <title>Julian Mayes</title>
        <meta property="og:title" content="Julian Mayes" key="title" />

        <meta
          property="og:description"
          content="Web developer and designer based out of Vancouver BC"
        />
        <meta property="og:image" content={"/pfp.png"} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../styles/globals.css" />
        <link rel="shortcut icon" href="/_static/favicon.ico" />
      </Head>
      <Component
        {...pageProps}
        size={size}
        scrollTop={scrollTop}
        position={position}
        setHovering={setHovering}
        dark={dark}
      />
    </>
  );
}

export default MyApp;
