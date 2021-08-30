import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>
        The complicated reality of doing what you love
      </h1>
      <h2 className={styles.title}>
        I lost my hobby and gained a revenue stream.
      </h2>
      <p className={styles.text}>
        I didn’t love my old therapist, but she did give me one crucial piece of
        advice: Get a hobby. I was writing about food for work, so cooking
        didn’t really count as a hobby anymore — I’d already monetized that one
        — nor did reading, nor socializing, especially since all of my friends
        worked in my industry. I needed something in my life that existed apart
        from all that. I was stressed and, of course, also on my phone too much
        (and still am).
      </p>
      <Link href="/about">
        <a className={styles.btn}>About us</a>
      </Link>
    </div>
  );
}
