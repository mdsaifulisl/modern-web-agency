"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiTarget, FiZap, FiExternalLink } from "react-icons/fi";
import Button from "@/components/ui/Button";

const CaseStudyPage = () => {
  // বাস্তব প্রোজেক্টে এই ডাটা API বা প্রপস থেকে আসবে
  const project = {
    title: "E-Commerce Revolution",
    subtitle: "Scaling a local retail brand to a global market with Next.js",
    category: "Web Development",
    client: "Global Retail Co.",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
    overview: "The client needed a high-performance e-commerce platform that could handle 10k+ concurrent users while maintaining sub-second load times.",
    challenge: "The existing platform was slow, not mobile-responsive, and had a complex checkout process that led to a 60% cart abandonment rate.",
    solution: "We implemented a headless commerce solution using Next.js for the frontend and Stripe for secure payments, focusing on a mobile-first user experience.",
    results: [
      "200% increase in mobile conversions",
      "45% reduction in page load speed",
      "Significant drop in cart abandonment",
      "Seamless integration with ERP systems"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"]
  };

  return (
    <div className="case-study-page bg-white">
      {/* --- ১. হিরো সেকশন --- */}
      <section className="py-5 bg-off-white border-bottom">
        <div className="container py-5">
          <Link href="/portfolio" className="text-decoration-none text-mid-gray mb-4 d-inline-flex align-items-center gap-2 hover-cyan transition-all">
            <FiArrowLeft /> Back to Portfolio
          </Link>
          <div className="row mt-4 align-items-center">
            <div className="col-lg-7">
              <span className="badge rounded-pill bg-cyan bg-opacity-10 px-3 mb-3">{project.category}</span>
              <h1 className="display-4 fw-bold text-navy mb-3">{project.title}</h1>
              <p className="lead text-mid-gray mb-0">{project.subtitle}</p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="p-4 bg-white rounded-4 shadow-sm border">
                <div className="row text-center">
                  <div className="col-6 border-end">
                    <p className="small text-muted mb-1 text-uppercase ls-1">Client</p>
                    <p className="fw-bold text-navy mb-0">{project.client}</p>
                  </div>
                  <div className="col-6">
                    <p className="small text-muted mb-1 text-uppercase ls-1">Date</p>
                    <p className="fw-bold text-navy mb-0">{project.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ২. মেইন ইমেজ --- */}
      <section className="container mt-n5 position-relative z-2">
        <div className="rounded-5 overflow-hidden shadow-lg" style={{ height: '500px' }}>
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-fit-cover"
          />
        </div>
      </section>

      {/* --- ৩. বিস্তারিত কন্টেন্ট --- */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row g-5">
            {/* বাম পাশ: ডেসক্রিপশন */}
            <div className="col-lg-8">
              <div className="mb-5">
                <h3 className="fw-bold text-navy d-flex align-items-center gap-3 mb-4">
                  <FiTarget className="text-cyan" /> Project Overview
                </h3>
                <p className="text-mid-gray lh-lg">{project.overview}</p>
              </div>

              <div className="mb-5">
                <h3 className="fw-bold text-navy d-flex align-items-center gap-3 mb-4">
                  <FiZap className="text-yellow" /> The Challenge
                </h3>
                <p className="text-mid-gray lh-lg">{project.challenge}</p>
              </div>

              <div className="p-5 bg-navy rounded-5 text-white shadow-sm">
                <h3 className="fw-bold mb-4 text-cyan">The Strategic Solution</h3>
                <p className="opacity-75 lh-lg mb-0">{project.solution}</p>
              </div>
            </div>

            {/* ডান পাশ: টেক স্ট্যাক এবং রেজাল্টস */}
            <div className="col-lg-4">
              <div className="p-4 bg-off-white rounded-4 mb-4 border-top border-cyan border-4">
                <h5 className="fw-bold text-navy mb-4">Key Results</h5>
                <ul className="list-unstyled">
                  {project.results.map((res, i) => (
                    <li key={i} className="mb-3 d-flex align-items-start gap-2 small">
                      <FiCheckCircle className="text-cyan mt-1 flex-shrink-0" />
                      <span className="text-mid-gray">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-white border rounded-4">
                <h5 className="fw-bold text-navy mb-3">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge bg-light text-navy border px-3 py-2">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="primary" className="w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                  Visit Live Site <FiExternalLink />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ৪. রিলেটেড প্রজেক্ট বা CTA --- */}
      <section className="py-5 bg-off-white">
        <div className="container text-center py-4">
          <h2 className="fw-bold text-navy mb-3">Want similar results for your business?</h2>
          <p className="text-mid-gray mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Our team is ready to analyze your current challenges and build a high-performance digital solution.
          </p>
          <Button variant="cta" animated={true}>Let&apos;s Talk About Your Project</Button>
        </div>
      </section>

      <style jsx>{`
        .ls-1 { letter-spacing: 1px; }
        .hover-cyan:hover { color: #00f2ff !important; }
        .mt-n5 { margin-top: -5rem !important; }
      `}</style>
    </div>
  );
};

export default CaseStudyPage;