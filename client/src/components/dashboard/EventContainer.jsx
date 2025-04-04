import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import customFetch from "../../utils/customFetch.js";
const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      document.getElementById("submitButton").style.display = "inline-block";
      const fileNameDisplay = document.createElement("p");
      fileNameDisplay.textContent = `Selected file: ${selectedFile.name}`;
      fileNameDisplay.id = "fileNameDisplay";
      const existingDisplay = document.getElementById("fileNameDisplay");
      if (existingDisplay) {
        existingDisplay.textContent = `Selected file: ${selectedFile.name}`;
      } else {
        e.target.parentNode.insertBefore(fileNameDisplay, e.target.nextSibling);
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await customFetch.post(
        "/event/upload-participants",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("File uploaded successfully!");
      console.log(response.data);
      setFile(null);
      document.getElementById("submitButton").style.display = "none";
      const fileNameDisplay = document.getElementById("fileNameDisplay");
      if (fileNameDisplay) {
        fileNameDisplay.remove();
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please try again.");
    }
  };
  return (
    <>
      <div className="card event-card h-100">
        <img
          src={event.image}
          alt={event.title}
          className="event-card-image card-img-top img-fluid"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">
            <strong>Date:</strong>{" "}
            {new Date(event.eventDate).toLocaleDateString()}
          </p>
          <p className="card-text">
            <strong>Location:</strong> {event.location}
          </p>
          <div className="mt-3">
            <div className="d-flex gap-2">
              <button onClick={handleShowModal} className="btn btn-primary">
                View Details
              </button>
              <a href={event.eventDataLink} className="btn btn-secondary">
                View Participants
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal size="lg" show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <img
            src={event.image}
            alt={event.title}
            className="img-fluid mb-3 rounded shadow-sm align-self-center w-100"
            style={{ objectFit: "cover", maxHeight: "400px" }}
          />
          <h5 className="text-dark text-center">
            <strong>{event.title}</strong>
          </h5>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(event.eventDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex gap-2 align-items-center">
              <button
                className="btn btn-outline-primary"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Upload File
              </button>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <div className="d-flex gap-2">
              <button
                id="submitButton"
                className="btn btn-success"
                style={{ display: "none" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const EventContainer = ({ events }) => {
  return (
    <div className="container-fluid ">
      <div className="row g-3">
        {events.map((event, index) => (
          <div key={index} className="col-md-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventContainer;
