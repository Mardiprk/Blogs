import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.jpg" height={80} width={120} />
          </a>
        </Link>
      </div>

      <Link href="/">
        <a
          className="tit"
          style={{
            color: "#222",
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className="tit"
          style={{
            color: "#222",
          }}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
