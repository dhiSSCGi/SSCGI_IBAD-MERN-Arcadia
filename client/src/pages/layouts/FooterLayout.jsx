import React from "react";

const FooterLayout = () => {
  return (
    <footer className="bg-light">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h4 className="text-dark">Sustainability hub</h4>
            <p>Upper Bicutan, Taguig City</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h6 className="text-dark ">Arcadia</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates esse quibusdam, repellat veritatis sed illum
                molestiae eveniet deleniti totam iste.
              </p>
            </div>
            <div className="col-md-2">
              <a href="#" className="text-dark me-4">
                Events
              </a>
            </div>
            <div className="col-md-2">
              <a href="#" className="text-dark me-4">
                Privacy Policy
              </a>
            </div>
            <div className="col-md-2">
              <a href="#" className="text-dark me-4">
                Licensing
              </a>
            </div>
            <div className="col-md-2">
              <a href="#" className="text-dark">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark border-top text-white">
        © 2025-
        <a href="#" className="text-white">
          Arcadia
        </a>
      </div>
    </footer>
  );
};

export default FooterLayout;
