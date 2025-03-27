import React from "react";
import Button from "react-bootstrap/Button";
const Focus = () => {
  return (
    <section className="section-focus">
      <div className="container">
        <h3 className="heading-tertiary">
          Our Focus in the Philippines Context
        </h3>
        <p className="subheading">
          Our flagship projects bring together key stakeholders to address
          pressing waste challenges through collaborative dialogue and
          innovation. By assessing on-the-ground realities and identifying gaps,
          we harness feedback, insights, and our network of experts to develop
          actionable frameworks. These initiatives provide practical, scalable
          solutions and recommendations for companies and communities to
          effectively tackle waste management issues, fostering sustainable
          change and advancing circular economy practices.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card focus-card">
              <div className="focus-img-box">
                <img
                  src="../../assets/images/hero.png"
                  className="focus-img"
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
                  src="../../assets/images/hero.png"
                  className="focus-img"
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
                  src="../../assets/images/hero.png"
                  className="focus-img"
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

export default Focus;
