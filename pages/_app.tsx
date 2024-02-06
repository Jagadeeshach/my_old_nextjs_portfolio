import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
