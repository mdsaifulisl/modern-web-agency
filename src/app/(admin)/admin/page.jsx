"use client";
import React from "react";
import { 
  FiLayers, 
  FiUsers, 
  FiBriefcase, 
  FiFileText, 
  FiMail, 
  FiArrowUpRight, 
  FiPlus 
} from "react-icons/fi";
import Link from "next/link";

const DashboardHome = () => {
  // স্ট্যাটিসটিকস ডাটা (পরবর্তীতে API থেকে আসবে)
  const stats = [
    { title: "Total Services", value: "06", icon: <FiLayers />, color: "var(--color-vibrant-cyan)", trend: "+1 new" },
    { title: "Team Members", value: "08", icon: <FiUsers />, color: "var(--color-deep-navy)", trend: "Active" },
    { title: "Portfolio Items", value: "24", icon: <FiBriefcase />, color: "var(--color-warm-yellow)", trend: "+4 this month" },
    { title: "Blog Posts", value: "15", icon: <FiFileText />, color: "#6f42c1", trend: "5 drafts" },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Header Section */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold text-navy mb-1">Dashboard Overview</h3>
          <p className="text-muted small mb-0">Welcome back! Here&apos;s what&apos;s happening at nextWave today.</p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/admin/blog" className="btn btn-outline-navy btn-sm d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm bg-white">
            <FiPlus /> New Post
          </Link>
          <Link href="/admin/portfolio" className="btn btn-navy btn-sm d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm">
            <FiPlus /> Add Project
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="row g-4 mb-5">
        {stats.map((stat, index) => (
          <div className="col-12 col-sm-6 col-xl-3" key={index}>
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 hover-lift transition-all bg-white">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div 
                  className="stat-icon-box p-3 rounded-3 text-white shadow-sm" 
                  style={{ backgroundColor: stat.color }}
                >
                  {stat.icon}
                </div>
                <span className="badge bg-light text-success rounded-pill border py-1 px-2" style={{ fontSize: '10px' }}>
                  <FiArrowUpRight className="me-1" /> {stat.trend}
                </span>
              </div>
              <h2 className="fw-bold text-navy mb-1">{stat.value}</h2>
              <p className="text-muted small fw-bold text-uppercase ls-1 mb-0 opacity-75">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Recent Contact Messages */}
        <div className="col-12 col-xl-8">
          <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
            <div className="card-header bg-white border-0 p-4 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold text-navy mb-0">Recent Contact Inquiries</h5>
              <Link href="/admin/messages" className="text-cyan small fw-bold text-decoration-none">View All</Link>
            </div>
            <div className="table-responsive px-4 pb-4">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr className="small text-uppercase text-muted">
                    <th className="border-0 px-3 py-3">Sender</th>
                    <th className="border-0 py-3">Subject</th>
                    <th className="border-0 py-3">Status</th>
                    <th className="border-0 py-3 text-end">Action</th>
                  </tr>
                </thead>
                <tbody className="small">
                  {[1, 2, 3].map((item) => (
                    <tr key={item}>
                      <td className="px-3 py-3">
                        <div className="fw-bold text-navy">Client Name {item}</div>
                        <div className="text-muted x-small">client{item}@email.com</div>
                      </td>
                      <td>Web Development Project</td>
                      <td>
                        <span className={`badge rounded-pill px-3 ${item === 1 ? 'bg-soft-warning text-warning' : 'bg-soft-success text-success'}`}>
                          {item === 1 ? 'Unread' : 'Read'}
                        </span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-light border-0 rounded-circle p-2">
                          <FiMail className="text-muted" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Summary / Status */}
        <div className="col-12 col-xl-4">
          <div className="card border-0 shadow-sm rounded-4 bg-navy text-white p-4 h-100 position-relative overflow-hidden">
            <div className="z-index-2 position-relative">
              <h5 className="fw-bold mb-3">System Status</h5>
              <hr className="border-white opacity-25" />
              <div className="d-flex justify-content-between mb-3 small">
                <span className="opacity-75">Storage Used</span>
                <span className="fw-bold">45%</span>
              </div>
              <div className="progress mb-4 bg-white bg-opacity-10" style={{ height: '6px' }}>
                <div className="progress-bar bg-cyan" style={{ width: '45%' }}></div>
              </div>
              
              <div className="alert bg-white bg-opacity-10 border-0 text-white small mb-0 rounded-3">
                <FiFileText className="me-2 text-cyan" /> 
                NextWave website is currently <strong>Live</strong> and performing well.
              </div>
            </div>
            {/* Background Decoration */}
            <div className="position-absolute bottom-0 end-0 opacity-10 translate-middle-x mb-n5 me-n5">
              <FiLayers size={150} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-soft-warning { background-color: rgba(255, 200, 87, 0.15) !important; }
        .bg-soft-success { background-color: rgba(40, 167, 69, 0.15) !important; }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
        }
        .ls-1 { letter-spacing: 1px; }
        .x-small { font-size: 11px; }
        .btn-navy {
          background-color: var(--color-deep-navy);
          color: white;
          border: none;
        }
        .btn-navy:hover {
          background-color: #0d345e;
          color: white;
        }
        .text-navy { color: var(--color-deep-navy); }
        .text-cyan { color: var(--color-vibrant-cyan); }
      `}</style>
    </div>
  );
};

export default DashboardHome;