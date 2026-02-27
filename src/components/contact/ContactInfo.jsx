import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactInfo = () => {
  const infoItems = [
    {
      icon: <FiMail />,
      title: "Email Us",
      content: "support@nextwave.com",
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      content: "+880 1234-567890",
    },
    {
      icon: <FiMapPin />,
      title: "Our Office",
      content: "Banani, Dhaka, Bangladesh",
    },
  ];

  return (
    <div className="contact-info">
      <h1 className="title">
        Start Your <span className="brand-accent">Next Journey</span> With Us
      </h1>
      <p className="subtitle">
        We are ready to transform your ideas into reality. Fill out the form
        below, and our experts will reach out to discuss your project.
      </p>

      <div className="info-items">
        {infoItems.map((item, index) => (
          <div className="info-item d-flex gap-3" key={index}>
            <div className="icon-box">{item.icon}</div>
            <div className="info-text">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;