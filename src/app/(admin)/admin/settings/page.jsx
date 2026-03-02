"use client";
import React, { useState } from "react";
import { 
  FiSettings, FiUser, FiLock, FiGlobe, FiSave, FiShield, 
  FiUsers, FiPlus, FiTrash2, FiEye, FiX, FiMail, 
  FiMapPin, FiBriefcase, FiCheckCircle, FiClock, FiSmartphone 
} from "react-icons/fi";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [viewingMember, setViewingMember] = useState(null);

  // ১. জেনারেল সেটিংস স্টেট
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Portfolio CMS",
    siteEmail: "admin@example.com",
    language: "English",
    maintenanceMode: false
  });

  // ২. আপনার দেওয়া ইউজার/টিম ডাটা
  const [team, setTeam] = useState([
    {
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
    },
    {
      id: 2,
      name: "Rahat Ahmed",
      role: "Moderator",
      email: "rahat@example.com",
      location: "Chittagong, BD",
      joined: "March 2024",
      bio: "Content strategist and portfolio auditor.",
      image: "https://i.pravatar.cc/150?img=32",
      stats: [
        { label: "Blogs Published", value: "5", icon: <FiCheckCircle className="text-success" /> },
        { label: "Projects Completed", value: "2", icon: <FiBriefcase className="text-primary" /> },
        { label: "Last Active", value: "2h ago", icon: <FiClock className="text-warning" /> },
      ]
    }
  ]);

  // ৩. নতুন অ্যাডমিন অ্যাড করার স্টেট
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "Moderator" });

  const handleGeneralChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGeneralSettings(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.email) {
      const newUser = {
        ...newMember,
        id: Date.now(),
        location: "Unknown",
        joined: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
        bio: "New team member",
        image: `https://i.pravatar.cc/150?u=${Date.now()}`,
        stats: [
          { label: "Blogs", value: "0", icon: <FiCheckCircle className="text-success" /> },
          { label: "Projects", value: "0", icon: <FiBriefcase className="text-primary" /> },
          { label: "Active", value: "Now", icon: <FiClock className="text-warning" /> },
        ]
      };
      setTeam([...team, newUser]);
      setNewMember({ name: "", email: "", role: "Moderator" });
      alert("Admin added successfully!");
    }
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        {/* --- HEADER --- */}
        <div className="d-flex justify-content-between align-items-center mb-5 bg-white p-4 rounded-4 shadow-sm border-0">
          <div>
            <h3 className="fw-bold mb-1 text-navy">System Settings</h3>
            <p className="text-muted mb-0 small">Control your platform and manage team access</p>
          </div>
          <button className="btn btn-navy rounded-pill px-4 shadow-sm" onClick={() => alert("Settings Saved!")}>
            <FiSave className="me-2" /> Save All
          </button>
        </div>

        <div className="row g-4">
          {/* --- SIDEBAR --- */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-white h-100">
              <div className="nav flex-column nav-pills gap-2">
                <button className={`nav-link text-start rounded-3 py-3 d-flex align-items-center gap-2 ${activeTab === 'general' ? 'active bg-navy' : 'text-secondary'}`} onClick={() => setActiveTab("general")}><FiSettings /> General Settings</button>
                <button className={`nav-link text-start rounded-3 py-3 d-flex align-items-center gap-2 ${activeTab === 'team' ? 'active bg-navy' : 'text-secondary'}`} onClick={() => setActiveTab("team")}><FiUsers /> Team & Admins</button>
                <button className={`nav-link text-start rounded-3 py-3 d-flex align-items-center gap-2 ${activeTab === 'security' ? 'active bg-navy' : 'text-secondary'}`} onClick={() => setActiveTab("security")}><FiShield /> Security</button>
              </div>
            </div>
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white min-vh-50">
              
              {/* SECTION 1: GENERAL */}
              {activeTab === "general" && (
                <div className="animate-fade-in">
                  <h5 className="fw-bold text-navy mb-4"><FiGlobe className="me-2 text-primary" /> Site Information</h5>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="small fw-bold text-muted mb-2">Website Name</label>
                      <input type="text" name="siteName" className="form-control shadow-none border-light bg-light" value={generalSettings.siteName} onChange={handleGeneralChange} />
                    </div>
                    <div className="col-md-6">
                      <label className="small fw-bold text-muted mb-2">Admin Contact Email</label>
                      <input type="email" name="siteEmail" className="form-control shadow-none border-light bg-light" value={generalSettings.siteEmail} onChange={handleGeneralChange} />
                    </div>
                    <div className="col-12">
                      <div className="form-check form-switch p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
                        <div>
                          <label className="form-check-label fw-bold">Maintenance Mode</label>
                          <p className="text-muted small mb-0">Disable site for public visitors</p>
                        </div>
                        <input name="maintenanceMode" className="form-check-input fs-4" type="checkbox" checked={generalSettings.maintenanceMode} onChange={handleGeneralChange} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: TEAM & ADMIN ADD */}
              {activeTab === "team" && (
                <div className="animate-fade-in">
                  <h5 className="fw-bold text-navy mb-4">Admin Management</h5>
                  
                  {/* ADD NEW ADMIN FORM */}
                  <div className="bg-soft-navy p-3 rounded-4 mb-4 border border-dashed border-primary">
                    <p className="small fw-bold text-navy mb-2"><FiPlus /> Add New Member</p>
                    <div className="row g-2">
                      <div className="col-md-4">
                        <input type="text" className="form-control form-control-sm" placeholder="Name" value={newMember.name} onChange={(e)=>setNewMember({...newMember, name:e.target.value})} />
                      </div>
                      <div className="col-md-4">
                        <input type="email" className="form-control form-control-sm" placeholder="Email" value={newMember.email} onChange={(e)=>setNewMember({...newMember, email:e.target.value})} />
                      </div>
                      <div className="col-md-3">
                        <select className="form-select form-select-sm" value={newMember.role} onChange={(e)=>setNewMember({...newMember, role:e.target.value})}>
                          <option value="Admin">Admin</option>
                          <option value="Moderator">Moderator</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <button className="btn btn-navy btn-sm w-100" onClick={handleAddMember}><FiPlus /></button>
                      </div>
                    </div>
                  </div>

                  {/* TEAM TABLE */}
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="small text-muted text-uppercase">
                        <tr><th>Member</th><th>Role</th><th className="text-end">Actions</th></tr>
                      </thead>
                      <tbody>
                        {team.map((m) => (
                          <tr key={m.id}>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <img src={m.image} className="rounded-circle" style={{width: '32px', height: '32px', objectFit: 'cover'}} />
                                <div><div className="fw-bold small">{m.name}</div><div className="text-muted extra-small">{m.email}</div></div>
                              </div>
                            </td>
                            <td><span className={`badge rounded-pill ${m.role === 'Super Admin' ? 'bg-navy' : 'bg-soft-primary text-primary'}`}>{m.role}</span></td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-light text-navy me-2" onClick={() => setViewingMember(m)}><FiEye /></button>
                              <button className="btn btn-sm btn-light text-danger" onClick={() => setTeam(team.filter(t=>t.id!==m.id))}><FiTrash2 /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 3: SECURITY */}
              {activeTab === "security" && (
                <div className="animate-fade-in text-center py-5">
                  <div className="bg-light d-inline-block p-4 rounded-circle mb-3"><FiLock size={40} className="text-muted" /></div>
                  <h5 className="fw-bold text-navy">Security Controls</h5>
                  <p className="text-muted small mb-4 px-md-5">Update your password and enable Two-Factor Authentication (2FA) for better security.</p>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-navy rounded-pill px-4">Change Password</button>
                    <button className="btn btn-navy rounded-pill px-4">Enable 2FA</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- PROFILE VIEW MODAL (Using your Stats data) --- */}
      {viewingMember && (
        <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3" style={{zIndex: 2000, background: 'rgba(10,38,71,0.6)', backdropFilter: 'blur(8px)'}}>
          <div className="bg-white rounded-5 shadow-lg overflow-hidden animate-slide-up" style={{maxWidth: '480px', width: '100%'}}>
            <div className="p-4 text-center bg-navy text-white position-relative pb-5">
              <button className="btn text-white position-absolute top-0 end-0 m-3" onClick={() => setViewingMember(null)}><FiX size={24}/></button>
              <img src={viewingMember.image} className="rounded-circle border border-4 border-white shadow-lg mb-3 mt-2" style={{width: '100px', height: '100px', objectFit: 'cover'}} />
              <h4 className="fw-bold mb-0">{viewingMember.name}</h4>
              <p className="text-info small mb-0 fw-semibold">{viewingMember.role}</p>
            </div>
            <div className="p-4 bg-white" style={{marginTop: '-25px', borderRadius: '30px 30px 0 0'}}>
              <div className="d-flex flex-column gap-2 mb-4">
                <div className="small text-muted d-flex align-items-center gap-2"><FiMail className="text-primary"/> {viewingMember.email}</div>
                <div className="small text-muted d-flex align-items-center gap-2"><FiMapPin className="text-primary"/> {viewingMember.location}</div>
                <div className="small text-muted d-flex align-items-center gap-2"><FiClock className="text-primary"/> Joined {viewingMember.joined}</div>
              </div>
              
              {/* Stats Row */}
              <div className="row g-2 mb-4 text-center">
                {viewingMember.stats?.map((s, i) => (
                  <div className="col-4" key={i}>
                    <div className="p-2 border rounded-3 bg-light">
                      <div className="mb-1">{s.icon}</div>
                      <div className="fw-bold text-navy small">{s.value}</div>
                      <div className="extra-small text-muted text-uppercase">{s.label.split(' ')[0]}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small text-muted italic text-center mb-4 px-3">"{viewingMember.bio}"</p>
              <button className="btn btn-navy w-100 rounded-pill py-2" onClick={() => setViewingMember(null)}>Close Profile</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .btn-navy, .bg-navy { background: #0a2647 !important; color: white !important; border: none; transition: 0.3s; }
        .btn-navy:hover { background: #081d36; }
        .btn-outline-navy { border: 2px solid #0a2647; color: #0a2647; font-weight: 600; }
        .text-navy { color: #0a2647; }
        .bg-soft-navy { background: rgba(10, 38, 71, 0.05); }
        .bg-soft-primary { background: rgba(13, 110, 253, 0.1); }
        .extra-small { font-size: 10px; font-weight: bold; }
        .animate-fade-in { animation: fadeIn 0.4s ease; }
        .animate-slide-up { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default Settings;