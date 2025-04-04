import React from "react";
import heroImage from "../assets/images/logo.png";

const Hero = () => {
  const handleJoinEvent = () => {
    window.location.href = "/events#section-upcoming-events";
  };

  return (
    <section
      className="hero-section vh-100 text-center position-relative"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center h-100"
        style={{ position: "relative", zIndex: 2 }}
      >
        <img src={heroImage} alt="Hero Logo" className="mb-4" />
        <h1 id="typing-text" className="display-1 fw-bold text-white mb-4">
          Arcadia
        </h1>
        <div className="hero-text-box text-center">
          <h2 className="driving-text mb-3">
            Driving Progress Towards a Circular Economy
          </h2>

          <button
            type="button"
            className="btn btn-primary main-btn px-4 py-2"
            onClick={handleJoinEvent}
          >
            Join Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
