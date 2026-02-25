"use client";

import React from "react";
import { FiUsers } from "react-icons/fi";
import Statistics from "@/components/shared/Statistics";
import Button from "@/components/ui/Button";

// About Page specific components
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import Team from "@/components/about/Team";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <div className="about-page overflow-hidden">
      {/* 1. Hero Section */}
      <AboutHero />
      
      {/* 2. Mission & Vision Cards */}
      <MissionVision />
      
      {/* 3. Company Journey/Story */}
      <OurStory />
      
      {/* 4. Global Statistics (Shared Component) */}
      <Statistics />

      {/* 5. Leadership Team Section */}
      <Team />

      {/* 6. Unique Selling Points (Features) */}
      <WhyChooseUs />

      {/* 7. Final Call to Action - Keeping it here for direct Footer transition */}
      <section className="py-5 bg-white text-white text-center">
        <div className="container py-5">
          <div className="mb-4 d-inline-block p-3 rounded-circle bg-white bg-opacity-10">
             <FiUsers size={40} className="text-yellow" />
          </div>
          <h2 className="display-5 fw-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="opacity-75 mb-5 mx-auto" style={{maxWidth: '600px'}}>
            Join 200+ companies that trust NextWave for their digital transformation. Let&apos;s create something extraordinary.
          </p>
          <Button variant="cta" animated={true}>Contact Us Now</Button>
        </div>
      </section>
    </div>
  );
}