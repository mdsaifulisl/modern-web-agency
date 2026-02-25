"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiExternalLink, FiArrowRight, FiPlus, FiLayers, FiFilter } from "react-icons/fi";
import Button from "@/components/ui/Button";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  // পেজ লোড হওয়ার সময় একটি এনিমেশন এফেক্ট দেওয়ার জন্য
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      desc: "Full-stack online store with real-time inventory and Stripe integration."
    },
    {
      id: 2,
      title: "Modern Brand Identity",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800",
      desc: "Minimalist branding and visual language for a FinTech startup."
    },
    {
      id: 3,
      title: "SEO Ranking Growth",
      category: "seo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      desc: "Data-driven strategy that boosted organic reach by 210% in 6 months."
    },
    {
      id: 4,
      title: "Corporate Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bb848a4fb6f5?q=80&w=800",
      desc: "Analytics dashboard with interactive charts and user management."
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "graphics",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
      desc: "High-engagement visual content for a global lifestyle brand."
    },
    {
      id: 6,
      title: "Local Business SEO",
      category: "seo",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800",
      desc: "Optimizing Google My Business and local search rankings for visibility."
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className={`portfolio-page pb-5 bg-off-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* --- ১. হিরো সেকশন: আরও বেশি গ্রাফিক এলিমেন্টসহ --- */}
      <section className="py-5 bg-navy text-white position-relative overflow-hidden">
     
        <div className="position-absolute bottom-0 start-0 opacity-5 pointer-events-none translate-middle">
          <div className="bg-cyan rounded-circle" style={{ width: '300px', height: '300px', filter: 'blur(80px)' }}></div>
        </div>
        
        <div className="container py-5 position-relative">
          <div className="text-center">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 text-cyan fw-bold small text-uppercase ls-3 mb-4">
              <FiPlus size={14} /> Our Masterpieces
            </div>
            <h1 className="display-3 fw-bold mb-4 text-white">Crafting <span className="text-yellow">Digital Stories</span></h1>
            <p className="lead mx-auto opacity-75 mb-0" style={{ maxWidth: '650px' }}>
              We don&apos;t just build websites; we create experiences that drive results. 
              Explore our latest works across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* --- ২. ফিল্টার এবং পোর্টফোলিও গ্রিড --- */}
      <section className="py-5 mt-n4">
        <div className="container">
          {/* ফিল্টার কন্ট্রোলস */}
          <div className="d-flex flex-column align-items-center mb-5">
            <div className="d-flex align-items-center gap-2 text-navy mb-3 opacity-50 small fw-bold text-uppercase ls-2">
              <FiFilter /> Filter by Industry
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-2 p-2 bg-white rounded-pill shadow-sm border">
              {["all", "web", "graphics", "seo"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-pill fw-bold text-uppercase border-0 transition-all ${
                    filter === cat 
                    ? "bg-navy text-white shadow-lg" 
                    : "bg-transparent text-mid-gray hover-navy"
                  }`}
                  style={{ fontSize: '0.75rem', letterSpacing: '1px' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* প্রজেক্ট গ্রিড */}
          <div className="row g-4 overflow-hidden min-vh-50">
            {filteredProjects.map((project, idx) => (
              <div 
                className="col-md-6 col-lg-4 animate-up" 
                key={project.id}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="project-card h-100 bg-white rounded-4 shadow-sm border-0 transition-all hover-lift overflow-hidden">
                  
                  {/* ইমেজ কন্টেইনার */}
                  <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fit-cover transition-transform duration-700 card-img"
                    />
                    {/* কাস্টম ওভারলে লেয়ার */}
                    <div className="card-overlay position-absolute inset-0 d-flex flex-column justify-content-between p-4 opacity-0 transition-all">
                      <div className="d-flex justify-content-end">
                        <div className="p-2 bg-white bg-opacity-20 backdrop-blur rounded-circle text-white">
                          <FiLayers size={18} />
                        </div>
                      </div>
                      <div className="d-flex gap-2 justify-content-center mb-4 translate-down transition-all delay-100">
                         <div className="p-3 bg-yellow rounded-circle shadow-lg cursor-pointer hover-scale">
                            <FiExternalLink className="text-navy" size={20} />
                         </div>
                         <div className="p-3 bg-cyan rounded-circle shadow-lg cursor-pointer hover-scale">
                            <FiPlus className="text-white" size={20} />
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* টেক্সট কন্টেন্ট */}
                  <div className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="text-cyan small fw-bold text-uppercase ls-1">
                        {project.category}
                      </span>
                      <span className="opacity-25 text-navy">•</span>
                      <span className="text-mid-gray small">2024 Project</span>
                    </div>
                    <h4 className="fw-bold text-navy mb-2 h5 lh-base transition-all title-hover">{project.title}</h4>
                    <p className="text-mid-gray small mb-4 line-clamp-2">{project.desc}</p>
                    
                    <hr className="opacity-5 mb-4" />
                    
                    <Button href="#" variant="link" className="d-flex align-items-center justify-content-between">
                      <span>View Case Study</span>
                      <FiArrowRight className="transition-all group-hover-translate" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ৩. কল টু অ্যাকশন --- */}
      <section className="container py-5">
        <div className="bg-navy p-5 rounded-5 text-center position-relative overflow-hidden shadow-lg border-bottom border-cyan border-5">
          <div className="position-relative z-1">
            <h2 className="display-6 fw-bold text-white mb-3">Next Big Project in Mind?</h2>
            <p className="text-white opacity-75 mb-5 mx-auto" style={{ maxWidth: '500px' }}>
              Let&apos;s join forces and build a digital masterpiece that sets you apart from the competition.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button variant="cta" animated={true}>Let&apos;s Get Started</Button>
              <Button variant="outline-white" animated={true}>View All Services</Button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-cyan opacity-5 translate-middle rounded-circle" style={{ width: '300px', height: '300px' }}></div>
        </div>
      </section>

      <style jsx>{`
        .ls-3 { letter-spacing: 3px; }
        .ls-2 { letter-spacing: 2px; }
        .ls-1 { letter-spacing: 1px; }
        
        .hover-lift:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px -15px rgba(1, 11, 42, 0.2) !important;
        }

        .project-card:hover .card-img {
          transform: scale(1.15);
        }

        .project-card:hover .card-overlay {
          opacity: 1;
          background: linear-gradient(to top, rgba(1, 11, 42, 0.9), transparent);
        }

        .translate-down { transform: translateY(20px); }
        .project-card:hover .translate-down { transform: translateY(0); }

        .hover-cyan:hover { color: #00f2ff !important; }
        
        .group-hover-translate { transition: transform 0.3s ease; }
        .group:hover .group-hover-translate { transform: translateX(5px); }

        .animate-up {
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hover-scale { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .hover-scale:hover { transform: scale(1.2); }
        
        .rotate-12 { transform: rotate(12deg); }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
        .backdrop-blur { backdrop-filter: blur(4px); }
      `}</style> 
    </div>
  );
};

export default PortfolioPage;