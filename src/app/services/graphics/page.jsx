

import React from "react";

// Component imports
import GraphicsHero from "@/components/services/graphics/GraphicsHero";
import GraphicsServices from "@/components/services/graphics/GraphicsServices";
import GraphicsTools from "@/components/services/graphics/GraphicsTools";
import Button from "@/components/ui/Button";

const GraphicsDesign = () => {
  // Creative service features

  return (
    <div className="graphics-service-page">
      {/* 1. Hero Section */}
      <GraphicsHero />
      {/* 2. Services Overview */}
      <GraphicsServices />
      {/* 3. Tools & Expertise */}
      <GraphicsTools />
     
      

      {/* 4. CTA Section */}
      <section className="py-5 bg-off-white text-center">
        <div className="container py-5">
          <h2 className="display-6 fw-bold text-navy mb-4">Ready for a Brand Makeover?</h2>
          <p className="mb-5 text-mid-gray mx-auto" style={{maxWidth: '650px'}}>
            Whether you need a new logo or a complete UI redesign for your app, our designers are here to help.
          </p>
          <Button variant="cta" href="/contact" animated={true}>Talk to a Designer</Button>
        </div>
      </section>
    </div>
  );
};

export default GraphicsDesign;