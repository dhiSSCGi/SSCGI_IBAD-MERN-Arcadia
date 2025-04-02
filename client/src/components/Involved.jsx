import React, { useState } from "react";
const InvolvedSidebar = ({ onSelectInvolve }) => {
  return (
    <div className="involved-sidebar">
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li
          onClick={() => onSelectInvolve("1")}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
          className="d-flex "
        >
          <p className="involved-number">01</p>
          Collaborative Dialogue and Knowledge Sharing
        </li>
        <li
          onClick={() => onSelectInvolve("2")}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
          className="d-flex"
        >
          <p className="involved-number">02</p>
          Innovation and Solution Development
        </li>
        <li
          onClick={() => onSelectInvolve("3")}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
          className="d-flex"
        >
          <p className="involved-number">03</p>
          Supporting and Adopting Practical Solutions
        </li>
        <li
          onClick={() => onSelectInvolve("4")}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
          className="d-flex"
        >
          <p className="involved-number">04</p>
          Advocacy and Policy Engagement
        </li>
        <li
          onClick={() => onSelectInvolve("5")}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #3f6d2c",
          }}
          className="d-flex"
        >
          <p className="involved-number">05</p>
          Resource and Funding Support
        </li>
      </ul>
    </div>
  );
};

const InvolvedContent = ({ selectedInvolved }) => {
  return (
    <div className="container p-3">
      {selectedInvolved === "1" && (
        <div className="container p-3">
          <h5 className="involved-title">
            Collaborative Dialogue and Knowledge Sharing
          </h5>
          <div className="paragraph">
            <p className="paragraph-title">
              Participation in Forums and Summits
            </p>
            <p>
              Stakeholders, including businesses, governments, NGOs,
              researchers, and community leaders, can engage in Arcadia’s
              dialogues, workshops, and summits to discuss real-world waste
              management challenges, exchange insights, and share case studies.
            </p>
          </div>
          <div className="paragraph">
            <p className="paragraph-title">
              Input for Position Papers and Reports
            </p>
            <p>
              By contributing their knowledge, data, and expertise, stakeholders
              can help shape Arcadia’s research outputs (e.g., waste reports,
              market analyses), ensuring these documents reflect on-the-ground
              realities and emerging trends.
            </p>
          </div>
        </div>
      )}
      {selectedInvolved === "2" && (
        <div className="container p-3">
          <h5 className="involved-title">
            Innovation and Solution Development
          </h5>
          <div className="paragraph">
            <p className="paragraph-title">
              Partnering in Hackathons and Campaign-Based Projects
            </p>
            <p>
              Companies and government bodies can team up with youth groups,
              startups, and sustainability leaders in hackathons and campaigns
              to co-develop innovative solutions to waste management and
              circular economy challenges.
            </p>
          </div>
          <div className="paragraph">
            <p className="paragraph-title">
              Technology Demonstration and Pilot Projects
            </p>
            <p>
              Stakeholders can collaborate on pilot programs that test new waste
              management technologies or sustainable practices, using Arcadia’s
              platform to showcase scalable solutions.
            </p>
          </div>
        </div>
      )}
      {selectedInvolved === "3" && (
        <div className="container p-3">
          <h5 className="involved-title">
            Supporting and Adopting Practical Solutions
          </h5>
          <div className="paragraph">
            <p className="paragraph-title">
              Participation in the Solutions Fair
            </p>
            <p>
              Stakeholders can engage in Arcadia’s Solutions Fair by showcasing
              their innovations, learning about cutting-edge technologies, and
              exploring partnerships that can drive the adoption of sustainable
              practices across industries.
            </p>
          </div>
          <div className="paragraph">
            <p className="paragraph-title">
              Adoption of Best Practices and Frameworks
            </p>
            <p>
              Government bodies, corporations, and other partners can use the
              action frameworks and recommendations developed by Arcadia to
              implement sustainable waste management strategies in their
              operations.
            </p>
          </div>
        </div>
      )}
      {selectedInvolved === "4" && (
        <div className="container p-3">
          <h5 className="involved-title">Advocacy and Policy Engagement</h5>
          <div className="paragraph">
            <p className="paragraph-title">Advocating for Policy Change</p>
            <p>
              Through Arcadia’s initiatives, stakeholders can support policy
              advocacy efforts that promote better waste management regulations
              and incentivize the circular economy, ensuring that local and
              national governments adopt sustainable practices.
            </p>
          </div>
          <div className="paragraph">
            <p className="paragraph-title">Public Awareness Campaigns</p>
            <p>
              Companies and governments can collaborate on public education and
              awareness campaigns led by Arcadia, aimed at driving behavioral
              change among consumers and businesses regarding waste reduction,
              reuse, and recycling.
            </p>
          </div>
        </div>
      )}
      {selectedInvolved === "5" && (
        <div className="container p-3">
          <h5 className="involved-title">Resource and Funding Support</h5>
          <div className="paragraph">
            <p className="paragraph-title">
              Funding and Sponsorship Opportunities
            </p>
            <p>
              Stakeholders, especially businesses and development agencies, can
              support Arcadia’s projects through funding or sponsorships,
              helping to expand the reach of waste management programs and
              innovation.
            </p>
          </div>
          <div className="paragraph">
            <p className="paragraph-title">Leveraging Expertise</p>
            <p>
              Experts in waste management, sustainability, and technology can
              offer pro bono consulting or advisory roles to assist Arcadia in
              crafting more impactful programs.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
const Involved = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="container p-5">
      <h3 className="involved-heading">
        How to Get <b>Involved</b>
      </h3>

      <div className="d-flex flex-row">
        <InvolvedSidebar onSelectInvolve={setSelected} />
        <InvolvedContent selectedInvolved={selected} />
      </div>
    </div>
  );
};

export default Involved;
