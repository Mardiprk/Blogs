import "../styles/globals.css";
import Header from "./components/header";
import Foot from "./components/foot";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Foot />
    </>
  );
}
