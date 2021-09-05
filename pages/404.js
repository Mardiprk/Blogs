import Head from "next/head";
import Lottie from "lottie-react";
import Error from "../public/36395-lonely-404.json";

export default function NotFound() {
  return (
    <div className="not-found" style={{ alignItems: "center" }}>
      <Head>
        <title>Page Not Found :/</title>
      </Head>
      <Lottie
        animationData={Error}
        style={{
          height: 600,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </div>
  );
}
