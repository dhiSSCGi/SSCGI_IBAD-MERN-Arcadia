import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
const Publications = () => {
  return (
    <>
      <section className="section-main-events">
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img
              className="d-block carousel-img"
              src="../../assets/images/event1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block carousel-img"
              src="../../assets/images/event2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block carousel-img"
              src="../../assets/images/event3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="section-events">
        <div className="container">
          <h3 className="heading-tertiary">KNOWLEDGE HUB</h3>
        </div>
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="event-card">
                <div className="impact-text-box">
                  <h3 className="key-title"> Market Analysis</h3>
                  <p className="impact-description">
                    Arcadia conducts in-depth market analysis to provide
                    businesses with a comprehensive understanding of the
                    sustainability landscape. These analyses explore trends,
                    opportunities, challenges, and key drivers in the transition
                    to a circular economy. By delivering actionable insights, we
                    enable companies to identify growth areas, anticipate market
                    shifts, and align their strategies with the evolving demands
                    of sustainable practices and consumer preferences
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="impact-img-box">
                <img
                  src="../../assets/images/DeepDive_img.png"
                  className="impact-img"
                  alt="Deep Dive event"
                />
              </div>
            </div>
          </div>
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="impact-img-box">
                <img
                  src="../../assets/images/workshop-img.png"
                  className="impact-img"
                  alt="Work Shop event"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-card">
                <div className="impact-img-box">
                  <div className="impact-text-box">
                    <h3 className="key-title">Position Papers</h3>
                    <p className="impact-description">
                      Arcadia develops position papers that outline informed
                      perspectives on critical sustainability issues. These
                      papers offer a deep dive into industry challenges, policy
                      recommendations, and strategic actions that stakeholders
                      should adopt to drive systemic change. Backed by data,
                      case studies, and expert insights, our position papers
                      serve as authoritative resources for guiding
                      decision-makers in business, government, and civil society
                      toward impactful, sustainability-focused policies and
                      practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="event-card">
                <div className="impact-text-box">
                  <h3 className="key-title"> Waste Reports / Manifestos</h3>
                  <p className="impact-description">
                    Our waste reports provide detailed assessments of current
                    waste management practices, with a focus on gaps,
                    inefficiencies, and opportunities for improvement. These
                    reports highlight both local and global case studies,
                    offering solutions and technologies that can optimize waste
                    management processes. By addressing critical issues in
                    post-consumer waste, our waste reports empower companies,
                    municipalities, and policymakers to implement effective,
                    sustainable, and circular waste management strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="impact-img-box">
                <img
                  src="../../assets/images/DeepDive_img.png"
                  className="impact-img"
                  alt="Deep Dive event"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-upcoming">
        <div className="container text-center">
          <h3 className="heading-tertiary">Opinion Editorials</h3>
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
                  <p className="focus-description">
                    Closing the Loop on E-Waste
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
                  <h5 className="">FOOD FORWARD</h5>
                  <p className="focus-description">
                    From Food Waste to Resource
                  </p>
                </div>
                <Button className="btn sub-btn">View</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-previous">
        <div className="container text-center">
          <h3 className="heading-tertiary">Published Waste Reports</h3>
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
                  <p className="focus-description">
                    Closing the Loop on E-Waste
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
                  <h5 className="">FOOD FORWARD</h5>
                  <p className="focus-description">
                    From Food Waste to Resource
                  </p>
                </div>
                <Button className="btn sub-btn">View</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
