import React from "react";
import { FiSearch, FiTrendingUp, FiBarChart2 } from "react-icons/fi";

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

const SeoFeatures = () => {
  return (
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
  );
};

export default SeoFeatures;