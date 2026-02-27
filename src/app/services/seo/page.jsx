

import React from "react";
// importing components for the SEO service page
import SeoHero from "@/components/services/seo/SeoHero";
import SeoFeatures from "@/components/services/seo/SeoFeatures";
import SeoPerformance from "@/components/services/seo/SeoPerformance";
import Button from "@/components/ui/Button";

const SeoOptimization = () => {
  
 

  return (
    <div className="seo-service-page">
      {/* 1. Hero Section */}
      <SeoHero />
      {/* 2. Features Section */}
      <SeoFeatures />
      {/* 3. Performance Section */}
      <SeoPerformance />

      {/* 4. CTA Section */}
      <section className="py-5 bg-off-white text-center">
        <div className="container py-5">
          <h2 className="display-6 fw-bold text-navy mb-4">Wondering where you stand?</h2>
          <p className="mb-5 text-mid-gray mx-auto" style={{maxWidth: '650px'}}>
            Our experts will provide a comprehensive SEO audit of your website to identify growth opportunities. Absolutely free.
          </p>
          <Button variant="cta" href="/contact" animated={true}>Request Free SEO Audit</Button>
        </div>
      </section>
    </div>
  );
};

export default SeoOptimization;