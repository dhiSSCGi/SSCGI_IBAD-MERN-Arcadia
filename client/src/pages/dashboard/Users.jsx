import React, { useState } from "react";
import customFetch from "../../utils/customFetch";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [image, setImage] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await customFetch.get("/user");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("location", location);
      formData.append("contactNumber", contactNumber);

      if (image) {
        formData.append("image", image);
      }

      const response = await customFetch.post("/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("User created successfully!");
      fetchUsers();
      closeCreateModal();
    } catch (error) {
      toast.error("Error");

      console.error("Error creating User:", error);
    }
  };

  async function handleDeleteUser(userId) {
    try {
      await customFetch.delete(`/user/delete/${userId}`);
      toast.success("User deleted successfully!");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  }

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const submitUpdate = async () => {
    try {
      const formData = new FormData();
      console.log(image);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("location", location);
      formData.append("contactNumber", contactNumber);

      formData.append("image", image);

      const response = await customFetch.patch(
        `/user/update/${selectedUser._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("User updated successfully!");
      fetchUsers();
      setShowUpdateModal(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setLocation("");
      setContactNumber("");
      setImage(null);
      setSelectedUser(null);
    } catch (error) {
      toast.error("Error updating user");
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="d-flex justify-content-between">
        <h1 className="mb-4">Users</h1>

        <button
          className="btn main-btn mb-3 text-dark"
          onClick={openCreateModal}
        >
          Create Users
        </button>
      </div>
      <div className="container-fluid ">
        <div className="row g-3">
          {users.length > 0 ? (
            users.map((user) => (
              <div className="col-md-4" key={user._id}>
                <div className="card event-card h-100">
                  <img
                    src={user.avatar}
                    alt={user.firstName || "User"}
                    className="event-card-image card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {`${user.firstName || "N/A"} ${user.lastName || "N/A"}`}
                    </h5>
                    <p className="card-text">
                      <strong>Contact Number:</strong>{" "}
                      {user.contactNumber || "N/A"}
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {user.location || "N/A"}
                    </p>
                    <div className="mt-3">
                      <div className="event-card-btns">
                        <div className="col">
                          <button
                            className="btn btn-warning event-card-btn"
                            onClick={() => {
                              setSelectedUser(user);
                              setFirstName(user.firstName || "");
                              setLastName(user.lastName || "");
                              setEmail(user.email || "");
                              setLocation(user.location || "");
                              setContactNumber(user.contactNumber || "");
                              setImage(user.avatar || null);

                              setShowUpdateModal(true);
                            }}
                          >
                            Update
                          </button>
                        </div>
                        <div className="col">
                          <button
                            className="btn btn-danger event-card-btn"
                            onClick={() => {
                              toast.info(
                                <div>
                                  <p>
                                    Are you sure you want to delete this user?
                                  </p>
                                  <div className="d-flex justify-content-center gap-2">
                                    <button
                                      className="btn btn-danger btn-sm"
                                      onClick={() => {
                                        handleDeleteUser(user._id);
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
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
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
              Create User
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  placeholder="Enter location"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter contact number"
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Profile Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              {image && (
                <div className="mb-3">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="img-thumbnail"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )}

      {showUpdateModal && (
        <Modal
          show={showUpdateModal}
          onHide={() => setShowUpdateModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update User
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="updateFirstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="updateFirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="updateLastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="updateLastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="updateEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="updateEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="updateLocation" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="updateLocation"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="updateContactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="updateContactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
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
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="img-fluid mt-3 rounded shadow-sm"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                )}
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  submitUpdate();
                }}
              >
                Update
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Users;
