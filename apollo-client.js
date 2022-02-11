// ./apollo-client.js

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,

  link: createHttpLink({
    uri: "http://localhost:1337/graphql",
    credentials: "same-origin",
    // headers: {
    //   cookie: req.header("Cookie"),
    // },
  }),

  cache: new InMemoryCache(),
});

export default client;
