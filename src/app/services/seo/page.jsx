"use client";

import React from "react";
import Image from "next/image";
import { 
  FiSearch, 
  FiTrendingUp, 
  FiBarChart2, 
  FiGlobe, 
  FiCheckCircle, 
  FiPieChart,
  FiZap,
  FiTarget
} from "react-icons/fi";
import Button from "@/components/ui/Button";

const SeoOptimization = () => {
  // SEO specific services
  const seoFeatures = [
    {
      title: "Keyword Research",
      desc: "Identifying high-volume, low-competition terms to drive targeted traffic.",
      icon: <FiSearch size={28} />,
      color: "bg-cyan"
    },
    {
      title: "On-Page SEO",
      desc: "Optimizing content, meta tags, and site structure for maximum visibility.",
      icon: <FiTrendingUp size={28} />,
      color: "bg-navy"
    },
    {
      title: "Technical SEO",
      desc: "Improving site speed, mobile-friendliness, and crawlability for search engines.",
      icon: <FiBarChart2 size={28} />,
      color: "bg-yellow"
    }
  ];

  return (
    <div className="seo-service-page">
      {/* 1. Hero Section */}
      <section className="py-5 bg-off-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3">Search Excellence</h6>
              <h1 className="display-4 fw-bold text-navy mb-4">
                Dominate the <span className="text-yellow">Search Results</span>
              </h1>
              <p className="lead mb-4">
                Stop being invisible. We help your business climb to the top of Google using data-driven strategies and ethical SEO practices.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" animated={true}>Get Free Audit</Button>
                <Button variant="outline" animated={true}>View Case Studies</Button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
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

      {/* 2. Features Grid */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-navy">Our Strategic SEO Pillars</h2>
            <div className="heading-underline mx-auto mt-2"></div>
          </div>
          <div className="row g-4">
            {seoFeatures.map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card border-0 shadow-sm p-4 h-100 hover-lift text-center bg-off-white">
                  <div className={`mx-auto mb-4 p-3 rounded-circle text-white ${feature.color} d-flex align-items-center justify-content-center`} style={{width: '70px', height: '70px'}}>
                    {feature.icon}
                  </div>
                  <h4 className="fw-bold text-navy mb-3">{feature.title}</h4>
                  <p className="small mb-0 text-mid-gray">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Performance Section */}
      <section className="py-5 bg-navy text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
               <h2 className="fw-bold mb-4">How We Boost Your <br/><span className="text-cyan">Digital Authority</span></h2>
               <p className="opacity-75 mb-4">
                 SEO is not a one-time task; it&apos;s a continuous process of improvement. We focus on sustainable growth that keeps you ahead of the competition.
               </p>
               <ul className="list-unstyled">
                {["Competitor Analysis", "Quality Backlink Building", "Content Strategy", "Monthly Progress Reports"].map((item, i) => (
                  <li key={i} className="mb-3 d-flex align-items-center gap-3">
                    <FiCheckCircle className="text-yellow" size={20} />
                    <span className="fw-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10">
                    <FiGlobe className="text-cyan mb-2" size={35} />
                    <h6 className="mb-0">Global Reach</h6>
                  </div>
                </div>
                <div className="col-6 mt-md-4">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10">
                    <FiZap className="text-yellow mb-2" size={35} />
                    <h6 className="mb-0">Fast Indexing</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10">
                    <FiPieChart className="text-white mb-2" size={35} />
                    <h6 className="mb-0">Data Driven</h6>
                  </div>
                </div>
                <div className="col-6 mt-md-4">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10">
                    <FiTarget className="text-cyan mb-2" size={35} />
                    <h6 className="mb-0">High ROI</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-5 bg-off-white text-center">
        <div className="container py-5">
          <h2 className="display-6 fw-bold text-navy mb-4">Wondering where you stand?</h2>
          <p className="mb-5 text-mid-gray mx-auto" style={{maxWidth: '650px'}}>
            Our experts will provide a comprehensive SEO audit of your website to identify growth opportunities. Absolutely free.
          </p>
          <Button variant="cta" animated={true}>Request Free SEO Audit</Button>
        </div>
      </section>
    </div>
  );
};

export default SeoOptimization;