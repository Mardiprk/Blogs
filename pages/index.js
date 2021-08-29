import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      <p>
        <Link href="/about">
          <a>Go to About</a>
        </Link>
      </p>
      <Image
        src="/git.png"
        height={300}
        width={300}
        alt="Github co pilot image"
      />
    </div>
  );
}
