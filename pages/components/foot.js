import Image from "next/image";
import Link from "next/link";

export default function foot() {
  return (
    <footer className="footer">
      <div className="l-footer">
        <h1>
          <Image src="/logos.png" width={100} height={50} alt="Logo" />
        </h1>
        <p>
          Keep Trends in your pocket with the latest news for events happening
          across the globe and in India. Get summarized content across various
          categories and interests.
        </p>
      </div>
      <ul className="r-footer">
        <li>
          <h2>Information</h2>
          <ul className="box">
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Social</h2>
          <ul className="box">
            <li>
              <Link href="https://www.instagram.com/papernews_app/">
                <a>Instagram</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul className="box">
            <li>
              <Link href="/pp">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="b-footer">
        <p>© 2021 Paper Media, LLC. All Rights Reserved</p>
      </div>
    </footer>
  );
}
