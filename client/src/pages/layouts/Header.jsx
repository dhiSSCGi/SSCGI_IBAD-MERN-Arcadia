import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="sm" className="nav-bg">
      <Container className="nav-container">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/">
            <img
              alt="Arcadia"
              src="../../../assets/images/logo.png"
              width="20"
              height="20"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <p className="brand-title">Arcadia</p>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link href="/" className="text-white">
              Who We Are
            </Nav.Link>
            <Nav.Link href="/events" className="text-white">
              Events
            </Nav.Link>
            <Nav.Link href="/publications" className="text-white">
              Publications
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link href="/profile" className="text-white">
                  Profile
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={handleLogout}
                  className="btn logout-btn"
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login" className="btn login-btn">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
