import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Julian Mayes</title>
        <meta property="og:title" content="Julian Mayes" key="title" />

        <meta property="og:description" content="Web developer and designer based out of Vancouver BC" />
        <meta property="og:image" content={"/pfp.png"} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../styles/globals.css" />
        <link rel="shortcut icon" href="/_static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
