import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <title>Home</title>
      </Head>
      <div className="w3-container">
        <h1>Top Stories</h1>
      </div>
      <div className="sty">
        <h1>Zero Config</h1>
        <p>
          Automatic compilation and bundling. Optimized for production from the
          start.
        </p>
      </div>
      <div className="w3-row-padding" style={{ padding: 10 }}>
        <div className="w3-third">
          <h1>London</h1>
          <p>London is the capital city of England.</p>
          <p>
            It is the most populous city in the United Kingdom, with a
            metropolitan area of over 13 million inhabitants.
          </p>
        </div>

        <div className="w3-third">
          <h1>Paris</h1>
          <p>Paris is the capital of France.</p>
          <p>
            The Paris area is one of the largest population centers in Europe,
            with more than 12 million inhabitants.
          </p>
        </div>

        <div className="w3-third">
          <h1>Tokyo</h1>
          <p>Tokyo is the capital of Japan.</p>
          <p>
            It is the center of the Greater Tokyo Area, and the most populous
            metropolitan area in the world.
          </p>
        </div>
      </div>
    </div>
  );
}
