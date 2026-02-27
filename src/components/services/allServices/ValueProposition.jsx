import React from "react";
import { FiShield, FiZap } from "react-icons/fi";
import Link from "next/link";
import Button from "@/components/ui/Button";

const ValueProposition = () => {
  return (
    <section className="container py-5">
      <div className="bg-navy rounded-5 p-5 text-white shadow-lg overflow-hidden position-relative">
        <div className="row align-items-center g-5 position-relative z-1">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-white">Why choose our services in <span className="text-cyan">{new Date().getFullYear()}?</span></h2>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex gap-3">
                <div className="feat-icon"><FiZap /></div>
                <div>
                  <h6 className="fw-bold text-yellow">Performance First</h6>
                  <p className="small opacity-75">We don&apos;t just build, we optimize for 100/100 Lighthouse scores.</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="feat-icon"><FiShield /></div>
                <div>
                  <h6 className="fw-bold text-yellow">Security by Design</h6>
                  <p className="small opacity-75">Enterprise-grade security protocols integrated from day one.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="p-4 bg-white bg-opacity-10 rounded-4 backdrop-blur">
              <h1 className="display-1 fw-bold text-cyan mb-0">99%</h1>
              <p className="fw-bold text-uppercase ls-3">Client Satisfaction</p>
              <Link href="/contact">
                <Button variant="primary" className="rounded-pill px-5 mt-3">Start Your Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;