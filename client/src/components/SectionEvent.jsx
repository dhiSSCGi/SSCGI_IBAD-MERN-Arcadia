import React from "react";

const SectionEvent = () => {
  return (
    <section className="section-events">
      <div className="container-fluid px-6">
        <h3 className="heading-tertiary">EVENTS & COLLABORATION</h3>
        <p className="title-p text-dark">
          Comprehensive events including forums, panel discussions, deep-dive
          dialogues, and hackathons to foster discourse and drive actionable
          sustainability solutions.
        </p>
      </div>
      <div className="container-fluid px-6">
        <div className="row margin-bottom d-flex align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-7">
            <div className="card focus-card">
              <div className="impact-text-box">
                <h3 className="heading-fourth ">
                  <strong>DEEP DIVE DIALOGUES</strong>
                </h3>
                <p className="impact-description">
                  Our Deep Dive Dialogue sessions are structured discussions
                  designed to encourage stakeholders to share their insights and
                  experiences on the challenges and opportunities in
                  sustainability. The sessions will be focus on sharing
                  on-the-ground challenges, case studies, good and bad
                  practices, as well as solutions, technologies, and best
                  practices adopted by other countries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="impact-img-box">
              <img
                src="../../assets/images/DeepDive_img.png"
                className="img-fluid event-img"
                alt="Deep Dive event"
              />
            </div>
          </div>
        </div>
        <div className="row margin-bottom d-flex align-items-center">
          <div className="col-md-5">
            <div className="impact-img-box">
              <img
                src="../../assets/images/workshop-img.png"
                className="img-fluid event-img"
                alt="Work Shop event"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card focus-card">
              <div className="impact-img-box">
                <div className="impact-text-box">
                  <h3 className="heading-fourth">
                    <strong>Hackathons & Campaign-Based Events</strong>
                  </h3>
                  <p className="impact-description">
                    Arcadia organizes hackathons and campaign-driven events
                    designed to bring together innovative minds and passionate
                    advocates to solve real-world sustainability challenges.
                    These immersive, hands-on sessions invite companies, young
                    leaders, and experts to collaborate in developing creative
                    solutions, while aligning with corporate sustainability
                    goals and advocacy efforts. Through these events, we foster
                    the rapid prototyping of ideas, accelerate problem-solving,
                    and drive the development of actionable strategies for
                    environmental and social impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEvent;
