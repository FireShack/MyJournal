import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { startLogout } from "../../actions/auth";
export const NavbarComp = () => {
  const { uid, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (uid) {
      dispatch(startLogout())
    }
  };
  
  return (
    <>
      <Navbar bg="primary" expand={false} className="p-3">
        <Container fluid>
          <Navbar.Brand className="text-white">{(uid) ? `Welcome, ${name}!` : 'Notes app'}</Navbar.Brand>
          <Navbar.Toggle className="bg-light" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" placement="end">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
                <Link
                  to={uid ? "/" : "/auth/login"}
                  className="nav-link text-dark"
                  onClick={handleClick}
                >
                  {uid ? "Logout" : "Login"}
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
