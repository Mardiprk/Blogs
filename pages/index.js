import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NavItem } from "react-bootstrap";

export async function getStaticProps() {
  const res = await fetch("https://api.npoint.io/6240f6fa023274a4980d");
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
}

export default function Home({ news }) {
  return (
    <div className="container">
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

      <div
        className="w3-row-padding"
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      >
        {news.map((paper) => (
          <div
            className="w3-third"
            key={paper.source.id}
            style={{ borderColor: "#333", borderBottomWidth: 1 }}
          >
            <h2>{paper.title}</h2>
            <p>{paper.description}</p>
            <p>
              <b>
                <i style={{ backgroundColor: "yellow", color: "#222" }}>
                  -{paper.source.name}
                </i>
              </b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
