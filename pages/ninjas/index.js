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

export default function Ninjas({ ninjas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninjas List</title>
      </Head>
      <div className={styles.align}>
        <h1 className={styles.title} style={{ textAlign: "center" }}>
          Ninja List
        </h1>
        {ninjas.map((ninja) => (
          <Link href={"/ninjas/" + ninja.source.id} key={ninja.source.id}>
            <a className={st.single}>
              <p className={st.txt}>{ninja.title}</p>
              <p
                className={st.txt}
                style={{
                  fontStyle: "italic",
                  fontFamily: "sans-serif",
                  color: "#999",
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
