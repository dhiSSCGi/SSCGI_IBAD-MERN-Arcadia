import React from "react";
import customFetch from "../utils/customFetch";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
const UpComing = () => {
  const [events, setEvents] = React.useState([]);
  const [currentEventIndex, setCurrentEventIndex] = React.useState(0);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const fetchEvents = async () => {
    try {
      const response = await customFetch.get("/event");
      const futureEvents = response.data.events.filter(
        (event) =>
          !event.isDeleted && new Date(event.registrationStart) > new Date()
      );
      setEvents(futureEvents);
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  React.useEffect(() => {
    fetchEvents();
  }, []);

  const visibleEvents = events.slice(currentEventIndex, currentEventIndex + 3);

  const goToNextPage = () => {
    const nextIndex =
      currentEventIndex + 3 >= events.length ? 0 : currentEventIndex + 1;

    setCurrentEventIndex(nextIndex);
  };

  const goToPreviousPage = () => {
    const prevIndex =
      currentEventIndex - 1 < 0 ? events.length - 3 : currentEventIndex - 1;

    setCurrentEventIndex(prevIndex);
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <section id="section-upcoming-events" className="py-5 bg-light">
        <div className="container-fluid px-6">
          <h2 className="heading-tertiary  mb-0">Upcoming Events</h2>

          <div className="row justify-content-center position-relative">
            <button
              onClick={goToPreviousPage}
              className="btn btn-sm btn-outline-secondary rounded-circle me-2 bg-main-color prev-button"
              style={{ width: "32px", height: "32px", padding: "0" }}
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goToNextPage}
              className="btn btn-sm btn-outline-secondary rounded-circle  bg-main-color  next-button"
              style={{ width: "32px", height: "32px", padding: "0" }}
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            {visibleEvents.length > 0 ? (
              visibleEvents.map((event) => (
                <div
                  key={event._id}
                  className="col-md-4 mb-4"
                  onClick={() => handleCardClick(event)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card shadow-sm h-100">
                    <div
                      className="bg-secondary bg-opacity-25 w-100"
                      style={{
                        aspectRatio: "1/1",
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="card-body">
                      <p className="small text-primary fw-medium mb-1">
                        {event.type}
                      </p>
                      <p className="small fw-medium mb-1">{event.title}</p>
                      <p className="small text-muted">
                        {new Date(event.eventDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="small text-muted">{event.description}</p>
                      <p className="small text-muted">
                        <strong>Category:</strong>{" "}
                        {event.category?.join(", ") || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center mb-4">
                <h4>No upcoming events</h4>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <Modal size="lg" show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="mb-3"
              style={{
                width: "100%",
                aspectRatio: "16/9",
                backgroundImage: `url(${selectedEvent.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <p>
              <strong>Type:</strong> {selectedEvent.type}
            </p>
            <p>
              <strong>Category:</strong>{" "}
              {selectedEvent.category?.join(", ") || "Not specified"}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(selectedEvent.eventDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>{selectedEvent.description}</p>
            <div className="d-flex justify-content-center">
              <a
                href={selectedEvent.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Join Event
              </a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default UpComing;
