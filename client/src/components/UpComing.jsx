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
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>FLAGSHIP</b> PROJECT #3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
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

          <div className="col-md-6 ">
            <div className="registration-form">
              <h4>Registration Form</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn sub-btn mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const UpComing = () => {
  const [showImpactMixerModal, setShowImpactMixerModal] = React.useState(false);

  function handleShowImpactMixerModal() {
    setShowImpactMixerModal(true);
  }

  return (
    <>
      <section className="section-upcoming">
        <div className="container text-center">
          <h3 className="heading-tertiary">Upcoming Events</h3>
        </div>
        <div className="container">
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
                <Button className="btn sub-btn">View</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactMixerModal
        show={showImpactMixerModal}
        onHide={() => setShowImpactMixerModal(false)}
      />
    </>
  );
};

export default UpComing;
