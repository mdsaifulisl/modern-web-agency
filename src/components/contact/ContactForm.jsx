"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Button from "../ui/Button";
 

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
 
  const handleInputChange = (e) => {
    const { id, value } = e.target; // id ব্যবহার করছি কারণ input-এ id দেওয়া আছে
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <div className="contact-form-card shadow-lg border-0 p-4 p-md-5 bg-white rounded-4">
      <form onSubmit={handleFormSubmit} className="contact-form">
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label fw-bold small text-uppercase text-navy opacity-75">Full Name</label>
              <input 
                id="name" 
                type="text" 
                className="form-control form-control-lg border-0 bg-light py-3 px-4 rounded-3" 
                placeholder="e.g. John Doe" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="form-label fw-bold small text-uppercase text-navy opacity-75">Email Address</label>
              <input 
                id="email" 
                type="email" 
                className="form-control form-control-lg border-0 bg-light py-3 px-4 rounded-3" 
                placeholder="name@company.com" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="phone" className="form-label fw-bold small text-uppercase text-navy opacity-75">Phone Number</label>
          <input 
            id="phone" 
            type="text" 
            className="form-control form-control-lg border-0 bg-light py-3 px-4 rounded-3" 
            placeholder="e.g. +880 1234 567 890" 
            required 
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="service" className="form-label fw-bold small text-uppercase text-navy opacity-75">Service Category</label>
          <select 
            id="service" 
            className="form-select form-select-lg border-0 bg-light py-3 px-4 rounded-3" 
            required 
            value={formData.service}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select a service</option>
            <option value="web">Web Development</option>
            <option value="graphics">Graphics Design</option>
            <option value="seo">SEO Optimization</option>
            <option value="app">Mobile App Development</option>
          </select>
        </div>

        <div className="form-group mb-5">
          <label htmlFor="message" className="form-label fw-bold small text-uppercase text-navy opacity-75">Project Details</label>
          <textarea 
            id="message" 
            rows="4" 
            className="form-control form-control-lg border-0 bg-light py-3 px-4 rounded-3" 
            placeholder="Briefly describe your project requirements..." 
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-100 py-3 rounded-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 hover-lift" 
        >
          {isSubmitting ? (
            <>
              Sending Request... 
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </>
          ) : (
            <>Send Message <FiSend /></>
          )}
        </Button> 
      </form>
    </div>
  );
};

export default ContactForm;