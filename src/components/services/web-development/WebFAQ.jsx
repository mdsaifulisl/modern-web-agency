import React from "react";
import { FiZap } from "react-icons/fi";
import Button from "@/components/ui/Button";

const faqs = [
  { q: "How long does it take to build a website?", a: "Typically 2-4 weeks for standard sites and 8+ weeks for custom applications." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely! We follow a mobile-first, responsive design approach." },
  { q: "Do you provide post-launch support?", a: "Yes, we offer ongoing maintenance, security updates, and technical support." },
];

const WebFAQ = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4">
            <h2 className="display-6 fw-bold text-navy mb-4">Common Questions</h2>
            <p className="text-mid-gray mb-4">Find answers to frequently asked questions about our web services.</p>
            <div className="p-4 rounded-4 bg-off-white border">
              <h6 className="fw-bold text-navy mb-2">Need more help?</h6>
              <Button href="#" variant="link">Contact Support →</Button>
            </div>
          </div>
          <div className="col-lg-8">
            {faqs.map((faq, idx) => (
              <details key={idx} className="faq-item mb-3 group">
                <summary className="d-flex align-items-center justify-content-between p-4 bg-off-white rounded-4 list-unstyled cursor-pointer shadow-sm border-start border-yellow border-4">
                  <h5 className="fw-bold text-navy mb-0 pe-3" style={{ fontSize: "1.05rem" }}>{faq.q}</h5>
                  <span className="faq-icon text-yellow"><FiZap /></span>
                </summary>
                <div className="p-4 pt-2 text-mid-gray lh-lg" style={{ fontSize: "0.95rem" }}>
                  <div className="ps-3 border-start">{faq.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebFAQ;