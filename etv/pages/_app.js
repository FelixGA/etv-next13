import "../styles/globals.css";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import ErrorBoundary from "../components/ErrorBoundary";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>{" "}
        <meta name="theme-color" content="#317EFB" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
      </Head>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
