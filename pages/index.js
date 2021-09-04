import Head from "next/head";
import styles from "../styles/Home.module.css";

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
          <h2>London is a good name, we can give that name to our kid</h2>
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
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
          <p>
            The Paris area is one of the largest population centers in Europe,
            with more than 12 million inhabitants.
          </p>
        </div>

        <div className="w3-third">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
          <p>
            It is the center of the Greater Tokyo Area, and the most populous
            metropolitan area in the world.
          </p>
        </div>
        <div className="w3-third">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
          <p>
            It is the center of the Greater Tokyo Area, and the most populous
            metropolitan area in the world.
          </p>
        </div>
        <div className="w3-third">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
          <p>
            It is the center of the Greater Tokyo Area, and the most populous
            metropolitan area in the world.
          </p>
        </div>
        <div className="w3-third">
          <h2>Tokyo</h2>
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
