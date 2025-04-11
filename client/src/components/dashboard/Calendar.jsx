import React, { useEffect, useRef, useState } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotMonth,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import "./Calendar.css";
import customFetch from "../../utils/customFetch";
import { Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
const Calendar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [view, setView] = useState("Month");
  const [startDate, setStartDate] = useState(DayPilot.Date.today());
  const [events, setEvents] = useState([]);

  const [dayView, setDayView] = useState();
  const [weekView, setWeekView] = useState();
  const [monthView, setMonthView] = useState();
  const categoryOptions = [
    { value: "Forums", label: "Forums" },
    { value: "Panel Dicussions", label: "Panel Dicussions" },
    { value: "Fireside Chats", label: "Fireside Chats" },
    { value: "Summits", label: "Summits" },
    { value: "Workshops", label: "Workshops" },
    { value: "Hackathons", label: "Hackathons" },
  ];

  const [eventOrganizers, setEventOrganizers] = React.useState([]);

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
  const [eventData, setEventData] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const formatDateToYYYYMMDD = (date) => {
    const year = date.getYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDay().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onTimeRangeSelected = async (args) => {
    const dp = args.control;
    dp.clearSelection();

    const formattedDate = formatDateToYYYYMMDD(args.start);

    setEventDate(formattedDate);

    setShowCreateModal(true);
  };

  const fetchEvents = async () => {
    try {
      const response = await customFetch.get("/event");

      const allEvents = response.data.events;

      const myEvents =
        user.role === "admin"
          ? allEvents
          : allEvents.filter((event) => event.organizer === user._id);

      const data = myEvents.map((event) => ({
        id: event._id,
        text: event.title,
        start: event.eventDate,
        end: event.eventDate,
        backColor:
          event.type === "DEEP DIVE DIALOGUES"
            ? "limegreen"
            : event.type === "Hackathons & Campaign-Based Events"
            ? "lightblue"
            : "#d5663e",
      }));

      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchOrganizers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("eventDate", eventDate);
      formData.append("location", location);
      formData.append("capacity", capacity);
      formData.append("price", price);
      formData.append("type", type);
      formData.append("organizer", organizer);
      formData.append("registrationStart", registrationStart);
      formData.append("registrationEnd", registrationEnd);
      formData.append("registrationLink", registrationLink);
      formData.append("eventDataLink", eventData);

      formData.append("categories", JSON.stringify(categories));
      if (image) {
        formData.append("image", image);
      }

      // console.log(JSON.stringify(categories));
      const response = await customFetch.post("/event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Event created successfully!");
      fetchEvents();
      closeCreateModal();
    } catch (error) {
      toast.error("Error");

      console.error("Error creating event:", error);
    }
  };

  const fetchOrganizers = async () => {
    try {
      const response = await customFetch.get("/user/organizers");
      setEventOrganizers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
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
    setEventData("");

    setCategories([]);
    setImage(null);
    setImagePreview(null);
  };

  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);

    const date = eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return date;
  };
  const formatDateToMonthDayYear = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className={"container-fluid p-4"}>
      <div className="row">
        <div className="col-md-3">
          <div className={"container mx-0"}>
            <DayPilotNavigator
              selectMode={view}
              showMonths={2}
              skipMonths={2}
              onTimeRangeSelected={(args) => setStartDate(args.day)}
              events={events}
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className={"container mx-0"}>
            {/* <div className={"toolbar"}>
              <div className={"toolbar-group"}>
                <button
                  onClick={() => setView("Day")}
                  className={view === "Day" ? "selected" : ""}
                >
                  Day
                </button>
                <button
                  onClick={() => setView("Week")}
                  className={view === "Week" ? "selected" : ""}
                >
                  Week
                </button>
                <button
                  onClick={() => setView("Month")}
                  className={view === "Month" ? "selected" : ""}
                >
                  Month
                </button>
              </div>
              <button
                onClick={() => setStartDate(DayPilot.Date.today())}
                className={"standalone"}
              >
                Today
              </button>
            </div> */}

            <DayPilotCalendar
              viewType={"Day"}
              startDate={startDate}
              events={events}
              visible={view === "Day"}
              durationBarVisible={false}
              onTimeRangeSelected={onTimeRangeSelected}
              controlRef={setDayView}
            />
            <DayPilotCalendar
              viewType={"Week"}
              startDate={startDate}
              events={events}
              visible={view === "Week"}
              durationBarVisible={false}
              onTimeRangeSelected={onTimeRangeSelected}
              controlRef={setWeekView}
            />
            <DayPilotMonth
              startDate={startDate}
              events={events}
              visible={view === "Month"}
              eventBarVisible={false}
              onTimeRangeSelected={onTimeRangeSelected}
              controlRef={setMonthView}
            />
          </div>
        </div>
      </div>

      {showCreateModal && (
        <Modal
          show={showCreateModal}
          onHide={closeCreateModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create Event on {formatEventDate(eventDate)}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventName"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
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
                  required
                />
              </div>
              {/* 
              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="eventLocation">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventLocation"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
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
                  required
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
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventType">Type</label>
                <select
                  className="form-control"
                  id="eventType"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Type
                  </option>

                  <option key="DEEP DIVE DIALOGUES" value="DEEP DIVE DIALOGUES">
                    DEEP DIVE DIALOGUES
                  </option>
                  <option
                    key=" Hackathons & Campaign-Based Events"
                    value="Hackathons & Campaign-Based Events"
                  >
                    Hackathons & Campaign-Based Events
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="eventOrganizer">Organizer</label>
                <select
                  className="form-control"
                  id="eventOrganizer"
                  value={organizer}
                  onChange={(e) => setOrganizer(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Organizer
                  </option>
                  {eventOrganizers.map((org) => (
                    <option key={org._id} value={org._id}>
                      {org.firstName} {org.lastName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="registrationStart">Registration Start</label>
                <input
                  type="date"
                  className="form-control"
                  id="registrationStart"
                  value={registrationStart}
                  onChange={(e) => setRegistrationStart(e.target.value)}
                  required
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
                  required
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
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="eventData">Event Data Link</label>
                <input
                  type="url"
                  className="form-control"
                  id="eventData"
                  value={eventData}
                  onChange={(e) => setEventData(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="categories">Categories</label>

                <CreatableSelect
                  options={categoryOptions}
                  isMulti
                  value={categories.map((cat) => ({
                    value: cat,
                    label: cat,
                  }))}
                  onChange={(newValue) =>
                    setCategories(newValue.map((item) => item.value))
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
                  required
                />
              </div>

              {imagePreview && (
                <div className="d-flex justify-content-center">
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
export default Calendar;
