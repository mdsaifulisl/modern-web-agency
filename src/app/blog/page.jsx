"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiClock, FiArrowRight, FiSearch, FiMessageCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "How to Optimize Your Website for 2026 SEO Trends",
      category: "SEO",
      date: "Feb 20, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      excerpt: "Stay ahead of the curve with the latest SEO strategies focusing on AI-driven search and user experience.",
      featured: true
    },
    {
      id: 2,
      title: "Why Next.js is the Best Framework for Scalable Apps",
      category: "Development",
      date: "Feb 15, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
      excerpt: "Explore the features that make Next.js a top choice for modern developers, from SSR to App Router."
    },
    {
      id: 3,
      title: "The Impact of Minimalist Design on Conversion Rates",
      category: "Design",
      date: "Feb 10, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
      excerpt: "Learn how simplifying your UI can lead to higher user engagement and more sales."
    },
    {
      id: 4,
      title: "Securing Your Node.js Backend: Best Practices",
      category: "Security",
      date: "Feb 05, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800",
      excerpt: "A comprehensive guide to preventing common vulnerabilities in your server-side applications."
    },
    {
      id: 5,
      title: "Mastering Responsive Typography in Modern Web",
      category: "Design",
      date: "Jan 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800",
      excerpt: "How to use fluid typography to ensure your text looks great on every possible screen size."
    }
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, activeCategory]);

  const featuredPost = blogs.find(post => post.featured);

  return (
    <div className="blog-page bg-off-white pb-5">
      {/* --- ১. হিরো সেকশন --- */}
      <section className="py-5 bg-navy text-white position-relative overflow-hidden">
        <div className="container py-5 text-center position-relative z-1">
          <h6 className="text-cyan text-uppercase ls-3 fw-bold mb-3 animate-fade-in">Insights & Articles</h6>
          <h1 className="display-4 fw-bold mb-4 animate-slide-up text-white">Our <span className="text-yellow">Knowledge Hub</span></h1>
          <p className="lead mx-auto opacity-75 animate-slide-up delay-1" style={{ maxWidth: '650px' }}>
            Latest industry news, technical tutorials, and strategic insights from our expert team.
          </p>
        </div>
      </section>

      {/* --- ২. Featured Post & Search --- */}
      <div className="container mt-n5 position-relative z-2">
        <div className="row g-4">
          {/* Featured Card */}
          <div className="col-lg-12">
            <div className="bg-white rounded-5 shadow-lg overflow-hidden border-0 featured-card-hover transition-smooth">
              <div className="row g-0">
                <div className="col-md-6 position-relative overflow-hidden" style={{ minHeight: '350px' }}>
                  <Image src={featuredPost.image} alt="Featured" fill className="object-fit-cover featured-img transition-smooth" />
                </div>
                <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
                  <span className="badge bg-yellow text-navy mb-3 align-self-start shadow-sm">Featured Post</span>
                  <h2 className="fw-bold text-navy mb-3 transition-colors">{featuredPost.title}</h2>
                  <p className="text-mid-gray mb-4">{featuredPost.excerpt}</p>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button variant="primary" className="rounded-pill hover-scale-sm">Read Full Article</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="col-lg-12 mt-5">
            <div className="bg-white p-3 rounded-4 shadow-sm border d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4 transition-smooth hover-shadow-md">
              <div className="d-flex gap-2 flex-wrap justify-content-center">
                {["All", "Development", "Design", "SEO", "Security"].map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`btn btn-sm px-4 rounded-pill fw-bold transition-all duration-300 ${activeCategory === cat ? 'bg-navy text-white shadow-md' : 'bg-light text-mid-gray hover-cyan-bg'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="position-relative w-100 search-container" style={{ maxWidth: '400px' }}>
                <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-cyan search-icon transition-smooth" />
                <input 
                  type="text" 
                  className="form-control ps-5 rounded-pill border-light bg-light py-2 shadow-none focus-ring-cyan transition-smooth" 
                  placeholder="Search by topic or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ৩. ব্লগ গ্রিড --- */}
      <section className="py-5">
        <div className="container">
          {filteredBlogs.length > 0 ? (
            <div className="row g-4">
              {filteredBlogs.map((post) => (
                <div className="col-md-6 col-lg-4" key={post.id}>
                  <article className="blog-card h-100 bg-white rounded-4 shadow-sm overflow-hidden border transition-smooth hover-lift-up">
                    <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                      <Image src={post.image} alt={post.title} fill className="object-fit-cover transition-smooth card-img" />
                      <div className="position-absolute bottom-0 start-0 p-3 z-2">
                        <span className="badge bg-navy text-white border border-cyan border-opacity-25 backdrop-blur-sm">{post.category}</span>
                      </div>
                      <div className="img-overlay"></div>
                    </div>
                    <div className="p-4 card-content">
                      <div className="d-flex align-items-center gap-3 text-mid-gray small mb-3">
                        <span className="d-flex align-items-center gap-1"><FiCalendar className="text-cyan" /> {post.date}</span>
                        <span className="d-flex align-items-center gap-1"><FiClock className="text-cyan" /> {post.readTime}</span>
                      </div>
                      <h4 className="fw-bold text-navy mb-3 h5 lh-base">
                        <Link href={`/blog/${post.id}`} className="text-decoration-none text-navy title-link transition-colors">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-mid-gray small mb-4 line-clamp-2">{post.excerpt}</p>
                      <Button href={`/blog/${post.id}`} variant="link" className="fw-bold d-flex align-items-center gap-2 group">
                        Continue Reading <FiArrowRight className="arrow-icon transition-smooth" />
                      </Button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 animate-fade-in">
              <FiMessageCircle size={50} className="text-mid-gray mb-3 opacity-20" />
              <h4 className="text-navy">No articles found matching your search.</h4>
              <button onClick={() => {setSearchTerm(""); setActiveCategory("All")}} className="btn text-cyan fw-bold hover-scale-sm">Clear all filters</button>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        /* --- Smooth Timings & Bezier --- */
        .transition-smooth {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* --- Global Hovers --- */
        .hover-scale-sm:hover { transform: scale(1.05); }
        .hover-shadow-md:hover { box-shadow: 0 10px 30px -5px rgba(0,0,0,0.1) !important; }

        /* --- Featured Card Smoothness --- */
        .featured-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px -12px rgba(1, 11, 42, 0.15) !important;
        }
        .featured-card-hover:hover .featured-img { transform: scale(1.03); }

        /* --- Filter Buttons --- */
        .hover-cyan-bg:hover {
          background-color: rgba(0, 242, 255, 0.08) !important;
          color: #00f2ff !important;
        }

        /* --- Search Bar Focus --- */
        .focus-ring-cyan:focus {
          border-color: #00f2ff;
          background-color: #fff !important;
          box-shadow: 0 0 0 4px rgba(0, 242, 255, 0.1);
        }
        .search-container:focus-within .search-icon { color: #010b2a !important; transform: translateY(-50%) scale(1.1); }

        /* --- Blog Card Pro Hovers --- */
        .hover-lift-up {
          will-change: transform;
        }
        .hover-lift-up:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px -12px rgba(1, 11, 42, 0.12) !important;
          border-color: rgba(0, 242, 255, 0.2) !important;
        }
        
        .blog-card:hover .card-img { transform: scale(1.1); }
        .blog-card:hover .img-overlay { background: rgba(1, 11, 42, 0.1); }
        
        .img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(1, 11, 42, 0);
          transition: background 0.4s ease;
        }

        .title-link:hover { color: #00f2ff !important; }

        /* --- Read More Button Animation --- */
        .read-more-btn:hover { color: #00f2ff !important; }
        .read-more-btn:hover .arrow-icon { transform: translateX(8px); }

        /* --- Utility --- */
        .ls-3 { letter-spacing: 3px; }
        .mt-n5 { margin-top: -5rem !important; }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }

        /* --- Entrance Animations --- */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .delay-1 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default BlogPage;