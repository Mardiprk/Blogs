import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
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
          <div className="w3-third" key={paper.source.id}>
            <h2>{paper.title}</h2>
            <p>{paper.description}</p>
            <p>
              <b>
                <i style={{ backgroundColor: hexCode(), color: "#fff" }}>
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
