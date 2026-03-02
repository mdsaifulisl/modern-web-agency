"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import BlogForm from "@/components/admin/adminblog/BlogForm";
import DataTable from "@/components/shared/DataTable";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How to Optimize Your Website for 2026 SEO Trends",
      subtitle: "Zayan Khan • Feb 20, 2026", // DataTable-এ ছোট করে দেখানোর জন্য
      category: "SEO",
      author: "Zayan Khan",
      date: "Feb 20, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  // ১. টেবিলের কলাম কনফিগারেশন
  const columns = [
    { label: "Post Details", key: "title" },
    { label: "Category", key: "category" },
    { label: "Read Time", key: "readTime" },
    { label: "Actions", key: "actions", align: "end" }
  ];

  const openAddModal = () => { setEditingBlog(null); setIsModalOpen(true); };
  const openEditModal = (blog) => { setEditingBlog(blog); setIsModalOpen(true); };
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this post?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <div className="container-fluid">
        
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-5 bg-white p-4 rounded-4 shadow-sm">
          <div>
            <h3 className="fw-bold mb-1 text-navy">Blog Management</h3>
            <p className="text-muted mb-0 small">Manage your articles and SEO content</p>
          </div>
          <button className="btn btn-navy rounded-pill px-4 py-2 shadow-sm" onClick={openAddModal}>
            <FiPlus className="me-2" /> Create New Post
          </button>
        </div>

        {/* Reusable DataTable Component */}
        <DataTable 
          columns={columns} 
          data={blogs} 
          onEdit={openEditModal} 
          onDelete={handleDelete} 
        />

      </div>

      {isModalOpen && (
        <BlogForm 
          isEditing={!!editingBlog} 
          initialData={editingBlog} 
          closeModal={closeModal} 
        />
      )}

      
    </div>
  );
};

export default BlogAdmin;