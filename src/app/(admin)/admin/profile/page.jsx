"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiEdit2, FiMail, FiMapPin, FiCalendar, FiBriefcase, FiCheckCircle, FiClock } from "react-icons/fi";

const Profile = () => {
  const [user] = useState({
    id: 1,
    name: "Saiful Islam",
    role: "Super Admin",
    email: "zayan.dev@example.com",
    location: "Dhaka, Bangladesh",
    joined: "January 2024",
    bio: "Passionate Full Stack Developer and Content Strategist. Managing the core architecture and security of this platform.",
    image: "https://i.pravatar.cc/150?img=11",
    stats: [
      { label: "Blogs Published", value: "24", icon: <FiCheckCircle className="text-success" /> },
      { label: "Projects Completed", value: "12", icon: <FiBriefcase className="text-primary" /> },
      { label: "Last Active", value: "10m ago", icon: <FiClock className="text-warning" /> },
    ]
  });

  return (
    <div className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        {/* Profile Header Card */}
        <div className="card border-0 shadow-sm rounded-5 overflow-hidden mb-4">
          <div className="position-relative" style={{ height: '180px', background: 'linear-gradient(135deg, #0a2647 0%, #1a4d8c 100%)' }}>
            <button className="btn btn-light btn-sm position-absolute top-0 end-0 m-4 rounded-pill px-3 shadow-sm">
              <FiEdit2 className="me-2" /> Edit Cover
            </button>
          </div>
          
          <div className="card-body px-4 pb-4">
            <div className="d-md-flex align-items-end gap-4" style={{ marginTop: '-60px' }}>
              <div className="position-relative d-inline-block">
                <Image 
                  src={user.image} 
                  alt="Profile" 
                  width={130} height={130} 
                  className="rounded-circle border border-5 border-white shadow-sm"
                />
              </div>
              <div className="mt-3 mt-md-0 flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h3 className="fw-bold text-navy mb-1">{user.name}</h3>
                    <p className="text-muted mb-0 d-flex align-items-center gap-2">
                      <span className="badge bg-soft-navy text-navy rounded-pill px-3">{user.role}</span>
                      <small><FiMapPin /> {user.location}</small>
                    </p>
                  </div>
                  <button className="btn btn-navy rounded-pill px-4 shadow-sm">
                    <FiEdit2 className="me-2" /> Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Side: Stats & Info */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h6 className="fw-bold text-navy mb-4">Quick Stats</h6>
              {user.stats.map((stat, idx) => (
                <div key={idx} className="d-flex align-items-center justify-content-between mb-3 p-3 bg-light rounded-3">
                  <div className="d-flex align-items-center gap-3">
                    <span className="fs-5">{stat.icon}</span>
                    <small className="text-muted fw-medium">{stat.label}</small>
                  </div>
                  <span className="fw-bold text-navy">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h6 className="fw-bold text-navy mb-3">About Me</h6>
              <p className="small text-secondary leading-relaxed mb-4">{user.bio}</p>
              <hr className="text-muted opacity-25" />
              <div className="mt-3">
                <div className="d-flex align-items-center gap-2 mb-2 small text-muted">
                  <FiMail /> {user.email}
                </div>
                <div className="d-flex align-items-center gap-2 small text-muted">
                  <FiCalendar /> Joined {user.joined}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Recent Activity Log */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h6 className="fw-bold text-navy mb-4">Recent Activity</h6>
              <div className="timeline">
                {[
                  { action: "Published a new blog post", target: "2026 SEO Trends", time: "2 hours ago", color: "text-success" },
                  { action: "Updated project details", target: "E-Commerce App", time: "Yesterday", color: "text-primary" },
                  { action: "Changed system settings", target: "Admin Panel", time: "2 days ago", color: "text-warning" },
                ].map((act, idx) => (
                  <div key={idx} className="d-flex gap-3 mb-4 position-relative">
                    <div className="flex-shrink-0">
                      <div className={`rounded-circle bg-light d-flex align-items-center justify-content-center ${act.color}`} style={{width: '40px', height: '40px'}}>
                         <FiCheckCircle size={18} />
                      </div>
                    </div>
                    <div>
                      <p className="mb-0 small fw-bold text-navy">{act.action}: <span className="text-muted fw-normal">&quot;{act.target}&quot;</span></p>
                      <small className="text-muted" style={{fontSize: '11px'}}>{act.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-navy { background: #0a2647; color: white; border: none; transition: 0.3s; }
        .btn-navy:hover { background: #081d36; color: white; transform: translateY(-2px); }
        .text-navy { color: #0a2647; }
        .bg-soft-navy { background: rgba(10, 38, 71, 0.1); }
        .timeline::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 40px;
          bottom: 20px;
          width: 2px;
          background: #f0f0f0;
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default Profile;