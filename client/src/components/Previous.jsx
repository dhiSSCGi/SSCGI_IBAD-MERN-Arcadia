import React from "react";
import { Button } from "react-bootstrap";
const Previous = () => {
  return (
    <section className="section-previous">
      <div className="container text-center">
        <h3 className="heading-tertiary">Previous Events</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card focus-card">
              <div className="focus-img-box">
                <img
                  src="../../assets/images/event1.png"
                  className="img-fluid previous-img"
                  alt="Market analysis insights"
                />
              </div>

              <div className="focus-text-box">
                <h5 className="">PLASTIC PATHWAYS</h5>
                <p className="focus-description">
                  Leading the Way in Plastic Reuse & Reduction
                </p>
              </div>
              <Button className="btn sub-btn">View</Button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card focus-card">
              <div className="focus-img-box">
                <img
                  src="../../assets/images/event2.png"
                  className="img-fluid previous-img"
                  alt="Market analysis insights"
                />
              </div>

              <div className="focus-text-box">
                <h5 className="">TECHCYCLE</h5>
                <p className="focus-description">Closing the Loop on E-Waste</p>
              </div>
              <Button className="btn sub-btn">View</Button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card focus-card">
              <div className="focus-img-box">
                <img
                  src="../../assets/images/event3.png"
                  className="img-fluid previous-img"
                  alt="Market analysis insights"
                />
              </div>

              <div className="focus-text-box">
                <h5 className="">FOOD FORWARD</h5>
                <p className="focus-description">From Food Waste to Resource</p>
              </div>
              <Button className="btn sub-btn">View</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <div className="card focus-card">
              <div className="focus-img-box">
                <img
                  src="../../assets/images/event5.png"
                  className="img-fluid previous-img "
                  alt="Market analysis insights"
                />
              </div>

              <div className="focus-text-box">
                <h5 className="">TECHCYCLE</h5>
                <p className="focus-description">Closing the Loop on E-Waste</p>
              </div>
              <Button className="btn sub-btn">View</Button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card focus-card">
              <div className="focus-img-box">
                <img
                  src="../../assets/images/event6.png"
                  className="img-fluid previous-img"
                  alt="Market analysis insights"
                />
              </div>

              <div className="focus-text-box">
                <h5 className="">FOOD FORWARD</h5>
                <p className="focus-description">From Food Waste to Resource</p>
              </div>
              <Button className="btn sub-btn">View</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Previous;
