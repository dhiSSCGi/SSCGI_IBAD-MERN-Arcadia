import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import customFetch from "../../utils/customFetch.js";
import { toast } from "react-toastify";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
const EventCard = ({ event, fetchEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const categoryOptions = [
    { value: "Forums", label: "Forums" },
    { value: "Panel Dicussions", label: "Panel Dicussions" },
    { value: "Fireside Chats", label: "Fireside Chats" },
    { value: "Summits", label: "Summits" },
    { value: "Workshops", label: "Workshops" },
    { value: "Hackathons", label: "Hackathons" },
  ];

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
    formData.append("data", file);
    formData.append("eventId", event._id);

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

      // Reset file state and UI elements after successful upload
      setFile(null);
      document.getElementById("submitButton").style.display = "none";
      const fileNameDisplay = document.getElementById("fileNameDisplay");
      if (fileNameDisplay) {
        fileNameDisplay.remove();
      }

      fetchEvents();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file. Please try again.");
    }
  };

  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [updatedEvent, setUpdatedEvent] = useState({
    title: event.title,
    description: event.description,
    eventDate: event.eventDate,
    location: event.location,
    capacity: event.capacity,
    image: event.image,
    category: event.category || [],
  });
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setUpdatedEvent((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(selectedFile);
      setUpdatedEvent((prev) => ({
        ...prev,
        image: URL.createObjectURL(selectedFile),
      }));
    }
  };
  const handleUpdateModalShow = (e) => {
    e.stopPropagation();
    setUpdateModalShow(true);
  };

  const handleUpdateModalClose = () => setUpdateModalShow(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async () => {
    try {
      await customFetch.patch(`/event/update/${event._id}`, updatedEvent);
      toast.success("Event updated successfully!");
      fetchEvents();
      handleUpdateModalClose();
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event. Please try again.");
    }
  };

  async function handleDeleteEvent(eventId) {
    try {
      await customFetch.patch(`/event/delete/${eventId}`);
      toast.success("Event deleted successfully!");
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event. Please try again.");
    }
  }

  async function handleRestoreEvent(eventId) {
    try {
      await customFetch.patch(`/event/restore/${eventId}`);
      toast.success("Event restored successfully!");
      fetchEvents();
    } catch (error) {
      console.error("Error restoring event:", error);
      alert("Failed to restoring event. Please try again.");
    }
  }

  return (
    <>
      <div
        className="card event-card h-100 position-relative"
        onClick={handleShowModal}
        style={{ cursor: "pointer" }}
      >
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
          <p className="card-text">
            <strong>Participants:</strong> {event.participants} /{" "}
            {event.capacity}
          </p>
          <p className="card-text">
            <strong>Categories:</strong> {event.category.join(", ")}
          </p>
          <div className="mt-3">
            <div className="event-card-btns">
              <div className="col">
                <a
                  href={event.eventDataLink}
                  className="btn main-btn event-card-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Participants
                </a>
              </div>
              <div className="col">
                <button
                  onClick={handleUpdateModalShow}
                  className="btn main-btn event-card-btn"
                >
                  Update
                </button>
              </div>
              <div className="col">
                {event.isDeleted ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toast.info(
                        <div>
                          <p>Are you sure you want to restore this event?</p>
                          <div className="d-flex justify-content-center gap-2">
                            <button
                              className="btn btn-success btn-sm"
                              onClick={() => {
                                handleRestoreEvent(event._id);
                                toast.dismiss();
                              }}
                            >
                              Yes
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => toast.dismiss()}
                            >
                              No
                            </button>
                          </div>
                        </div>,
                        {
                          position: "top-center",
                          autoClose: false,
                          closeOnClick: false,
                          draggable: false,
                        }
                      );
                    }}
                    className="btn btn-outline-success event-card-btn"
                  >
                    Restore
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toast.info(
                        <div>
                          <p>Are you sure you want to delete this event?</p>
                          <div className="d-flex justify-content-center gap-2">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => {
                                handleDeleteEvent(event._id);
                                toast.dismiss();
                              }}
                            >
                              Yes
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => toast.dismiss()}
                            >
                              No
                            </button>
                          </div>
                        </div>,
                        {
                          position: "top-center",
                          autoClose: false,
                          closeOnClick: false,
                          draggable: false,
                        }
                      );
                    }}
                    className="btn main-btn event-card-btn"
                  >
                    Delete
                  </button>
                )}
              </div>
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
          <p>
            <strong>Participants:</strong> {event.participants} /{" "}
            {event.capacity}
          </p>
          <p>
            <strong>Categories:</strong> {event.category.join(", ")}
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

      <Modal show={updateModalShow} onHide={handleUpdateModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={updatedEvent.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={updatedEvent.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="eventDate" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="eventDate"
                name="eventDate"
                value={
                  new Date(updatedEvent.eventDate).toISOString().split("T")[0]
                }
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={updatedEvent.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="capacity" className="form-label">
                Capacity
              </label>
              <input
                type="number"
                className="form-control"
                id="capacity"
                name="capacity"
                value={updatedEvent.capacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categories">CATEGORIES</label>

              <CreatableSelect
                isMulti
                options={categoryOptions}
                value={updatedEvent.category.map((cat) => ({
                  value: cat,
                  label: cat,
                }))}
                onChange={(newValue) =>
                  setUpdatedEvent((prev) => ({
                    ...prev,
                    category: newValue.map((item) => item.value),
                  }))
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {updatedEvent.image && (
                <img
                  src={updatedEvent.image}
                  alt="Preview"
                  className="img-fluid mt-3 rounded shadow-sm"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUpdateModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const EventContainer = ({ events, fetchEvents }) => {
  return (
    <div className="container-fluid ">
      {events.length === 0 ? (
        <p className="text-center">No events available.</p>
      ) : (
        <div className="row g-3">
          {events.map((event, index) => (
            <div key={index} className="col-md-4">
              <EventCard event={event} fetchEvents={fetchEvents} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventContainer;
