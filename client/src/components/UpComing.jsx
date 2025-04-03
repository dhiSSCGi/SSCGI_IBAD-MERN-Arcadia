import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
function ImpactMixerModal(props) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    contactNumber: "",
    eventId: "67e6631dea316f8e66ef9d07",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    customFetch
      .post("/booking", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  return (
    <Modal
      {...props}
      dialogClassName="modal-xl"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>FLAGSHIP</b> PROJECT #3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="">
            <div className="d-flex flex-column align-items-center">
              <img
                src="../../assets/images/upcoming1.png"
                alt="impact mixer"
                className="img-fluid"
              />

              <h3>Impact Mixer</h3>
            </div>

            <p>
              <b>Impact Mixer:</b> Join us this week to explore groundbreaking
              innovations and connect with industry leaders.
            </p>
            <br />
            <p>
              <b>Focus:</b> Supply chain optimization, food recovery,
              waste-to-energy innovations, and sustainable practices.
            </p>
            <p>
              <b>Target Audience: </b>Restaurants, food manufacturers,
              retailers, municipal governments, and sustainability enthusiasts.
            </p>
            <p>
              <b>Date & Time:</b> Thursday, March 16th, 2023, from 10:00 AM to
              2:00 PM.
            </p>
            <p>
              <b>Location:</b> GreenTech Conference Center, Downtown.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn main-btn"
              style={{ width: "10rem" }}
            >
              Join
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function PlasticPathwaysModal(props) {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    contactNumber: "",
    eventId: "67e66321ea316f8e66ef9d09",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    customFetch
      .post("/booking", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  return (
    <Modal
      {...props}
      dialogClassName="modal-xl"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>FLAGSHIP</b> PROJECT #4
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="">
            <div className="d-flex flex-column align-items-center">
              <img
                src="../../assets/images/upcoming2.png"
                alt="plastic pathways"
                className="img-fluid"
              />

              <h3>Plastic Pathways</h3>
            </div>

            <p>
              <b>Plastic Pathways:</b> Join us to explore innovative solutions
              for reducing plastic waste and promoting sustainable practices.
            </p>
            <br />
            <p>
              <b>Focus:</b> Plastic reuse, recycling technologies, and
              eco-friendly alternatives.
            </p>
            <p>
              <b>Target Audience: </b>Environmentalists, manufacturers,
              policymakers, and sustainability advocates.
            </p>
            <p>
              <b>Date & Time:</b> Friday, March 17th, 2023, from 11:00 AM to
              3:00 PM.
            </p>
            <p>
              <b>Location:</b> EcoTech Innovation Hub, Uptown.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn main-btn"
              style={{ width: "10rem" }}
            >
              Join
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const UpComing = () => {
  const [showImpactMixerModal, setShowImpactMixerModal] = React.useState(false);
  const [showPlasticPathwaysModal, setShowPlasticPathwaysModal] =
    React.useState(false);

  function handleShowImpactMixerModal() {
    setShowImpactMixerModal(true);
  }
  function handleShowPlasticPathwaysModal() {
    setShowPlasticPathwaysModal(true);
  }

  return (
    <>
      <section className="section-upcoming">
        <div className="container-fluid px-6 text-center">
          <h3 className="heading-tertiary">Upcoming Events</h3>
        </div>
        <div className="container-fluid px-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/upcoming1.png"
                    className="img-fluid upcoming-img"
                    alt="Market analysis insights"
                  />
                </div>

                <div className="focus-text-box">
                  <h5 className="">IMPACT MIXER</h5>
                  <p className="focus-description">
                    Discover New Opportunities
                  </p>
                </div>
                <Button
                  className="btn sub-btn"
                  onClick={handleShowImpactMixerModal}
                >
                  Join
                </Button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/upcoming2.png"
                    className="img-fluid upcoming-img"
                    alt="Market analysis insights"
                  />
                </div>

                <div className="focus-text-box">
                  <h5 className="">PLASTIC PATHWAYS</h5>
                  <p className="focus-description">
                    Leading the Way in Plastic Reuse & Reduction
                  </p>
                </div>
                <Button
                  className="btn sub-btn"
                  onClick={handleShowPlasticPathwaysModal}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactMixerModal
        show={showImpactMixerModal}
        onHide={() => setShowImpactMixerModal(false)}
      />

      <PlasticPathwaysModal
        show={showPlasticPathwaysModal}
        onHide={() => setShowPlasticPathwaysModal(false)}
      />
    </>
  );
};

export default UpComing;
