import * as React from "react";
import "../styles/globals.css";

interface Props {
  Component: typeof React.Component;
  pageProps: {};
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
