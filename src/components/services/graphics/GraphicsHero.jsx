import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const GraphicsHero = () => {
  return (
    <section className="py-5 bg-off-white">
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
            <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3 animate-fade-in delay-1">Creative Studio</h6>
            <h1 className="display-4 fw-bold text-navy mb-4 animate-slide-up delay-2">
              Visual Stories That <span className="text-yellow">Inspire</span>
            </h1>
            <p className="lead mb-4 animate-slide-up delay-3">
              We blend art with strategy to create visuals that capture attention and drive engagement. From modern logos to complex UI/UX designs.
            </p>
            <div className="d-flex gap-3 animate-slide-up delay-4">
              <Button variant="primary" animated={true}>Start Designing</Button>
              <Button variant="outline" animated={true}>View Gallery</Button>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0" style={{ zIndex: "30" }}>
            <div className="position-relative p-3 bg-white rounded-4 shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800"
                alt="Modern Graphic Design Art"
                width={600}
                height={450}
                className="rounded-4 w-100 h-auto object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsHero;