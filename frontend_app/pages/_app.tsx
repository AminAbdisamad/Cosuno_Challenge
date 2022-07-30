import { ApolloProvider } from "@apollo/client";

// import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import client from "../lib/appoloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
