import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faBook,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
const Key = () => {
  return (
    <section className="section-key">
      <div className="container-fluid px-6">
        <h3 className="heading-tertiary text-white">Three Key Components</h3>
        <p className="title-p text-white">
          Arcadia’s methodology revolves around fostering a continuous cycle of
          dialogue, knowledge sharing, and innovation, to empower stakeholders
          and drive meaningful sustainability outcomes. Our key pillars include:
        </p>
      </div>
      <div className="container-fluid px-6">
        <div className="row">
          <div className="col-md-4">
            <div className="key-card">
              <div className="key-header text-center">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faCalendar} className="key-icon" />
                </div>
                <h4 className="key-title">Events</h4>
              </div>

              <p className="key-text">
                Arcadia serves as a platform that brings together youth,
                businesses, researchers, governments, and industry experts
                through forums, summits, workshops, and hackathons. These events
                are designed to foster meaningful dialogue on sustainability
                challenges, share best practices, explore emerging policies, and
                discuss innovative solutions. By connecting diverse
                stakeholders, we facilitate knowledge exchange and the
                exploration of new topics critical to driving the sustainability
                agenda forward.
              </p>

              <p className="key-text">
                Additionally, our hackathons and campaign-driven projects enable
                companies to engage with young innovators to solve pressing
                challenges, support advocacy efforts, and amplify information
                and education campaigns. Through these collaborative
                initiatives, Arcadia empowers stakeholders to co-create
                actionable solutions that address real-world sustainability
                issues, ensuring progress toward a more sustainable future.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="key-card">
              <div className="key-header text-center">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faBook} className="key-icon" />
                </div>
                <h4 className="key-title">Knowledge Portal</h4>
              </div>
              <p className="key-text">
                Arcadia serves as a centralized resource for cutting-edge
                research, actionable insights, and real-world case studies that
                drive the transition to a circular economy.
              </p>
              <p className="key-text">
                Our hub offers a wealth of knowledge, including detailed
                reports, expert recommendations, and impactful manifestos,
                providing businesses, policymakers, and innovators with the
                tools they need to implement sustainable practices. By
                synthesizing global best practices and emerging trends, we
                empower stakeholders to make informed decisions and foster
                sustainable solutions that address pressing environmental
                challenges
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="key-card">
              <div className="key-header text-center">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faPeopleArrows} className="key-icon" />
                </div>
                <h4 className="key-title">
                  Innovations and Solutions Exchange
                </h4>
              </div>
              <p className="key-text">
                Arcadia collaborates with forward-thinking companies to showcase
                cutting-edge solutions and technologies that accelerate the
                transition to a circular economy. Through our platform, we
                connect innovators, businesses, and industry leaders to exchange
                ideas and showcase scalable, impactful solutions that address
                sustainability challenges. We actively support initiatives that
                promote green growth and sustainable development, driving the
                adoption of advanced technologies and best practices across
                sectors. By fostering collaboration, we enable stakeholders to
                implement transformative strategies that reduce environmental
                impact and contribute to a sustainable, circular future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Key;
