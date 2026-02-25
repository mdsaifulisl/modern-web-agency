import React from "react";
import { FiTarget, FiEye } from "react-icons/fi";

const MissionVision = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="row g-4 text-center text-md-start">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-5 rounded-4 h-100 hover-lift bg-off-white">
              <div
                className="service-icon-box2 mb-4 bg-cyan text-white mx-auto mx-md-0 d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px", borderRadius: "12px" }}
              >
                <FiTarget size={30} />
              </div>
              <h3 className="fw-bold text-navy mb-3">Our Mission</h3>
              <p className="mb-0">
                To empower businesses by providing cutting-edge digital
                solutions that drive sustainable growth and market leadership.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-5 rounded-4 h-100 hover-lift bg-off-white">
              <div
                className="service-icon-box2 mb-4 bg-yellow text-navy mx-auto mx-md-0 d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px", borderRadius: "12px" }}
              >
                <FiEye size={30} />
              </div>
              <h3 className="fw-bold text-navy mb-3">Our Vision</h3>
              <p className="mb-0">
                To be the global benchmark for digital excellence, where
                creativity meets data-driven strategy to create impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
