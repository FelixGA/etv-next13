import "../styles/globals.css";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import ErrorBoundary from "../components/ErrorBoundary";
function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
