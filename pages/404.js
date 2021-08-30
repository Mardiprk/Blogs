import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops Page Not Found</h1>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}
