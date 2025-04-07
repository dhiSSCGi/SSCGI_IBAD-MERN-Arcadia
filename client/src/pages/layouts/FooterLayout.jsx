import React from "react";
const FooterLayout = () => {
  return (
    <footer
      className=" py-5"
      style={{ backgroundColor: "#d4edda", color: "black" }}
    >
      <div className="container-fluid px-6">
        <div className="row gy-4">
          {/* Logo and Tagline Section */}
          <div className="col-lg-3">
            <h2 className="fw-bold fs-4">SUSTAINABILITY HUB</h2>
            <p className=" text-muted">Smarter Cities, Greener Communities.</p>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4">
            <h3 className="fs-5 fw-semibold mb-3">About Arcadia</h3>
            <p className=" text-muted">
              Arcadia is a hub for sustainability, fostering innovation and
              collaboration for a greener future. Join us in making a positive
              impact on the planet.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2">
            <h3 className="fs-5 fw-semibold mb-3">Events</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className=" text-decoration-none text-muted">
                  Webinars
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-decoration-none text-muted">
                  Workshops
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-decoration-none text-muted">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3 className="fs-5 fw-semibold mb-3">Knowledge Portal</h3>
            <p className=" text-muted mb-1">Email us at:</p>
            <a
              href="mailto:gsm.arcadia@gmail.com"
              className=" text-decoration-none text-muted"
            >
              gsm.arcadia@gmail.com
            </a>
          </div>
          <div className="col-lg-2">
            <h3 className="fs-5 fw-semibold mb-3">Initiatives</h3>
            <p className=" text-muted mb-1">Email us at:</p>
            <a
              href="mailto:gsm.arcadia@gmail.com"
              className=" text-decoration-none text-muted"
            >
              gsm.arcadia@gmail.com
            </a>
          </div>
          <div className="col-lg-2">
            <h3 className="fs-5 fw-semibold mb-3">Contact Us</h3>
            <p className=" text-muted mb-1">Email us at:</p>
            <a
              href="mailto:gsm.arcadia@gmail.com"
              className=" text-decoration-none text-muted"
            >
              gsm.arcadia@gmail.com
            </a>
          </div>
          {/* Contact Section */}
        </div>

        {/* Copyright Section */}
        <div className="row border-top pt-3 mt-4 text-center text-dark">
          <div className="col">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="../../assets/images/logo.png"
                alt="Arcadia Logo"
                style={{ width: "2rem", height: "2rem" }}
                className="footer-logo"
              />
              <span className=" text-muted ms-2">
                © 2025 Arcadia. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
