import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About({ ninjas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.align}>
        <h1 className={styles.title} style={{ textAlign: "left" }}>
          About Us
        </h1>
      </div>
    </div>
  );
}
