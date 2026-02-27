import React from "react";
import { FiLayout, FiServer, FiLayers } from "react-icons/fi";

const features = [
  {
    title: "Frontend Excellence",
    desc: "Creating pixel-perfect, responsive interfaces using React and Next.js.",
    icon: <FiLayout size={28} />,
    color: "bg-cyan",
  },
  {
    title: "Backend Scalability",
    desc: "Robust server-side logic and database management for high-traffic apps.",
    icon: <FiServer size={28} />,
    color: "bg-navy",
  },
  {
    title: "Clean Architecture",
    desc: "Maintainable and well-documented code following modern best practices.",
    icon: <FiLayers size={28} />,
    color: "bg-yellow",
  },
];

const WebFeatures = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-navy">Our Specialized Approach</h2>
          <div className="heading-underline mx-auto mt-2"></div>
        </div>
        <div className="row g-4">
          {features.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-sm p-4 h-100 hover-lift text-center bg-off-white">
                <div className={`mx-auto mb-4 p-3 rounded-circle text-white ${item.color} d-flex align-items-center justify-content-center`} style={{ width: "70px", height: "70px" }}>
                  {item.icon}
                </div>
                <h4 className="fw-bold text-navy mb-3">{item.title}</h4>
                <p className="small mb-0 text-mid-gray">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebFeatures;