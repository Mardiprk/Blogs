import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Page</h1>
      <p>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </p>
    </div>
  );
}
