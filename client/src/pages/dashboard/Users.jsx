import React from "react";
import customFetch from "../../utils/customFetch";

const Users = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await customFetch.get("/user");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container-fluid p-5">
      <div className="d-flex justify-content-between">
        <h1 className="mb-4">Users</h1>

        <button className="btn main-btn mb-3 text-dark">Create Users</button>
      </div>
      <div className="container-fluid ">
        <div className="row g-3">
          {users.length > 0 ? (
            users.map((user) => (
              <div className="col-md-4">
                <div className="card event-card h-100">
                  <img
                    src={user.image}
                    alt={user.firstname}
                    className="event-card-image card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {user.firstname}
                      {user.lastName}
                    </h5>
                    <p className="card-text">
                      <strong>Contact Number:</strong>
                      {user.contactNumber}
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {user.location}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-users-message">
              <p>No users found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
