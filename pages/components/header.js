import Link from "next/link";
import Image from "next/image";

export default function header() {
  return (
    <nav>
      <div>
        <Image src="/logos.png" height={30} width={60} />
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i classNmae="fas fa-bars" />
      </label>
      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}
