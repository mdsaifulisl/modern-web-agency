import React from "react";
import { FiPenTool, FiFigma, FiImage } from "react-icons/fi";

const designServices = [
  {
    title: "Brand Identity",
    desc: "Creating unique logos and brand guidelines that tell your story.",
    icon: <FiPenTool size={28} />,
    color: "bg-cyan"
  },
  {
    title: "UI/UX Design",
    desc: "User-centric interface designs for mobile apps and web platforms.",
    icon: <FiFigma size={28} />,
    color: "bg-navy"
  },
  {
    title: "Marketing Assets",
    desc: "High-quality social media graphics, banners, and print materials.",
    icon: <FiImage size={28} />,
    color: "bg-yellow"
  }
];

const GraphicsServices = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-navy">Our Creative Solutions</h2>
          <div className="heading-underline mx-auto mt-2"></div>
        </div>
        <div className="row g-4">
          {designServices.map((service, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card border-0 shadow-sm p-4 h-100 hover-lift text-center bg-off-white">
                <div className={`mx-auto mb-4 p-3 rounded-circle text-white ${service.color} d-flex align-items-center justify-content-center`} style={{width: '70px', height: '70px'}}>
                  {service.icon}
                </div>
                <h4 className="fw-bold text-navy mb-3">{service.title}</h4>
                <p className="small mb-0 text-mid-gray">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicsServices;