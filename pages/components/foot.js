import Image from "next/image";
export default function foot() {
  return (
    <footer className="footer">
      <div className="l-footer">
        <h1>
          <Image src="/logos.png" width={100} height={50} alt="Logo" />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
          tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
          recusandae.
        </p>
      </div>
      <ul className="r-footer">
        <li>
          <h2>Information</h2>
          <ul className="box">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Social</h2>
          <ul className="box">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul className="box">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contract</a>
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
