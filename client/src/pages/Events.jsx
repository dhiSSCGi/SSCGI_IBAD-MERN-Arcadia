import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
const Events = () => {
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
          <h3 className="heading-tertiary">EVENTS & COLLABORATION</h3>
          <p className="subheading">
            Comprehensive events including forums, panel discussions, deep-dive
            dialogues, and hackathons to foster discourse and drive actionable
            sustainability solutions.
          </p>
        </div>
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="event-card">
                <div className="impact-text-box">
                  <h3 className="heading-tertiary"></h3>
                  <p className="impact-description">
                    Our Deep Dive Dialogue sessions are structured discussions
                    designed to encourage stakeholders to share their insights
                    and experiences on the challenges and opportunities in
                    sustainability. The sessions will be focus on sharing
                    on-the-ground challenges, case studies, good and bad
                    practices, as well as solutions, technologies, and best
                    practices adopted by other countries.
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
                    <h3 className="heading-tertiary">
                      Hackathons & Campaign-Based Events
                    </h3>
                    <p className="impact-description">
                      Arcadia organizes hackathons and campaign-driven events
                      designed to bring together innovative minds and passionate
                      advocates to solve real-world sustainability challenges.
                      These immersive, hands-on sessions invite companies, young
                      leaders, and experts to collaborate in developing creative
                      solutions, while aligning with corporate sustainability
                      goals and advocacy efforts. Through these events, we
                      foster the rapid prototyping of ideas, accelerate
                      problem-solving, and drive the development of actionable
                      strategies for environmental and social impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-upcoming">
        <div className="container text-center">
          <h3 className="heading-tertiary">Upcoming Events</h3>
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
          <h3 className="heading-tertiary">Previous Events</h3>
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

export default Events;
