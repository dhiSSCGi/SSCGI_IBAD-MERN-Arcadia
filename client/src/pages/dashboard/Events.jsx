import React from "react";
import customFetch from "../../utils/customFetch";

const Events = () => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await customFetch.get("/event");
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);

    const date = eventDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const time = eventDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    return { date, time };
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Events</h1>
      <div className="table-responsive">
        <table className="table  table-bordered vh-100">
          <thead className="table-header">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event) => {
                const { date, time } = formatEventDate(event.eventDate);
                return (
                  <tr key={event._id}>
                    <td>{event.title}</td>
                    <td>{event.description}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{event.location}</td>
                    <td>{event.capacity}</td>
                    <td>{event.type}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
