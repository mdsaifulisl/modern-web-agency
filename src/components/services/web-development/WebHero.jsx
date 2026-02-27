import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const WebHero = () => {
  return (
    <section className="py-5 bg-off-white border-bottom">
      <div
        className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none z-index-1"
        style={{ zIndex: "20", opacity: "0.5" }}
      >
        <div
          className="position-absolute top-0 start-0 center-0 translate-middle bg-cyan rounded-circle w-100 h-100"
          style={{ width: "400px", height: "400px", filter: "blur(100px)" }}
        ></div>
      </div>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6" style={{ zIndex: "30" }}>
            <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3 animate-fade-in delay-1">
              Service Details
            </h6>
            <h1 className="display-4 fw-bold text-navy mb-4 animate-slide-up delay-2">
              Scalable & Modern{" "}
              <span className="text-yellow">Web Development</span>
            </h1>
            <p className="lead mb-4 text-mid-gray animate-slide-up delay-3">
              We build high-performance websites and web applications tailored
              to your business needs. From simple landing pages to complex
              e-commerce platforms.
            </p>
            <div className="d-flex gap-3 animate-slide-up delay-4">
              <Button variant="primary" animated={true}>
                Start a Project
              </Button>
              <Button variant="outline" href="/portfolio" animated={true}>
                Our Portfolio
              </Button>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 text-center">
            <div
              className="position-relative p-2 bg-white rounded-4 shadow-sm"
              style={{ zIndex: "30" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
                alt="Web Development Code"
                width={600}
                height={400}
                className="rounded-4 w-100 h-auto object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;
