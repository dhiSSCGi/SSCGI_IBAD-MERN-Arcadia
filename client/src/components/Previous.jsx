import React from "react";
import { Button } from "react-bootstrap";
import customFetch from "../utils/customFetch";
const Previous = () => {
  const [events, setEvents] = React.useState([]);

  const fetchEvents = async () => {
    try {
      const response = await customFetch.get("/event");
      const pastEvents = response.data.events.filter(
        (event) => new Date(event.eventDate) < new Date()
      );
      setEvents(pastEvents.slice(0, 3));
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
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <section className="section-previous">
        <div className="container-fluid px-6 text-center">
          <h3 className="heading-tertiary">Previous Events</h3>
        </div>
        <div className="container-fluid px-6">
          <div className="row">
            {events.map((event) => (
              <div
                className="col-md-4"
                key={event._id}
                onClick={() => handleCardClick(event)}
              >
                <div className="card focus-card">
                  <div className="focus-img-box">
                    <img
                      src={event.image || "../../assets/images/default.png"}
                      className="img-fluid previous-img"
                      alt={event.title || "Event image"}
                    />
                  </div>
                  <div className="focus-text-box">
                    <h5 className="">{event.title}</h5>
                    <p className="focus-description">{event.description}</p>
                    <p className="focus-date">
                      <strong>Date:</strong>{" "}
                      {new Date(event.eventDate).toLocaleDateString()}
                    </p>
                    <p className="focus-location">
                      <strong>Location:</strong>{" "}
                      {event.location || "Not specified"}
                    </p>
                    <p className="focus-participants">
                      <strong>Participants:</strong>{" "}
                      {event.participants || "Not specified"}
                    </p>
                    <p className="focus-capacity">
                      <strong>Capacity:</strong>{" "}
                      {event.capacity || "Not specified"}
                    </p>
                    <p className="focus-type">
                      <strong>Type:</strong> {event.type || "Not specified"}
                    </p>
                    <p className="focus-categories">
                      <strong>Categories:</strong>{" "}
                      {event.category?.join(", ") || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedEvent.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center">
                  <img
                    src={
                      selectedEvent.image || "../../assets/images/default.png"
                    }
                    className="img-fluid"
                    alt={selectedEvent.title || "Event image"}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p>{selectedEvent.title}</p>
                </div>
                <p>{selectedEvent.description}</p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(selectedEvent.eventDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {selectedEvent.location || "Not specified"}
                </p>
                <p>
                  <strong>Participants:</strong>{" "}
                  {selectedEvent.participants || "Not specified"}
                </p>
                <p>
                  <strong>Capacity:</strong>{" "}
                  {selectedEvent.capacity || "Not specified"}
                </p>
                <p>
                  <strong>Type:</strong> {selectedEvent.type || "Not specified"}
                </p>
                <p>
                  <strong>Categories:</strong>{" "}
                  {selectedEvent.category?.join(", ") || "Not specified"}
                </p>
              </div>
              <div className="modal-footer">
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Previous;
