import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import { useState, useEffect } from "react";
import Router from "next/router";
import Preloader from "@/components/common/preloader";
import Head from "next/head";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Website Title & Favicon */}
        <title>Your Website Name</title>
        <link rel="icon" href="/favicon.ico"  type="image/x-icon"/>

        {/* SEO Meta Tags */}
        <meta name="description" content="Your website description here." />
        <meta property="og:title" content="Your Website Name" />
        <meta property="og:description" content="Your website description here." />
        <meta property="og:image" content="https://yourwebsite.com/images/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />

        {/* Structured Data (Google Schema for Logo) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YourWebsiteName",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/images/logo1.png",
            }),
          }}
        />
      </Head>

      {loading && <Preloader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;


