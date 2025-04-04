import React from "react";

const Impact = () => {
  return (
    <section className="section-impact">
      <div className="container-fluid px-6">
        <div className="row">
          <div className="col-md-7">
            <div className="impact-text-box">
              <h3 className="heading-tertiary">A Growing Network for Impact</h3>
              <p className="impact-description">
                Our platform provides insights into market trends, consumer
                behavior, and sustainable practices to help you make informed
                decisions and contribute to a greener future. By leveraging
                advanced analytics and data-driven insights, we identify key
                opportunities for businesses to adopt circular economy
                principles. This includes reducing waste, optimizing resource
                usage, and creating sustainable value chains.
              </p>
            </div>
          </div>
          <div className="col-sm-5 d-none d-sm-block">
            <div className="impact-img-box">
              <img
                src="../assets/images/impacts.jpg"
                className="impact-img"
                alt="Market analysis insights"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
