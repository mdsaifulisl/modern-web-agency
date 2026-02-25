import React from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '@/components/ui/Button';

const WhyChooseUs = () => {
    return (
        <section className="py-5 bg-off-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="position-relative w-100">
                <Image 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" 
                  alt="Working Together" 
                  width={600}
                  height={400}
                  className="rounded-4 img-fluid object-fit-cover w-100 h-auto"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="fw-bold text-navy mb-4">Why Choose NextWave?</h2>
              <p className="mb-4">
                We don&apos;t just provide services; we build partnerships. Our process is transparent, goal-oriented, and focused on your ROI.
              </p>
              <ul className="list-unstyled mb-4">
                {[
                  "Expert team with 5+ years of experience",
                  "Data-driven strategies for marketing",
                  "Fast and high-performance development",
                  "24/7 dedicated client support"
                ].map((item, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-3 mb-3">
                    <FiCheckCircle className="vibrant-cyan" size={22} />
                    <span className="fw-medium text-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" animated={true}>Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChooseUs;