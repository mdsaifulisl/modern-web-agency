import React from "react";

const processes = [
  { step: "01", title: "Discovery", desc: "Understanding your vision and market." },
  { step: "02", title: "Strategy", desc: "Planning the architecture and roadmap." },
  { step: "03", title: "Execution", desc: "High-quality coding and designing." },
  { step: "04", title: "Launch", desc: "Rigorous testing and final deployment." }
];

const WorkingProcess = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-navy display-6">Our Working Process</h2>
          <div className="divider mx-auto bg-cyan mt-3"></div>
        </div>
        <div className="row g-4 process-container">
          {processes.map((p, i) => (
            <div className="col-md-6 col-lg-3 text-center" key={i}>
              <div className="process-step">
                <span className="step-number text-yellow">{p.step}</span>
                <h5 className="fw-bold text-navy mt-n2">{p.title}</h5>
                <p className="text-mid-gray small px-3">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;