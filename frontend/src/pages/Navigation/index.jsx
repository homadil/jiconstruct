import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="navbar-light fixed-top w-100"
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="ji_construct_logo.png"
            alt="Logo"
            height="40"
            width={150}
            className="mx-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="mx-4" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          style={{ width: "30%", maxWidth: "300px" }} // Sidebar occupies only 30% of screen
          onHide={() => document.body.click()} // Close when clicking outside the sidebar
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="ms-auto"
              style={{ width: "100%", justifyContent: "flex-end" }}
            >
              {[
                { name: "Home", path: "/" },
                { name: "News", path: "/news" },
                { name: "Project", path: "/project" },
                { name: "About Us", path: "/about_us" },
                { name: "Contact Us", path: "/contact_us" },
              ].map((link, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={link.path}
                  exact
                  activeStyle={{
                    color: "blue",
                    borderBottom: "2px solid blue",
                  }}
                  style={{
                    color: "black",
                    marginLeft: "20px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "blue")}
                  onMouseLeave={(e) => (e.target.style.color = "black")}
                >
                  {link.name}
                </Nav.Link>
              ))}

              {/* Authentication Dropdown */}
              {/* <NavDropdown
                title="Authenticate"
                id="auth-dropdown"
                style={{
                  color: "black",
                  marginLeft: "20px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "blue")}
                onMouseLeave={(e) => (e.target.style.color = "black")}
              >
                <NavDropdown.Item as={NavLink} to="/sign_in">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sign_up">
                  Register
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
