import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelectedOptions } from "./SelectedOptionsContext";

function NavBar() {
  const { isAuthenticated, logout, login } = useSelectedOptions();
  return (
    <>
      <Navbar
        fixed="top"
        // bg="light"
        data-bs-theme="dark"
        style={{ background: "lightgrey" }}
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              src="/logo192.png"
              alt=""
              style={{ width: "70px", height: "50px", marginRight: "10px" }}
            />
            Awaiting Tours
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            {!isAuthenticated && !sessionStorage.getItem("userinfo") && (
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            )}
            {!isAuthenticated && !sessionStorage.getItem("userinfo") ? (
              <Nav.Link href="/login" onClick={login}>
                Login
              </Nav.Link>
            ) : (
              <Nav.Link href="/" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
