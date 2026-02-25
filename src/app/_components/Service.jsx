import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FiCode, FiBarChart, FiArrowRight } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FiCode />,
      href: "/services/web",
      desc: "Build fast, SEO-friendly, and secure websites using Next.js. We ensure high performance.",
    },
    {
      title: "Graphics Design",
      icon: <IoColorPaletteOutline />,
      href: "/services/graphics",
      desc: "Stunning visuals and branding that capture your identity perfectly.",
    },
    {
      title: "SEO Strategy",
      icon: <FiBarChart />,
      href: "/services/seo",
      desc: "Increase organic traffic and dominate search rankings with our expert strategy.",
    },
  ];

  return (
    <section className="py-5 bg-off-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-navy">
            Our Specialized Services
          </h2>
          <div className="heading-underline mx-auto mt-3"></div>
        </div>

        <div className="row g-4 mt-2">
          {services.map((service, idx) => (
            <div className="col-md-4" key={idx}>
              
              <div className="card h-100 border-0 shadow-sm p-4 hover-lift text-center d-flex flex-column">
                
                <div className="service-icon-box mx-auto mb-4">
                  {service.icon}
                </div>

                <h4 className="fw-bold text-navy">{service.title}</h4>
            
                <p className="text-mid-gray small mb-4 flex-grow-1">
                  {service.desc}
                </p>

                
                <div className="mt-auto">
                  <Button href={service.href} variant="link">
                    Read More <FiArrowRight />
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;