import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
export default function header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link href="/">
          <a>
            <Image src="/logo.png" height={50} width={50} />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=".link">
          <Nav className="me-auto">
            <Link href="/">
              <a className="link">Home</a>
            </Link>

            <Link href="/about">
              <a className="link">About Us</a>
            </Link>
            <NavDropdown
              id="dropdown-basic-button"
              title="Dropdown button"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#/action-2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#/action-3">
                Something else
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
