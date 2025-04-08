import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

const Header = ({ user, setUser }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogout = () => {
    customFetch
      .get("/auth/logout")
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
        toast.error("Error logging out");
      });

    // Clear localStorage and update state
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Remove the user from the state
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <Navbar collapseOnSelect expand="sm" className="nav-bg">
      <Container className="nav-container sticky-top">
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
            <Nav.Link href="/innovations" className="text-white">
              Innovations
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link href="/dashboard" className="text-white">
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  href="#"
                  onClick={handleLogout}
                  className="btn login-btn d-flex align-items-center gap-2"
                >
                  <img
                    src={user?.avatar || "../../assets/images/user.png"}
                    alt="User"
                    width="20"
                    height="20"
                    className="rounded-circle"
                  />
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
