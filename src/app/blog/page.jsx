"use client";
import React, { useState, useMemo } from "react";
import { FiMessageCircle } from "react-icons/fi";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogCard from "@/components/blog/BlogCard";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const blogs =  [
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
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
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
  }, [blogs, searchTerm, activeCategory]);

  const featuredPost = blogs.find(post => post.featured);

  return (
    <div className="blog-page bg-off-white pb-5 overflow-hidden">
      <BlogHero />
      
      <div className="container">
        <div className="row g-4">
          {/* <FeaturedPost post={featuredPost} /> */}
          <BlogFilters 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <section className="py-5">
          {filteredBlogs.length > 0 ? (
            <div className="row g-4">
              {filteredBlogs.map(post => <BlogCard key={post.id} post={post} />)}
            </div>
          ) : (
            <div className="text-center py-5">
              <FiMessageCircle size={50} className="text-mid-gray mb-3 opacity-20" />
              <h4 className="text-navy">No articles found matching your search.</h4>
              <button onClick={() => {setSearchTerm(""); setActiveCategory("All")}} className="btn text-cyan fw-bold">Clear all filters</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;