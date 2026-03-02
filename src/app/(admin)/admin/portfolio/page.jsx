"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import PortfolioForm from "@/components/admin/portfolio/PortfolioForm";
import DataTable from "@/components/shared/DataTable";

const PortfolioAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // এডিট করার সময় ডাটা রাখার জন্য

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Revolution",
      subtitle: "Global Retail Co.", // DataTable এ টাইটেলের নিচে দেখাবে
      client: "Global Retail Co.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=200"
    }
  ]);
  const columns = [
    { label: "Project Details", key: "title" },
    { label: "Client", key: "client" },
    { label: "Category", key: "category" },
    { label: "Actions", key: "actions", align: "end" }
  ];

  const openAddModal = () => { 
    setSelectedProject(null);
    setIsEditing(false); 
    setShowModal(true); 
  };

  const openEditModal = (project) => { 
    setSelectedProject(project);
    setIsEditing(true); 
    setShowModal(true); 
  };

  const closeModal = () => setShowModal(false);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-5 bg-white p-4 rounded-4 shadow-sm">
          <div>
            <h3 className="fw-bold mb-1 text-navy">Portfolio Management</h3>
            <p className="text-muted mb-0 small">Create and manage your project case studies</p>
          </div>
          <button className="btn btn-navy rounded-pill px-4 py-2 shadow-sm" onClick={openAddModal}>
            <FiPlus className="me-2" /> Add Project
          </button>
        </div>

        {/* Reusable DataTable Component */}
        <DataTable 
          columns={columns} 
          data={projects} 
          onEdit={openEditModal} 
          onDelete={handleDelete} 
        />
      </div>

      {/* Portfolio Form Modal */}
      <PortfolioForm 
        showModal={showModal} 
        isEditing={isEditing} 
        initialData={selectedProject} 
        closeModal={closeModal} 
      />

    </div>
  );
};

export default PortfolioAdmin;