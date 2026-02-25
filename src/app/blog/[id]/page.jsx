"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiCalendar, FiClock, FiUser, FiArrowLeft, 
  FiShare2, FiTwitter, FiLinkedin, FiFacebook,
  FiChevronRight, FiMessageSquare
} from "react-icons/fi";
import Button from "@/components/ui/Button";

const BlogDetails = ({ params }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  // স্ক্রল প্রগ্রেস বার আপডেট লজিক
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  // ডামি ডাটা (বাস্তবে এটি API বা JSON ফাইল থেকে আসবে)
  const post = {
    title: "How to Optimize Your Website for 2026 SEO Trends",
    category: "SEO",
    author: "Zayan Khan",
    date: "Feb 20, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    content: `
      <p>The landscape of Search Engine Optimization is shifting faster than ever. As we head further into 2026, the traditional methods of keyword stuffing and backlink spamming are long gone. Today, search engines are driven by deep AI integration and user intent.</p>
      
      <h3>1. The Rise of AI-First Search</h3>
      <p>Search engines now prioritize "Answer Engines" over "List Engines." This means your content must directly answer complex user queries in a natural, conversational tone.</p>
      
      <blockquote>"The future of SEO isn't just about being found; it's about being the most helpful resource for the user's specific problem."</blockquote>

      <h3>2. Core Web Vitals 3.0</h3>
      <p>Performance is no longer optional. In 2026, user experience signals (UX) are the primary ranking factors. This includes cumulative layout shifts and interaction to next paint (INP).</p>
    `
  };

  return (
    <div className="blog-details-page bg-white min-vh-100">
      {/* --- ১. রিডিং প্রগ্রেস বার --- */}
      <div className="reading-bar" style={{ width: `${readingProgress}%` }}></div>

      {/* --- ২. হিরো সেকশন --- */}
      <header className="py-5 bg-off-white border-bottom">
        <div className="container py-4">
          <Link href="/blog" className="text-decoration-none text-mid-gray d-flex align-items-center gap-2 mb-4 hover-cyan transition-pro">
            <FiArrowLeft /> Back to Blog
          </Link>
          <div className="max-w-800">
            <span className="badge bg-cyan text-white mb-3 px-3 py-2 rounded-pill shadow-sm">{post.category}</span>
            <h1 className="display-4 fw-bold text-navy mb-4 lh-sm">{post.title}</h1>
            <div className="d-flex flex-wrap align-items-center gap-4 text-mid-gray small">
              <div className="d-flex align-items-center gap-2">
                <div className="avatar bg-navy text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <FiUser />
                </div>
                <span className="fw-bold text-navy">{post.author}</span>
              </div>
              <span className="d-flex align-items-center gap-2"><FiCalendar /> {post.date}</span>
              <span className="d-flex align-items-center gap-2"><FiClock /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-5">
          {/* --- ৩. মেইন কন্টেন্ট --- */}
          <main className="col-lg-8">
            <div className="position-relative mb-5 rounded-5 overflow-hidden shadow-lg featured-image-container">
              <Image src={post.image} alt={post.title} width={1200} height={600} className="img-fluid object-fit-cover transition-pro" priority />
            </div>

            <article className="blog-article pe-lg-4" dangerouslySetInnerHTML={{ __html: post.content }} />

            <hr className="my-5" />

            {/* সোশ্যাল শেয়ার */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="d-flex align-items-center gap-3">
                <span className="fw-bold text-navy">Share this article:</span>
                <div className="d-flex gap-2">
                  <button className="share-btn twitter"><FiTwitter /></button>
                  <button className="share-btn linkedin"><FiLinkedin /></button>
                  <button className="share-btn facebook"><FiFacebook /></button>
                </div>
              </div>
              <button className="btn btn-light rounded-pill border d-flex align-items-center gap-2 px-4 py-2 hover-cyan transition-pro">
                <FiShare2 /> Copy Link
              </button>
            </div>
          </main>

          {/* --- ৪. সাইডবার --- */}
          <aside className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px', zIndex: 1 }}>
              {/* টেবিল অফ কন্টেন্ট */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-off-white">
                <h5 className="fw-bold text-navy mb-3">On this page</h5>
                <nav className="toc d-flex flex-column gap-3">
                  <a href="#" className="active d-flex align-items-center gap-2">AI-First Search <FiChevronRight /></a>
                  <a href="#" className="d-flex align-items-center gap-2">Core Web Vitals 3.0 <FiChevronRight /></a>
                  <a href="#" className="d-flex align-items-center gap-2">Technical SEO <FiChevronRight /></a>
                </nav>
              </div>

              {/* রিলেটেড পোস্ট */}
              <div className="related-posts">
                <h5 className="fw-bold text-navy mb-3">Keep Reading</h5>
                <div className="d-flex flex-column gap-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="card border-0 shadow-sm rounded-4 p-2 transition-pro hover-lift">
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-3 overflow-hidden position-relative" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                          <Image src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200`} alt="related" fill className="object-fit-cover" />
                        </div>
                        <div>
                          <h6 className="fw-bold text-navy mb-1 small line-clamp-2">Next.js Framework for Scalable Apps</h6>
                          <span className="text-mid-gray x-small">5 min read</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .max-w-800 { max-width: 800px; }
        .reading-bar {
          position: fixed; top: 0; left: 0; height: 5px;
          background: linear-gradient(to right, #00f2ff, #010b2a);
          z-index: 9999; transition: width 0.1s ease-out;
        }
        .transition-pro { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-cyan:hover { color: #00f2ff !important; }
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important; }

        /* Typography */
        .blog-article { font-size: 1.15rem; line-height: 1.8; color: #444; }
        .blog-article :global(h3) { color: #010b2a; font-weight: 800; margin-top: 2.5rem; margin-bottom: 1.5rem; }
        .blog-article :global(p) { margin-bottom: 1.5rem; }
        .blog-article :global(blockquote) {
          border-left: 5px solid #00f2ff; padding: 1.5rem 2rem;
          background: #f8fdfd; border-radius: 0 20px 20px 0;
          font-style: italic; font-size: 1.3rem; margin: 3rem 0; color: #010b2a;
        }

        /* Sidebar & Buttons */
        .toc a { text-decoration: none; color: #666; font-size: 14px; font-weight: 500; transition: 0.3s; }
        .toc a.active { color: #00f2ff; font-weight: 700; }
        .toc a:hover { color: #010b2a; padding-left: 5px; }
        
        .share-btn {
          width: 40px; height: 40px; border-radius: 50%; border: none;
          display: flex; align-items: center; justify-content: center;
          background: #f0f2f5; transition: 0.3s; color: #010b2a;
        }
        .share-btn:hover { transform: translateY(-3px); color: white; }
        .twitter:hover { background: #1da1f2; }
        .linkedin:hover { background: #0077b5; }
        .facebook:hover { background: #1877f2; }

        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .x-small { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

        @media (max-width: 768px) {
          .display-4 { font-size: 2.2rem; }
          .blog-article { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;