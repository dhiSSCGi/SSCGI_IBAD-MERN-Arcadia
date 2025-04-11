import React, { useState } from "react";
import customFetch from "../../utils/customFetch";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Solutions = () => {
  const [solutions, setSolutions] = React.useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [selectedSolution, setSelectedSolution] = useState(null);

  const fetchSolutions = async () => {
    try {
      const response = await customFetch.get("/solution");
      setSolutions(response.data.solutions);
    } catch (error) {
      console.error("Error fetching solutions:", error);
    }
  };
  React.useEffect(() => {
    fetchSolutions();
  }, []);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const openCreateModal = () => {
    setShowCreateModal(true);
  };

  const closeCreateModal = () => {
    setImage(null);

    setShowCreateModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      if (image) {
        formData.append("image", image);
      }

      const response = await customFetch.post("/solution", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Solution created successfully!");
      fetchSolutions();
      closeCreateModal();
    } catch (error) {
      toast.error("Error");

      console.error("Error creating Solution:", error);
    }
  };

  async function handleDeleteSolution(solutionId) {
    try {
      await customFetch.delete(`/solution/delete/${solutionId}`);
      toast.success("Solution deleted successfully!");
      fetchSolutions();
    } catch (error) {
      console.error("Error deleting solution:", error);
      alert("Failed to delete solution. Please try again.");
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
      formData.append("title", title);
      formData.append("description", description);

      formData.append("image", image);

      const response = await customFetch.patch(
        `/solution/update/${selectedSolution._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Solution updated successfully!");
      fetchSolutions();
      setShowUpdateModal(false);
      setTitle("");
      setDescription("");

      setImage(null);
      setSelectedSolution(null);
    } catch (error) {
      toast.error("Error updating solution");
      console.error("Error updating solution:", error);
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="d-flex justify-content-between">
        <h1 className="mb-4">Solutions</h1>

        <button
          className="btn main-btn mb-3 text-dark"
          onClick={openCreateModal}
        >
          Create Solutions
        </button>
      </div>
      <div className="container-fluid ">
        <div className="row g-3">
          {solutions.length > 0 ? (
            solutions.map((solution) => (
              <div className="col-md-4" key={solution._id}>
                <div className="card event-card h-100">
                  <img
                    src={solution.image}
                    alt={solution.title || "Solution"}
                    className="event-card-image card-img-top img-fluid"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{solution.title || "N/A"}</h5>
                    <p className="card-text">
                      <strong>Description:</strong>
                      {solution.description || "N/A"}
                    </p>

                    <div className="mt-3">
                      <div className="event-card-btns">
                        <div className="col">
                          <button
                            className="btn btn-warning event-card-btn"
                            onClick={() => {
                              setSelectedSolution(solution);
                              setTitle(solution.title || "");
                              setDescription(solution.description || "");

                              setImage(solution.image || null);
                              setImagePreview(solution.image || null);

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
                                    Are you sure you want to delete this
                                    solution?
                                  </p>
                                  <div className="d-flex justify-content-center gap-2">
                                    <button
                                      className="btn btn-danger btn-sm"
                                      onClick={() => {
                                        handleDeleteSolution(solution._id);
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
            <div className="no-solutions-message">
              <p>No Partners found</p>
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
              Create Solution
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
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
              Update Solution
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  className="form-control"
                  id="title"
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="text-white mb-1" htmlFor="notes">
                  Description
                </label>
                <textarea
                  id="notes"
                  value={description}
                  name="notes"
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image:
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
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

              {image && (
                <div className="mb-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="img-thumbnail"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
              )}
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

export default Solutions;
