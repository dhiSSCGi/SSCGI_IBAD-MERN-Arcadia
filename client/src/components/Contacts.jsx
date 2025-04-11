import React, { useState } from "react";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
const Contacts = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    notes: "",
    logo: "http://localhost:5173/logo.png",
  });

  // State to handle form submission status

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to backend
      const response = await customFetch.post("/send-email", formData);

      // Handle response
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        notes: "",
      });
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("There was an error sending your message.");
    }
  };

  return (
    <section className="section-upcoming">
      <div className="container-fluid px-6 text-center">
        <h3 className="heading-tertiary text-white">Contact Us</h3>
        <p className="title-p text-white">
          Send us a message and we'll get back to you as soon as we can.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group col-md-6">
                <label className="text-white mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label className="text-white mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-white mb-1" htmlFor="email">
                  Contact Number
                </label>
                <input
                  type="number"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="text-white mb-1" htmlFor="notes">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn main-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
