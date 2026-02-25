"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiStar } from "react-icons/fi";

const testimonialsData = [
  { id: 1, name: "John Smith", role: "CEO", image: "https://randomuser.me/api/portraits/men/11.jpg", text: "NextWave transformed our digital presence." },
  { id: 2, name: "Michael Brown", role: "Marketing Director", image: "https://randomuser.me/api/portraits/men/12.jpg", text: "Amazing experience!" },
  { id: 3, name: "David Wilson", role: "Founder", image: "https://randomuser.me/api/portraits/men/16.jpg", text: "Excellent service." },
  { id: 4, name: "Chris Johnson", role: "Product Manager", image: "https://randomuser.me/api/portraits/men/18.jpg", text: "Highly recommended." },
  { id: 5, name: "Sarah Davis", role: "Marketing Director", image: "https://randomuser.me/api/portraits/women/12.jpg", text: "Outstanding work!" },
  { id: 6, name: "Emily Chen", role: "Brand Manager", image: "https://randomuser.me/api/portraits/women/13.jpg", text: "Exceptional service." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Set slidesToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section py-5">
      <div className="container overflow-hidden py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-navy">What Our Clients Say</h2>
          <div className="heading-underline mx-auto"></div>
        </div>

        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${current * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonialsData.map((item) => (
              <div key={item.id} className="testimonial-slide">
                <div className="card border-0 shadow-sm p-4 rounded-4 h-100 mx-2">
                  <div className="text-warning mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted fst-italic mb-4">&quot;{item.text}&quot;</p>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-circle shadow-sm" />
                    <div>
                      <h6 className="mb-0 fw-bold text-navy">{item.name}</h6>
                      <small className="text-muted">{item.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dots-container mt-4 text-center">
          {testimonialsData.map((_, index) => (
            <button key={index} className={`dot-btn ${current === index ? "active" : ""}`} onClick={() => setCurrent(index)}></button>
          ))}
        </div>
      </div>
    </section>
  );
}