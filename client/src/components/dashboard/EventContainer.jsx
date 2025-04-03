import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
};

const EventContainer = ({ events }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
    setTitle("");
    setDescription("");
    setEventDate(new Date());
    setLocation("");
    setCapacity(0);
    setPrice(0);
    setType("");
    setOrganizer("");
    setRegistrationStart(new Date());
    setRegistrationEnd(new Date());
    setRegistrationLink("");
    setCategories([]);
    setImage(null);
    setImagePreview(null);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [registrationStart, setRegistrationStart] = useState(new Date());
  const [registrationEnd, setRegistrationEnd] = useState(new Date());
  const [registrationLink, setRegistrationLink] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      eventDate,
      location,
      capacity,
      price,
      type,
      organizer,
      registrationStart,
      registrationEnd,
      registrationLink,
      categories,
      image,
    });
  };

  return (
    <div className="container-fluid">
      <button className="btn main-btn mb-3 text-dark" onClick={openCreateModal}>
        Create Event
      </button>
      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
      {showCreateModal && (
        <Modal
          show={showCreateModal}
          onHide={closeCreateModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Event
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <h3>Create a New Event</h3> */}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventName"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventDescription">Description</label>
                <textarea
                  className="form-control"
                  id="eventDescription"
                  rows="4"
                  placeholder="Enter event description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventLocation">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventLocation"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventCapacity">Capacity</label>
                <input
                  type="number"
                  className="form-control"
                  id="eventCapacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventPrice">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="eventPrice"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventType">Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventType"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventOrganizer">Organizer</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventOrganizer"
                  value={organizer}
                  onChange={(e) => setOrganizer(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="registrationStart">Registration Start</label>
                <input
                  type="date"
                  className="form-control"
                  id="registrationStart"
                  value={registrationStart}
                  onChange={(e) => setRegistrationStart(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="registrationEnd">Registration End</label>
                <input
                  type="date"
                  className="form-control"
                  id="registrationEnd"
                  value={registrationEnd}
                  onChange={(e) => setRegistrationEnd(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="registrationLink">Registration Link</label>
                <input
                  type="url"
                  className="form-control"
                  id="registrationLink"
                  value={registrationLink}
                  onChange={(e) => setRegistrationLink(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="categories">Categories</label>
                <input
                  type="text"
                  className="form-control"
                  id="categories"
                  placeholder="Enter categories separated by commas"
                  value={categories.join(", ")}
                  onChange={(e) =>
                    setCategories(
                      e.target.value.split(",").map((cat) => cat.trim())
                    )
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventImage">Event Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="eventImage"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImage(file);
                      setImagePreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </div>

              {imagePreview && (
                <div className="form-group">
                  <label>Image Preview:</label>
                  <img
                    src={imagePreview}
                    alt="Event Preview"
                    className="img-fluid mt-2"
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary mt-3">
                Create Event
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default EventContainer;
