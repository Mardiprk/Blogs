import "../styles/globals.css";
import Layout from "./components/layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
