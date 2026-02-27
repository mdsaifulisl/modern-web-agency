import React from "react";
import { FiSearch, FiLayers, FiCode, FiZap } from "react-icons/fi";

const processes = [
  { step: "01", title: "Discovery", desc: "We deep dive into your vision to align our technical goals with your business objectives.", icon: <FiSearch size={22} /> },
  { step: "02", title: "Planning", desc: "Architecting the perfect tech stack and roadmap to ensure future scalability.", icon: <FiLayers size={22} /> },
  { step: "03", title: "Development", desc: "Writing clean, efficient, and maintainable code with continuous quality assurance.", icon: <FiCode size={22} /> },
  { step: "04", title: "Launch", desc: "Final optimization and seamless deployment, followed by post-launch performance checks.", icon: <FiZap size={22} /> },
];

const WebProcess = () => {
  return (
    <section className="py-5 bg-off-white overflow-hidden">
      <div className="container py-5 position-relative">
        <div className="text-center mb-5">
          <div className="d-inline-block text-cyan fw-bold small text-uppercase ls-2 mb-3">Process workflow</div>
          <h2 className="display-5 fw-bold text-navy mb-3">Our Strategic Journey</h2>
        </div>
        <div className="row g-4 justify-content-center position-relative">
          <div className="position-absolute top-50 start-0 w-100 d-none d-lg-block border-top border-2 border-dashed border-cyan opacity-20" style={{ transform: "translateY(-50px)" }}></div>
          {processes.map((item, idx) => (
            <div className="col-md-6 col-lg-3" key={idx} style={{ zIndex: 1 }}>
              <div className="process-card position-relative p-4 h-100 bg-white border-0 shadow-sm rounded-4 hover-lift transition-all">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div className="p-3 bg-off-white text-cyan rounded-3 shadow-sm">{item.icon}</div>
                  <div className="step-number d-flex align-items-center justify-content-center bg-navy text-white fw-bold rounded-circle shadow-sm" style={{ width: "35px", height: "35px", fontSize: "0.8rem" }}>{item.step}</div>
                </div>
                <h5 className="fw-bold text-navy mb-3">{item.title}</h5>
                <p className="text-mid-gray mb-0 lh-base" style={{ fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProcess;