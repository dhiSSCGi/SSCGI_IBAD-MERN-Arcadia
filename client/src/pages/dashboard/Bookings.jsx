import React from "react";
import customFetch from "../../utils/customFetch";
const Bookings = () => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await customFetch.get("/booking");
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Bookings</h1>
      <div className="table-responsive">
        <table className="table table-bordered vh-100">
          <thead className="table-header">
            <tr>
              <th>Booking ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Event Title</th>
              <th>Event Date</th>
              <th>Event Location</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking._id}</td>
                  <td>
                    {booking.userId.firstName} {booking.userId.lastName}
                  </td>
                  <td>{booking.userId.email}</td>
                  <td>{booking.eventId.title}</td>
                  <td>
                    {new Date(booking.eventId.eventDate).toLocaleDateString()}
                  </td>
                  <td>{booking.eventId.location}</td>
                  <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
