"use client";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function GetStarted() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (data) => {
   

    const { name, email, phone, service, message } = data;

    console.log({
      name,
      email,
      phone,
      service,
      message,
    });
   

    setIsSubmitting(true);
     
    // সিমুলেটেড API কল
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-page d-flex align-items-center justify-content-center min-vh-100 bg-light overflow-hidden" style={{overflow: 'hidden'}} >
        <div className="success-card text-center p-5 shadow-lg rounded-4 bg-white border-0 overflow-hidden" style={{maxWidth: '550px'}}>
          <FiCheckCircle className="display-1 text-success mb-4" />
          <h2 className="fw-bold text-navy mb-3">Message Sent Successfully!</h2>
          <p className="text-muted mb-4 fs-5">
            Thank you for reaching out. Our team will review your requirements 
            and get back to you within 24 hours.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn btn-primary btn-lg rounded-pill px-5 shadow">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }
 

  return (
    <div className="contact-page py-5 bg-off-white">
      <div className="container py-lg-5">
        <div className="row g-5 align-items-start"> {/* g-5 বড় গ্যাপ তৈরি করবে */}
          
          {/* Left Side */}
          <div className="col-lg-6 pe-lg-5"> {/* ডান দিকে অতিরিক্ত প্যাডিং */}
            <ContactInfo />
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>

        </div>
      </div>
    </div>
  );
}