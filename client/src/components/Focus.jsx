import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PlasticPathwaysModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>FLAGSHIP</b> PROJECT #1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>PLASTIC PATHWAYS</h3>
        <h5>
          <em>Leading the Way in Plastic Reuse and Reduction</em>
        </h5>

        <p>
          <b>About:</b> This project is focused on addressing the growing
          plastic pollution crisis by promoting the reduction, reuse, and
          recycling of plastics. This initiative collaborates with retail
          companies, e-commerce platforms, and manufacturers to explore
          innovative packaging alternatives, establish circular systems for
          plastic recovery, and reduce reliance on single-use plastics. Arcadia
          also drives public awareness campaigns and advocates for policy
          changes to enhance plastic waste management systems in the
          Philippines.
        </p>
        <br />
        <p>
          <b>Focus:</b> Circular plastic systems, sustainable packaging, waste
          reduction
        </p>
        <p>
          <b>Target Audience: </b>Retailers, manufacturers, policymakers,
          sustainability leaders
        </p>
      </Modal.Body>
    </Modal>
  );
}

function TechCycleModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>FLAGSHIP</b> PROJECT #2
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>TechCycle</h3>
        <h5>
          <em>Closing the Loop on E-Waste</em>
        </h5>

        <p>
          <b>About:</b> TechCycle Project is designed to address the complex
          challenges posed by discarded electronic devices. Through partnerships
          with technology companies, recyclers, and regulatory bodies, Arcadia
          works to develop sustainable e-waste management solutions that
          emphasize recycling, reuse, and responsible disposal. This project
          also raises awareness about the environmental and health risks of
          improper e-waste disposal and advocates for extended producer
          responsibility.
        </p>
        <br />
        <p>
          <b>Focus:</b> E-waste recycling, responsible disposal, circular
          technology systems
        </p>
        <p>
          <b>Target Audience: </b>Electronics manufacturers, recyclers,
          government regulators
        </p>
      </Modal.Body>
    </Modal>
  );
}

function FoodForwardModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b>FLAGSHIP</b> PROJECT #3
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>FOOD FORWARD</h3>
        <h5>
          <em>From Food Waste to Resource</em>
        </h5>

        <p>
          <b>About:</b> Arcadia ’s Food Waste Project aims to minimize food
          waste at every level of the supply chain—from production to
          consumption. Through partnerships with businesses, local governments,
          and non-profits, we promote efficient food waste management practices,
          including redistributing surplus food to communities in need, creating
          sustainable business models for food recovery, and supporting
          innovations in waste-to-energy solutions.
        </p>
        <br />
        <p>
          <b>Focus:</b> Supply chain optimization, food recovery,
          waste-to-energy innovations
        </p>
        <p>
          <b>Target Audience: </b>Restaurants, food manufacturers, retailers,
          municipal governments
        </p>
      </Modal.Body>
    </Modal>
  );
}
const Focus = () => {
  const [showPlasticModal, setShowPlasticModal] = React.useState(false);
  const [showTechModal, setShowTechModal] = React.useState(false);
  const [showFoodModal, setShowFoodModal] = React.useState(false);

  function handlePlasticModal() {
    setShowPlasticModal(true);
  }

  function handleTechModal() {
    setShowTechModal(true);
  }

  function handleFoodModal() {
    setShowFoodModal(true);
  }
  return (
    <>
      <section className="section-focus">
        <div className="container">
          <h3 className="heading-tertiary">
            Our Focus in the Philippines Context
          </h3>
          <p className="key-text">
            Our flagship projects bring together key stakeholders to address
            pressing waste challenges through collaborative dialogue and
            innovation. By assessing on-the-ground realities and identifying
            gaps, we harness feedback, insights, and our network of experts to
            develop actionable frameworks. These initiatives provide practical,
            scalable solutions and recommendations for companies and communities
            to effectively tackle waste management issues, fostering sustainable
            change and advancing circular economy practices.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/plasticrecycle.png"
                    className="focus-img"
                    alt="Market analysis insights"
                  />
                </div>

                <div className="focus-text-box">
                  <h5 className="">PLASTIC PATHWAYS</h5>
                  <p className="focus-description">
                    Leading the Way in Plastic Reuse & Reduction
                  </p>
                </div>
                <Button className="btn sub-btn" onClick={handlePlasticModal}>
                  View
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/techcycle.png"
                    className="focus-img"
                    alt="Market analysis insights"
                  />
                </div>

                <div className="focus-text-box">
                  <h5 className="">TECHCYCLE</h5>
                  <p className="focus-description">
                    Closing the Loop on E-Waste
                  </p>
                </div>
                <Button className="btn sub-btn" onClick={handleTechModal}>
                  View
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card focus-card">
                <div className="focus-img-box">
                  <img
                    src="../../assets/images/foodforward.png"
                    className="focus-img"
                    alt="Market analysis insights"
                  />
                </div>

                <div className="focus-text-box">
                  <h5 className="">FOOD FORWARD</h5>
                  <p className="focus-description">
                    From Food Waste to Resource
                  </p>
                </div>
                <Button className="btn sub-btn" onClick={handleFoodModal}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlasticPathwaysModal
        show={showPlasticModal}
        onHide={() => setShowPlasticModal(false)}
      />

      <TechCycleModal
        show={showTechModal}
        onHide={() => setShowTechModal(false)}
      />

      <FoodForwardModal
        show={showFoodModal}
        onHide={() => setShowFoodModal(false)}
      />
    </>
  );
};

export default Focus;
