import React from "react";
import { FiCheckCircle, FiGlobe, FiZap, FiPieChart, FiTarget } from "react-icons/fi";

const SeoPerformance = () => {
  return (
    <section className="py-5 bg-navy text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
             <h2 className="fw-bold mb-4 text-white">How We Boost Your <br/><span className="text-cyan">Digital Authority</span></h2>
             <p className="opacity-75 mb-4 text-white">
               SEO is not a one-time task; it&apos;s a continuous process of improvement. We focus on sustainable growth that keeps you ahead of the competition.
             </p>
             <ul className="list-unstyled">
              {["Competitor Analysis", "Quality Backlink Building", "Content Strategy", "Monthly Progress Reports"].map((item, i) => (
                <li key={i} className="mb-3 d-flex align-items-center gap-3">
                  <FiCheckCircle className="text-yellow" size={20} />
                  <span className="fw-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                { label: "Global Reach", icon: <FiGlobe className="text-cyan" /> },
                { label: "Fast Indexing", icon: <FiZap className="text-yellow" /> },
                { label: "Data Driven", icon: <FiPieChart className="text-white" /> },
                { label: "High ROI", icon: <FiTarget className="text-cyan" /> },
              ].map((item, idx) => (
                <div className="col-6" key={idx}>
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 h-100">
                    <div className="mb-2" style={{ fontSize: "35px" }}>{item.icon}</div>
                    <h6 className="mb-0 text-white">{item.label}</h6>
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

export default SeoPerformance;