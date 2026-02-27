import React from "react";

const BlogHero = () => (
  <section className="py-5 bg-navy text-white position-relative overflow-hidden">
    <div className="position-absolute bottom-0 start-0 opacity-5 pointer-events-none translate-middle">
      <div
        className="bg-cyan rounded-circle"
        style={{ width: "300px", height: "300px", filter: "blur(80px)" }}
      ></div>
    </div>
    <div className="container py-5 text-center position-relative z-1">
      <h6 className="text-cyan text-uppercase ls-3 fw-bold mb-3 animate-fade-in">
        Insights & Articles
      </h6>
      <h1 className="display-4 fw-bold mb-4 animate-slide-up text-white">
        Our <span className="text-yellow">Knowledge Hub</span>
      </h1>
      <p
        className="lead mx-auto opacity-75 animate-slide-up delay-1"
        style={{ maxWidth: "650px" }}
      >
        Latest industry news, technical tutorials, and strategic insights from
        our expert team.
      </p>
    </div>
  </section>
);

export default BlogHero;
