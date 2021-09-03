import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <Card style={{ width: "18rem" }}>
        <Image src="/biden.png" height={200} width={250} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br />

      <Card style={{ width: "18rem" }}>
        <Image src="/biden.png" height={200} width={250} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link href="/">
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
