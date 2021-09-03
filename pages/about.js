import styles from "../styles/Home.module.css";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
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
