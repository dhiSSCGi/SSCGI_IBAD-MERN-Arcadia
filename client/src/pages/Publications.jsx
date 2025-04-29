import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import MainPublications from "../components/MainPublications";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const wasteReportsData = [
  {
    id: 1,
    title: "PLASTIC PATHWAYS",
    description: "Leading the Way in Plastic Reuse & Reduction",
    image: "../../assets/images/waste-report1.png",
    datePublished: "2025-02-10",
  },
  {
    id: 2,
    title: "TECHCYCLE",
    description: "Closing the Loop on E-Waste",
    image: "../../assets/images/waste-report2.png",
    datePublished: "2025-01-28",
  },
  {
    id: 3,
    title: "TECHCYCLE",
    description: "Circular Economy Approaches in Electronics Waste",
    image: "../../assets/images/waste-report3.png",
    datePublished: "2025-03-10",
  },
];
const editorialsData = [
  {
    id: 1,
    title: "PLASTIC PATHWAYS",
    description: "Leading the Way in Plastic Reuse & Reduction",
    image: "../../assets/images/event4.png",
    datePublished: "2025-04-15",
  },
  {
    id: 2,
    title: "TECHCYCLE",
    description: "Closing the Loop on E-Waste",
    image: "../../assets/images/editorials2.png",
    datePublished: "2025-03-20",
  },
  {
    id: 3,
    title: "TECHCYCLE",
    description: "Exploring Circular Economy in Electronics",
    image: "../../assets/images/editorials3.png",
    datePublished: "2025-04-05",
  },
];
const Publications = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEditorial, setSelectedEditorial] = useState(null);

  const handleViewClick = (editorial) => {
    setSelectedEditorial(editorial);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedEditorial(null);
  };

  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowReportModal(true);
  };

  const handleCloseReportModal = () => {
    setShowReportModal(false);
    setSelectedReport(null);
  };
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
            {editorialsData.map((editorial) => (
              <div className="col-md-4" key={editorial.id}>
                <div className="card focus-card">
                  <div className="focus-img-box">
                    <img
                      src={editorial.image}
                      className="editorials-img img-fluid"
                      alt={editorial.title}
                    />
                  </div>

                  <div className="focus-text-box">
                    <h5>{editorial.title}</h5>
                    <p className="focus-description">{editorial.description}</p>
                  </div>
                  <Button
                    className="btn sub-btn"
                    onClick={() => handleViewClick(editorial)}
                  >
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEditorial?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedEditorial?.image}
            alt={selectedEditorial?.title}
            className="img-fluid mb-3"
          />
          <p>
            <strong>Description:</strong> {selectedEditorial?.description}
          </p>
          <p>
            <strong>Date Published:</strong> {selectedEditorial?.datePublished}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <section className="section-previous">
        <div className="container-fluid px-6 text-center">
          <h3 className="heading-tertiary">Published Waste Reports</h3>
        </div>
        <div className="container-fluid px-6">
          <div className="row">
            {wasteReportsData.map((report) => (
              <div className="col-md-4" key={report.id}>
                <div className="card focus-card">
                  <div className="focus-img-box">
                    <img
                      src={report.image}
                      className="editorials-img img-fluid"
                      alt={report.title}
                    />
                  </div>

                  <div className="focus-text-box">
                    <h5>{report.title}</h5>
                    <p className="focus-description">{report.description}</p>
                  </div>
                  <Button
                    className="btn sub-btn"
                    onClick={() => handleViewReport(report)}
                  >
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Waste Reports */}
      <Modal show={showReportModal} onHide={handleCloseReportModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedReport?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedReport?.image}
            alt={selectedReport?.title}
            className="img-fluid mb-3"
          />
          <p>
            <strong>Description:</strong> {selectedReport?.description}
          </p>
          <p>
            <strong>Date Published:</strong> {selectedReport?.datePublished}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReportModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Publications;
