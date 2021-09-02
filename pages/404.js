import Link from "next/link";
import Head from "next/head";
import Lottie from "lottie-react";
import Error from "../public/16294-404-space-error.json";

export default function NotFound() {
  return (
    <div
      className="not-found"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
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
      <div className="not-found">
        <p>
          Go back to{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
