import React from "react";
import { FiCheckCircle, FiCommand, FiAperture, FiFigma, FiStar } from "react-icons/fi";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";


const GraphicsTools = () => {
  return (
    <section className="py-5 bg-navy text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-white">Industry Standard <br/><span className="text-cyan">Tools We Master</span></h2>
            <div className="ps-3 border-start border-cyan border-4 mb-4">
              <p className="opacity-75 text-white">
                Our designers utilize the most powerful software in the industry to ensure your assets are high-resolution, scalable, and professional.
              </p>
            </div>
            <ul className="list-unstyled">
              {["Vector-based Logos", "Advanced Photo Manipulation", "High-Fidelity Wireframes", "Print-Ready CMYK Files"].map((step, i) => (
                <li key={i} className="mb-3 d-flex align-items-center gap-3">
                  <FiCheckCircle className="text-yellow" size={20} />
                  <span className="fw-medium text-white">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <ToolCard icon={<SiAdobeillustrator className="text-yellow" size={35} />} title="Illustrator" subtitle="Vector Graphics" />
              </div>
              <div className="col-6 mt-md-4">
                <ToolCard icon={<SiAdobephotoshop className="text-cyan" size={35} />} title="Photoshop" subtitle="Raster Editing" />
              </div>
              <div className="col-6">
                <ToolCard icon={<FiFigma className="text-white" size={35} />} title="Figma" subtitle="UI/UX Design" />
              </div>
              <div className="col-6 mt-md-4">
                <ToolCard icon={<FiStar className="text-yellow" size={35} />} title="Quality" subtitle="Pixel Perfect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({ icon, title, subtitle }) => (
  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift h-100">
    <div className="mb-2">{icon}</div>
    <h6 className="mb-1 fw-bold text-white">{title}</h6>
    <p className="small opacity-50 mb-0 text-white">{subtitle}</p>
  </div>
);

export default GraphicsTools;