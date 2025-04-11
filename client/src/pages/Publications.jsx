import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import MainPublications from "../components/MainPublications";
const Publications = () => {
  return (
    <>
      <MainPublications />
      <section className="section-events">
        <div className="container-fluid px-6">
          <h3 className="heading-tertiary">KNOWLEDGE HUB</h3>
        </div>
        <div className="container-fluid px-6">
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="card focus-card">
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
                  src="../../assets/images/market-analysis.png"
                  className="impact-img"
                  alt="market-analysis"
                />
              </div>
            </div>
          </div>
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="impact-img-box">
                <img
                  src="../../assets/images/position-papers.png"
                  className="impact-img"
                  alt="position-papers"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card focus-card">
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
              <div className="card focus-card">
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
                  src="../../assets/images/waste-report.png"
                  className="impact-img"
                  alt="waste-report"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-upcoming">
        <div className="container-fluid px-6 text-center">
          <h3 className="heading-tertiary">Opinion Editorials</h3>
        </div>
        <div className="container-fluid px-6">
          <div className="row">
            <div className="col-md-4">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/event4.png"
                    className="editorials-img img-fluid"
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
                    src="../../assets/images/editorials2.png"
                    className="editorials-img img-fluid"
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
                    src="../../assets/images/editorials3.png"
                    className="editorials-img img-fluid"
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
          </div>
        </div>
      </section>
      <section className="section-previous">
        <div className="container-fluid px-6 text-center">
          <h3 className="heading-tertiary">Published Waste Reports</h3>
        </div>
        <div className="container-fluid px-6">
          <div className="row">
            <div className="col-md-4">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/waste-report1.png"
                    className="editorials-img img-fluid"
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
                    src="../../assets/images/waste-report2.png"
                    className="editorials-img img-fluid"
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
                    src="../../assets/images/waste-report3.png"
                    className="editorials-img img-fluid"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
