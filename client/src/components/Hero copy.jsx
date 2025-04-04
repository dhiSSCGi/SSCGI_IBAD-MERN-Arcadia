import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  const handleJoinEvent = () => {
    window.location.href = "/events#section-upcoming-events";
  };

  return (
    <section className="section-hero">
      <div className="hero row">
        <div className="col-sm-7">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Driving Progress Towards a Circular Economy
            </h1>
            <p className="hero-description">
              DH Planet is a sustainability hub empowering individuals and
              businesses to adopt eco-friendly practices and drive positive
              environmental change.
            </p>
            <button
              type="button"
              className="btn main-btn"
              onClick={handleJoinEvent}
            >
              Join Event
            </button>
          </div>
        </div>
        <div className="col-sm-5 d-none d-sm-block">
          <img src={heroImage} className="hero-img" alt="earth" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
