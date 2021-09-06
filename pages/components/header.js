import Link from "next/link";
import Image from "next/image";
import { FaBars, FaAudible } from "react-icons/fa";

export default function header() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>
            <FaAudible color="#fff" size={30} />
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
