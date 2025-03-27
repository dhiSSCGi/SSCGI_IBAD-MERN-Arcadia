import React from "react";

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-8 offset-md-2">
            <h3 className="heading-tertiary">
              About <span className="highlight">Arcadia</span>
            </h3>
            <div className="about-paragraphs">
              <p className="text-dark">
                <em className="highlight-title">Arcadia</em> is a sustainability
                hub for companies committed to advancing sustainability
                practices and accelerating the transition to a circular economy.
              </p>
              <p className="about-text text-dark">
                As a hub, it facilitates the exchange of leading sustainability
                practices and resources, fostering the development of cost-
                effective and efficient solutions to sustainability challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
