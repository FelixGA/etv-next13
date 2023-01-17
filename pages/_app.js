import Head from "next/head";
import { useRouter } from "next/router"; // neu
import { TrackingHeadScript } from "@phntms/next-gtm";
import { StoreProvider } from "/components/store";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import useIdb from "/hooks/useIdb";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter(); // neu
  const [cookiesAccepted, setCookiesAccepted] = useIdb("cookiesAccepted");

  console.log(Component);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="theme-color" content="#317EFB" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/images/fav/ETV Favicon16x16@4x.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/images/fav/ETV Favicon32x32@4x.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/images/fav/ETV Favicon64x64@4x.png"
          rel="icon"
          type="image/png"
          sizes="64x64"
        />
        <link
          href="/images/fav/ETV Favicon128x128@4x.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
      </Head>

       {/* <TrackingHeadScript id="G-G35HVHE2CE" disable={false} /> */}
      {cookiesAccepted&&(
      <TrackingHeadScript id="G-G35HVHE2CE" disable={false} />
      )}

      <ErrorBoundary>
        <StoreProvider>
          <Layout {...pageProps}>
            {/* <Component {...pageProps} /> */}
            <Component {...pageProps} key={router?.asPath}/>
          </Layout>
        </StoreProvider>
      </ErrorBoundary>
    </>
  );
}
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   console.log(appProps);
//   return { ...appProps };
// };
