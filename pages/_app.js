import Head from "next/head";
import { useRouter } from "next/router"; // neu
import Script from "next/script";
import { TrackingHeadScript } from "@phntms/next-gtm";
import { StoreProvider } from "/components/store";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import useIdb from "/hooks/useIdb";
import "/styles/globals.css";
import { getCookie } from "cookies-next";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter(); // neu
  const consent = getCookie("localConsent");
  // const [cookiesAccepted, setCookiesAccepted] = useIdb("cookiesAccepted");

  // console.log(Component);

  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
       });
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TQRQV32');`,
        }}
      />

      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
          }}
        />
      )}

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

      {/* <TrackingHeadScript id="GTM-TQRQV32" disable={false} />  */}
      {/* {cookiesAccepted&&(
      <TrackingHeadScript id="GTM-TQRQV32" disable={false} />
      )} */}

      <ErrorBoundary>
        <StoreProvider>
          <Layout {...pageProps}>
            {/* <Component {...pageProps} /> */}
            <Component {...pageProps} key={router?.asPath} />
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
