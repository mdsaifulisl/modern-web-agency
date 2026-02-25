import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const AboutHero = () => {
  return (
    <section className="py-5 bg-off-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3">
              Who We Are
            </h6>
            <h1 className="display-3 fw-bold mb-4 text-navy">
              Innovating Solutions for Your{" "}
              <span className="text-yellow">Digital Growth</span>
            </h1>
            <p className="lead mb-4">
              NextWave is a full-service digital agency dedicated to
              transforming how brands connect with people. We blend creativity
              with strategy.
            </p>
            <Button variant="primary" animated={true}>
              Explore Our Work
            </Button>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 text-center">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
              alt="About Us"
              width={550}
              height={400}
              className="rounded-4 img-fluid object-fit-cover w-100 h-auto float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
