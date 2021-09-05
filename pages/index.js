import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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

      <div className="w3-row-padding" style={{ padding: 10 }}>
        <div className="w3-third">
          <h2>
            Millions of Americans don’t have drinkable water. Can the
            infrastructure bill fix that?
          </h2>
          <p>London is the capital city of England.</p>
          <p>
            It is the most populous city in the{" "}
            <b>
              <i>United Kingdom</i>
            </b>
            , with a metropolitan area of over 13 million inhabitants.
          </p>
        </div>

        <div className="w3-third">
          <h2>
            Millions of Americans don’t have drinkable water. Can the
            infrastructure bill fix that?
          </h2>
          <p>
            <i>
              Simply allocating more money won’t necessarily solve the problem.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}
