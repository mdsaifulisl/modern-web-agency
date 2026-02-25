"use client";

import React from "react";
import Image from "next/image";
import { 
  FiPenTool, 
  FiLayers, 
  FiFigma, 
  FiImage, 
  FiCheckCircle, 
  FiStar, 
  FiCommand, 
  FiAperture 
} from "react-icons/fi";
import Button from "@/components/ui/Button";

const GraphicsDesign = () => {
  // Creative service features
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

  return (
    <div className="graphics-service-page">
      {/* 1. Hero Section - Updated Image */}
      <section className="py-5 bg-off-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3">Creative Studio</h6>
              <h1 className="display-4 fw-bold text-navy mb-4">
                Visual Stories That <span className="text-yellow">Inspire</span>
              </h1>
              <p className="lead mb-4">
                We blend art with strategy to create visuals that capture attention and drive engagement. From modern logos to complex UI/UX designs.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" animated={true}>Start Designing</Button>
                <Button variant="outline" animated={true}>View Gallery</Button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="position-relative p-3 bg-white rounded-4 shadow-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800"
                  alt="Modern Graphic Design Art"
                  width={600}
                  height={450}
                  className="rounded-4 w-100 h-auto object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
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

      {/* 3. Design Process & Tools Section - Added Illustrator & Photoshop */}
      <section className="py-5 bg-navy text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
               <h2 className="fw-bold mb-4">Industry Standard <br/><span className="text-cyan">Tools We Master</span></h2>
               <div className="ps-3 border-start border-cyan border-4 mb-4">
                 <p className="opacity-75">
                   Our designers utilize the most powerful software in the industry to ensure your assets are high-resolution, scalable, and professional.
                 </p>
               </div>
               <ul className="list-unstyled">
                {["Vector-based Logos", "Advanced Photo Manipulation", "High-Fidelity Wireframes", "Print-Ready CMYK Files"].map((step, i) => (
                  <li key={i} className="mb-3 d-flex align-items-center gap-3">
                    <FiCheckCircle className="text-yellow" size={20} />
                    <span className="fw-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {/* Adobe Illustrator Card */}
                <div className="col-6">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift h-100">
                    <FiCommand className="text-yellow mb-2" size={35} />
                    <h6 className="mb-1 fw-bold">Illustrator</h6>
                    <p className="small opacity-50 mb-0">Vector Graphics</p>
                  </div>
                </div>
                {/* Adobe Photoshop Card */}
                <div className="col-6 mt-md-4">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift h-100">
                    <FiAperture className="text-cyan mb-2" size={35} />
                    <h6 className="mb-1 fw-bold">Photoshop</h6>
                    <p className="small opacity-50 mb-0">Raster Editing</p>
                  </div>
                </div>
                {/* Figma Card */}
                <div className="col-6">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift h-100">
                    <FiFigma className="text-white mb-2" size={35} />
                    <h6 className="mb-1 fw-bold">Figma</h6>
                    <p className="small opacity-50 mb-0">UI/UX Design</p>
                  </div>
                </div>
                {/* Quality Control Card */}
                <div className="col-6 mt-md-4">
                  <div className="p-4 bg-white bg-opacity-10 rounded-4 text-center border border-light border-opacity-10 hover-lift h-100">
                    <FiStar className="text-yellow mb-2" size={35} />
                    <h6 className="mb-1 fw-bold">Quality</h6>
                    <p className="small opacity-50 mb-0">Pixel Perfect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-5 bg-off-white text-center">
        <div className="container py-5">
          <h2 className="display-6 fw-bold text-navy mb-4">Ready for a Brand Makeover?</h2>
          <p className="mb-5 text-mid-gray mx-auto" style={{maxWidth: '650px'}}>
            Whether you need a new logo or a complete UI redesign for your app, our designers are here to help.
          </p>
          <Button variant="cta" animated={true}>Talk to a Designer</Button>
        </div>
      </section>
    </div>
  );
};

export default GraphicsDesign;