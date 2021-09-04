import "../styles/globals.css";
import Header from "./components/header";
import Foot from "./components/foot";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Foot />
    </>
  );
}
