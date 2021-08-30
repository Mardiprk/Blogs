import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <h1>Header</h1>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
