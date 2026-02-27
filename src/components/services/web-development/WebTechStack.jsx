import React from "react";
import { FiCheckCircle, FiZap, FiShield, FiCpu, FiGlobe } from "react-icons/fi";

const WebTechStack = () => {
  return (
    <section className="py-5 bg-navy text-white overflow-hidden">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 text-white">The Technologies <span className="text-cyan">We Master</span></h2>
            <p className="opacity-75 mb-4 text-white">We use the latest frameworks to ensure your website is fast, SEO-friendly, and secure.</p>
            <ul className="list-unstyled">
              {["Next.js & React", "Node.js & Express", "MongoDB & MySQL", "Bootstrap"].map((tech, i) => (
                <li key={i} className="mb-2 d-flex align-items-center gap-2">
                  <FiCheckCircle className="text-yellow" /> {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0">
            <div className="row g-3">
              {[
                { label: "Performance", icon: <FiZap /> },
                { label: "Security", icon: <FiShield /> },
                { label: "Scalable", icon: <FiCpu /> },
                { label: "Global SEO", icon: <FiGlobe /> },
              ].map((item, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift">
                    <div className="text-cyan mb-2" style={{ fontSize: "30px" }}>{item.icon}</div>
                    <p className="small mb-0 fw-bold">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebTechStack;