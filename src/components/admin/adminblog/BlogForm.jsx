"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { FiSave, FiX, FiImage, FiType } from "react-icons/fi";

// dynamic import with SSR disabled
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const BlogForm = ({ isEditing, initialData, closeModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "SEO",
    author: "Zayan Khan",
    readTime: "",
    image: "",
    content: ""
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isEditing && initialData) setFormData(initialData);
  }, [isEditing, initialData]);

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Data:", formData);
    closeModal();
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3" 
         style={{ zIndex: 1200, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}>
      
      <div className="bg-white rounded-4 shadow-lg w-100 overflow-hidden d-flex flex-column" 
           style={{ maxWidth: '1100px', height: '90vh' }}>
        
        <div className="px-4 py-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="fw-bold mb-0">{isEditing ? "Edit Post" : "New Post"}</h5>
          <button className="btn-close shadow-none" onClick={closeModal}></button>
        </div>

        <div className="p-4 p-md-5 overflow-auto flex-grow-1">
          <form id="blog-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-8">
                <div className="mb-4">
                  <label className="fw-bold small text-muted">Title</label>
                  <input type="text" className="form-control form-control-lg border-0 bg-light" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
                </div>

                <div className="mb-5">
                  <label className="fw-bold small text-muted mb-2">Content</label>
                  <div style={{ height: '350px' }}>
                    <ReactQuill 
                      theme="snow" 
                      value={formData.content} 
                      onChange={(val) => setFormData({...formData, content: val})}
                      modules={quillModules}
                      style={{ height: '300px' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Sidebar Inputs */}
              <div className="col-md-4 px-md-4">
                 <div className="card border-0 bg-light p-3 rounded-4">
                    <div className="mb-3">
                      <label className="small fw-bold">Category</label>
                      <select className="form-select" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        <option>SEO</option>
                        <option>Web Dev</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="small fw-bold">Featured Image URL</label>
                      <input type="url" className="form-control" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
                    </div>
                 </div>
              </div>
            </div>
          </form>
        </div>

        <div className="p-4 border-top text-end">
          <button className="btn btn-light px-4 me-2 rounded-pill" onClick={closeModal}>Cancel</button>
          <button type="submit" form="blog-form" className="btn btn-dark px-5 rounded-pill">Save Article</button>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;