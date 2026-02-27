import React from "react";
import { FiLayout, FiSearch, FiCode, FiSmartphone, FiArrowRight, FiCheckCircle, FiStar } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import Link from "next/link";

const mainServices = [
  {
    title: "Custom Web Development",
    description: "We build high-performance, scalable web applications using Next.js, React, and modern backend technologies.",
    icon: <FiCode />,
    features: ["PWA Development", "E-commerce Solutions", "API Integration"],
    color: "cyan"
  },
  {
    title: "UI/UX Strategy & Design",
    description: "User-centric designs that convert. We focus on creating intuitive interfaces that enhance user engagement.",
    icon: <FiLayout />,
    features: ["Prototyping", "User Research", "Wireframing"],
    color: "yellow"
  },
  {
    title: "SEO & Growth Hacking",
    description: "Data-driven SEO strategies to boost your organic visibility and outperform your competitors in 2026.",
    icon: <FiSearch />,
    features: ["Technical SEO", "Content Strategy", "Speed Optimization"],
    color: "navy"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps that deliver native-like performance on both iOS and Android platforms.",
    icon: <FiSmartphone />,
    features: ["React Native", "Flutter", "App Store Optimization"],
    color: "cyan"
  },
  {
    title: "Graphics Design & Branding",
    description: "Professional branding and graphic design services to elevate your visual identity.",
    icon: <SiAdobephotoshop />,
    features: ["Logo Design", "Brand Identity", "UI/UX Mockups"],
    color: "yellow"
  }
];

const AllServices = () => {
  return (
    <section className="container mt-n5 position-relative z-2">
      <div className="row g-4">
        {mainServices.map((service, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="service-card h-100 bg-white p-4 rounded-5 shadow-pro border-0 transition-pro">
              <div className={`icon-box mb-4 bg-light-${service.color} text-${service.color}`}>
                {service.icon}
              </div>
              <h4 className="fw-bold text-navy mb-3">{service.title}</h4>
              <p className="text-mid-gray small mb-4">{service.description}</p>
              <ul className="list-unstyled mb-4">
                {service.features.map((feat, i) => (
                  <li key={i} className="small text-navy mb-2 d-flex align-items-center gap-2">
                    <FiCheckCircle className="text-cyan" /> {feat}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-decoration-none fw-bold text-navy d-flex align-items-center gap-2 hover-cyan transition-pro">
                Get Started <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServices;