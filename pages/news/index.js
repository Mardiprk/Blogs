import Head from "next/head";
import styles from "../../styles/Home.module.css";
import st from "../../styles/ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://api.npoint.io/6240f6fa023274a4980d");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

export default function News({ ninjas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>
      <div className={styles.align}>
        <h1
          className={styles.title}
          style={{ textAlign: "center", color: "#012443" }}
        >
          Read Latest News
        </h1>
        {ninjas.map((ninja) => (
          <Link href={ninja.url} key={ninja.source.id}>
            <a className={st.single}>
              <img
                src={ninja.urlToImage}
                height={220}
                width={350}
                style={{ borderRadius: 6 }}
              />
              <p className={st.txt}>{ninja.title}</p>
              <p
                className={st.txt}
                style={{
                  fontStyle: "italic",
                  color: "#999",
                  fontSize: 15,
                }}
              >
                {ninja.description}
              </p>

              <p
                className={st.txt}
                style={{
                  fontStyle: "italic",
                  fontFamily: "sans-serif",
                  color: "#444",
                  fontSize: 13,
                }}
              >
                -{ninja.source.name}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
