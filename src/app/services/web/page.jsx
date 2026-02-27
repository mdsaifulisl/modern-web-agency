
import React from "react";
// components
import WebHero from "@/components/services/web-development/WebHero";
import WebFeatures from "@/components/services/web-development/WebFeatures";
import WebTechStack from "@/components/services/web-development/WebTechStack";
import WebFAQ from "@/components/services/web-development/WebFAQ";
import WebProcess from "@/components/services/web-development/WebProcess";
import Button from "@/components/ui/Button";

const WebDevelopment = () => {


  return (
    <div className="web-service-page overflow-hidden">
      
      <WebHero />
      <WebFeatures />
      <WebTechStack />
      <WebProcess />
      <WebFAQ />

      {/* --- SECTION 6: FINAL CTA --- */}
      <section className="py-5 text-white text-center">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="opacity-75 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
            Contact our experts today and turn your vision into a digital
            reality.
          </p>
          <Button variant="cta" href="/contact" animated={true}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
