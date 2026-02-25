import React from 'react';
import Image from 'next/image';
import { FiTrendingUp, FiZap } from 'react-icons/fi';

const OurStory = () => {
    return (
        <section className="py-5 bg-off-white overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5">
              <h6 className="vibrant-cyan text-uppercase ls-2 fw-bold mb-3">Our Story</h6>
              <h2 className="display-5 fw-bold text-navy mb-4">A Journey of Passion and <span className="text-yellow">Innovation</span></h2>
              <p className="mb-4">
                Founded in 2018, NextWave started with a simple vision: to bridge the gap between complex technology and business growth. What began as a team of three in a small office has now grown into a full-scale digital powerhouse.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-cyan bg-opacity-10 p-2 rounded text-light-gray"><FiTrendingUp size={24}/></div>
                    <span className="fw-bold text-navy">Scalable Solutions</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-yellow bg-opacity-10 p-2 rounded text-light-gray"><FiZap size={24}/></div>
                    <span className="fw-bold text-navy">Fast Execution</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-2 bg-white rounded-4 shadow-sm">
                 <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" 
                  alt="Team Collaboration" 
                  width={600} 
                  height={400} 
                  className="rounded-4 img-fluid object-fit-cover w-100 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurStory;