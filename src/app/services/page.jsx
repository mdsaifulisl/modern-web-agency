
import React from "react";
// importing components
import AllServices from "@/components/services/allServices/AllServices";
import WorkingProcess from "@/components/services/allServices/WorkingProcess";
import ValueProposition from "@/components/services/allServices/ValueProposition";

const ServicesPage = () => {

  return (
    <div className="services-page bg-off-white pb-5 overflow-hidden">
      {/* --- ১. হিরো সেকশন --- */}
      <section className="py-5 bg-navy text-white position-relative w-full overflow-hidden">
        <div className="position-absolute bottom-0 start-0 opacity-5 pointer-events-none translate-middle">
          <div className="bg-cyan rounded-circle" style={{ width: '300px', height: '300px', filter: 'blur(80px)' }}></div>
        </div>
        <div className="container py-5 text-center position-relative z-1">
          <h6 className="text-cyan text-uppercase ls-3 fw-bold mb-3 animate-fade-in delay-1">What We Do</h6>
          <h1 className="display-4 fw-bold mb-4 text-white animate-slide-up delay-2">Solutions for your <span className="text-yellow">Digital Growth</span></h1>
          <p className="lead mx-auto opacity-75 animate-slide-up delay-3" style={{ maxWidth: '700px' }}>
            We combine strategic thinking with technical excellence to deliver products that drive real business impact.
          </p>
        </div>
        <div className="bg-glow"></div>
      </section>

      {/* all services */}
      <AllServices />
      <WorkingProcess />
      <ValueProposition />

    </div>
  );
};

export default ServicesPage;