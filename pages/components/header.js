import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function header() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>
            <Image src="/logos.png" height={30} width={60} alt="Logo" />
          </a>
        </Link>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <FaBars className="bar" />
      </label>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
