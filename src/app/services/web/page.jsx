"use client";

import React from "react";
import Image from "next/image";
import {
  FiCode,
  FiLayers,
  FiLayout,
  FiServer,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiShield,
  FiZap,
  FiSearch,
} from "react-icons/fi";
import Button from "@/components/ui/Button";

const WebDevelopment = () => {
  const features = [
    {
      title: "Frontend Excellence",
      desc: "Creating pixel-perfect, responsive interfaces using React and Next.js.",
      icon: <FiLayout size={28} />,
      color: "bg-cyan",
    },
    {
      title: "Backend Scalability",
      desc: "Robust server-side logic and database management for high-traffic apps.",
      icon: <FiServer size={28} />,
      color: "bg-navy",
    },
    {
      title: "Clean Architecture",
      desc: "Maintainable and well-documented code following modern best practices.",
      icon: <FiLayers size={28} />,
      color: "bg-yellow",
    },
  ];

  return (
    <div className="web-service-page overflow-hidden">
      {/* --- SECTION 1: HERO --- */}
      <section className="py-5 bg-off-white border-bottom">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3">
                Service Details
              </h6>
              <h1 className="display-4 fw-bold text-navy mb-4">
                Scalable & Modern{" "}
                <span className="text-yellow">Web Development</span>
              </h1>
              <p className="lead mb-4 text-mid-gray">
                We build high-performance websites and web applications tailored
                to your business needs. From simple landing pages to complex
                e-commerce platforms.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" animated={true}>
                  Start a Project
                </Button>
                <Button variant="outline" animated={true}>
                  Our Portfolio
                </Button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
              <div className="position-relative p-2 bg-white rounded-4 shadow-sm">
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

      {/* --- SECTION 2: FEATURES --- */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-navy">
              Our Specialized Approach
            </h2>
            <div className="heading-underline mx-auto mt-2"></div>
          </div>
          <div className="row g-4">
            {features.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card border-0 shadow-sm p-4 h-100 hover-lift text-center bg-off-white">
                  <div
                    className={`mx-auto mb-4 p-3 rounded-circle text-white ${item.color} d-flex align-items-center justify-content-center`}
                    style={{ width: "70px", height: "70px" }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="fw-bold text-navy mb-3">{item.title}</h4>
                  <p className="small mb-0 text-mid-gray">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECH STACK --- */}
      <section className="py-5 bg-navy text-white overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4 text-white">
                The Technologies <br />
                <span className="text-cyan">We Master</span>
              </h2>
              <p className="opacity-75 mb-4 text-white">
                We use the latest frameworks to ensure your website is fast,
                SEO-friendly, and secure.
              </p>
              <ul className="list-unstyled">
                {[
                  "Next.js & React",
                  "Node.js & Express",
                  "MongoDB & MySQL",
                  "Bootstrap",
                ].map((tech, i) => (
                  <li key={i} className="mb-2 d-flex align-items-center gap-2">
                    <FiCheckCircle className="text-yellow" /> {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7 mt-4 mt-lg-0">
              <div className="row g-3">
                {[
                  { label: "Performance", icon: <FiZap /> },
                  { label: "Security", icon: <FiShield /> },
                  { label: "Scalable", icon: <FiCpu /> },
                  { label: "Global SEO", icon: <FiGlobe /> },
                ].map((item, idx) => (
                  <div className="col-6 col-md-3" key={idx}>
                    <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift">
                      <div
                        className="text-cyan mb-2"
                        style={{ fontSize: "30px" }}
                      >
                        {item.icon}
                      </div>
                      <p className="small mb-0 fw-bold">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: DEVELOPMENT PROCESS (NEW) --- */}
      <section className="py-5 bg-off-white position-relative overflow-hidden">
        <div className="container py-5 position-relative">
          <div className="text-center mb-5">
            <div className="d-inline-block text-cyan fw-bold small text-uppercase ls-2 mb-3">
              Process workflow
            </div>
            <h2 className="display-5 fw-bold text-navy mb-3">
              Our Strategic Journey
            </h2>
            <p
              className="text-mid-gray mx-auto"
              style={{ maxWidth: "600px", fontSize: "1.1rem" }}
            >
              We turn complex ideas into seamless digital experiences through
              our disciplined development cycle.
            </p>
          </div>

          {/* Process Grid */}
          <div className="row g-4 justify-content-center position-relative">
            {/* Connecting Line (Desktop Only) */}
            <div
              className="position-absolute top-50 start-0 w-100 d-none d-lg-block border-top border-2 border-dashed border-cyan opacity-20"
              style={{ zIndex: 0, transform: "translateY(-50px)" }}
            ></div>

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We deep dive into your vision to align our technical goals with your business objectives.",
                icon: <FiSearch size={22} />,
              },
              {
                step: "02",
                title: "Planning",
                desc: "Architecting the perfect tech stack and roadmap to ensure future scalability.",
                icon: <FiLayers size={22} />,
              },
              {
                step: "03",
                title: "Development",
                desc: "Writing clean, efficient, and maintainable code with continuous quality assurance.",
                icon: <FiCode size={22} />,
              },
              {
                step: "04",
                title: "Launch",
                desc: "Final optimization and seamless deployment, followed by post-launch performance checks.",
                icon: <FiZap size={22} />,
              },
            ].map((item, idx) => (
              <div
                className="col-md-6 col-lg-3"
                key={idx}
                style={{ zIndex: 1 }}
              >
                <div className="process-card position-relative p-4 h-100 bg-white border-0 shadow-sm rounded-4 hover-lift transition-all">
                  {/* Icon & Step Badge Wrapper */}
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div className="p-3 bg-off-white text-cyan rounded-3 shadow-sm">
                      {item.icon}
                    </div>
                    <div
                      className="step-number d-flex align-items-center justify-content-center bg-navy text-white fw-bold rounded-circle shadow-sm"
                      style={{
                        width: "35px",
                        height: "35px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.step}
                    </div>
                  </div>

                  <h5 className="fw-bold text-navy mb-3">{item.title}</h5>
                  <p
                    className="text-mid-gray mb-0 lh-base"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {item.desc}
                  </p>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FAQ --- */}
<section className="py-5 bg-white">
  <div className="container py-5">
    <div className="row g-5">
      {/* বাম পাশ: হেডার কন্টেন্ট */}
      <div className="col-lg-4">
        <div className="sticky-top" style={{ top: "100px" }}>
          <div className="d-inline-block text-orange fw-bold small text-uppercase ls-2 mb-3" style={{ color: '#f59e0b' }}>
            Support Center
          </div>
          <h2 className="display-6 fw-bold text-navy mb-4">
            Common <br /> Questions
          </h2>
          <p className="text-mid-gray mb-4">
            Find answers to frequently asked questions about our web
            services. Can&apos;t find what you&apos;re looking for?
          </p>
          <div className="p-4 rounded-4 bg-off-white border-1 border">
            <h6 className="fw-bold text-navy mb-2">Need more help?</h6>
            <p className="small text-mid-gray mb-3">Our team is ready to assist you with any custom technical requirements.</p>
            <Button href="#" variant="link" >
              Contact Support →
            </Button>
          </div>
        </div>
      </div>

      {/* ডান পাশ: Accordion FAQ */}
      <div className="col-lg-8">
        <div className="accordion-wrapper">
          {[
            {
              q: "How long does it take to build a website?",
              a: "Typically 2-4 weeks for standard sites and 8+ weeks for custom applications. The timeline depends on the complexity and features required.",
            },
            {
              q: "Will my website be mobile-friendly?",
              a: "Absolutely! We follow a mobile-first, responsive design approach, ensuring your site looks and functions perfectly on all devices, from smartphones to desktops.",
            },
            {
              q: "Do you provide post-launch support?",
              a: "Yes, we offer ongoing maintenance, security updates, and technical support packages to ensure your website remains healthy and secure after launch.",
            },
            {
              q: "Can you help with SEO and visibility?",
              a: "Yes, every site we build is structured with technical SEO best practices, including fast loading speeds, meta tags, and clean code for better indexing.",
            }
          ].map((faq, idx) => (
            <details key={idx} className="faq-item mb-3 group">
              <summary className="d-flex align-items-center justify-content-between p-4 bg-off-white rounded-4 list-unstyled cursor-pointer shadow-sm transition-all border-start border-yellow border-4">
                <h5 className="fw-bold text-navy mb-0 pe-3" style={{ fontSize: "1.05rem" }}>
                  {faq.q}
                </h5>
                <span className="faq-icon text-yellow fw-bold">
                  <FiZap />
                </span>
              </summary>
              <div className="p-4 pt-2 text-mid-gray lh-lg" style={{ fontSize: "0.95rem" }}>
                <div className="ps-3 border-start border-light">
                  {faq.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

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
          <Button variant="cta" animated={true}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
