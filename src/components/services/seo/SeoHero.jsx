import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const SeoHero = () => {
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
            <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3 animate-fade-in delay-1">Search Excellence</h6>
            <h1 className="display-4 fw-bold text-navy mb-4 animate-slide-up delay-2">
              Dominate the <span className="text-yellow">Search Results</span>
            </h1>
            <p className="lead mb-4 animate-slide-up delay-3">
              Stop being invisible. We help your business climb to the top of Google using data-driven strategies and ethical SEO practices.
            </p>
            <div className="d-flex gap-3 animate-slide-up delay-4">
              <Button variant="primary" animated={true}>Get Free Audit</Button>
              <Button variant="outline" animated={true}>View Case Studies</Button>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0" style={{ zIndex: "30" }}>
            <div className="position-relative p-3 bg-white rounded-4 shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800"
                alt="SEO Data Analytics"
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

export default SeoHero;