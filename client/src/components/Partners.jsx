import React from "react";
import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
const Partners = () => {
  const [solution, setSolution] = React.useState([]);

  const fetchSolution = async () => {
    try {
      const response = await customFetch.get("/solution");

      setSolution(response.data.solutions);
      console.log(solution);
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
    fetchSolution();
  }, []);
  return (
    <section className="section-upcoming">
      <div className="container-fluid px-6 text-center">
        <h3 className="heading-tertiary text-white">
          Innovations and Solutions Exchange
        </h3>
        <p className="title-p text-white">
          List of Aracadia's Partnered and Accredited Solutions. Contact us if
          you'd like to be included.
        </p>
      </div>
      <div className="container-fluid px-6">
        <div className="row">
          {solution.length > 0 ? (
            solution.map((solution) => (
              <div className="card mb-1">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="partners-image"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="py-3">
                      <p className="lead">{solution.description}</p>
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
    </section>
  );
};

export default Partners;
