"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  FiUploadCloud, FiLink, FiInfo, FiLayers, FiCheckCircle, FiX, FiPlus 
} from "react-icons/fi";

const PortfolioForm = ({ showModal, isEditing, closeModal, initialData }) => {
  const initialState = {
    title: '',
    subtitle: '',
    client: '',
    category: 'Web Development',
    completionDate: '',
    coverImage: null,
    projectURL: '',
    techStack: [], // ডিফল্ট অ্যারে
    overview: '',
    challenges: '',
    solution: '',
    results: [''], // ডিফল্ট অ্যারে
  };

  const [formData, setFormData] = useState(initialState);
  const [techInput, setTechInput] = useState('');
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null); 

  useEffect(() => {
    if (showModal) {
      if (isEditing && initialData) {
        // এরর এড়াতে নিশ্চিত করা হচ্ছে যে techStack এবং results যেন সবসময় অ্যারে থাকে
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormData({
          ...initialData,
          techStack: Array.isArray(initialData.techStack) ? initialData.techStack : [],
          results: Array.isArray(initialData.results) ? initialData.results : ['']
        });
        if (initialData.coverImage && typeof initialData.coverImage === 'string') {
          setPreview(initialData.coverImage);
        }
      } else {
        setFormData(initialState);
        setPreview(null);
      }
    }
  }, [isEditing, initialData, showModal]);

  if (!showModal) return null;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, coverImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setPreview(null);
    setFormData({ ...formData, coverImage: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const addTech = () => {
    if (techInput.trim() && !formData.techStack.includes(techInput.trim())) {
      setFormData({ 
        ...formData, 
        techStack: [...(formData.techStack || []), techInput.trim()] 
      });
      setTechInput('');
    }
  };

  const removeTech = (index) => {
    const updatedTech = formData.techStack.filter((_, i) => i !== index);
    setFormData({ ...formData, techStack: updatedTech });
  };

  const addResultField = () => setFormData({ ...formData, results: [...(formData.results || []), ''] });

  const updateResult = (index, value) => {
    const newResults = [...formData.results];
    newResults[index] = value;
    setFormData({ ...formData, results: newResults });
  };

  const removeResult = (index) => {
    const newResults = formData.results.filter((_, i) => i !== index);
    setFormData({ ...formData, results: newResults });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Data:", formData);
    alert("Project saved successfully!");
    closeModal();
  };

  return (
    <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-2 px-md-0" 
         style={{ zIndex: 1200, background: 'rgba(10, 38, 71, 0.7)', backdropFilter: 'blur(8px)' }}>
      
      <div className="modal-content bg-white rounded-4 shadow-lg p-0 overflow-hidden border-0" 
           style={{ maxWidth: '950px', width: '100%', maxHeight: '90vh' }}>
        
        {/* Modal Header */}
        <div className="px-4 py-3 border-bottom d-flex justify-content-between align-items-center bg-light">
          <h5 className="fw-bold text-navy mb-0">{isEditing ? "Edit Case Study" : "Create New Case Study"}</h5>
          <button type="button" className="btn-close shadow-none" onClick={closeModal}></button>
        </div>

        {/* Modal Body */}
        <div className="modal-body p-4 p-md-5 overflow-auto bg-white">
          <form id="portfolio-form" onSubmit={handleSubmit}>
            
            {/* SECTION 1: BASIC INFO */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-4 text-navy border-bottom pb-2">
                <FiInfo className="text-cyan" /> <h6 className="fw-bold mb-0">1. Basic Information</h6>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="small fw-bold mb-1 text-secondary">Project Title</label>
                  <input type="text" name="title" value={formData.title} onChange={onChange} className="form-control shadow-none border-light bg-light" placeholder="Enter title" required />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1 text-secondary">Subtitle</label>
                  <input type="text" name="subtitle" value={formData.subtitle} onChange={onChange} className="form-control shadow-none border-light bg-light" placeholder="Short tagline" />
                </div>
                <div className="col-md-4">
                  <label className="small fw-bold mb-1 text-secondary">Client</label>
                  <input type="text" name="client" value={formData.client} onChange={onChange} className="form-control shadow-none border-light bg-light" />
                </div>
                <div className="col-md-4">
                  <label className="small fw-bold mb-1 text-secondary">Category</label>
                  <select name="category" value={formData.category} onChange={onChange} className="form-select shadow-none border-light bg-light" required>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Mobile App</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="small fw-bold mb-1 text-secondary">Completion Date</label>
                  <input type="text" name="completionDate" value={formData.completionDate} onChange={onChange} className="form-control shadow-none border-light bg-light" placeholder="e.g. Oct 2025" />
                </div>
              </div>
            </div>

            {/* SECTION 2: MEDIA & TECH */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-4 text-navy border-bottom pb-2">
                <FiUploadCloud className="text-cyan" /> <h6 className="fw-bold mb-0">2. Media & Tech Stack</h6>
              </div>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="small fw-bold mb-1 text-secondary">Cover Image</label>
                  <div className="upload-area border border-dashed rounded-3 p-3 text-center bg-light position-relative" style={{ minHeight: '150px' }}>
                    {preview ? (
                      <div className="position-relative d-inline-block border rounded bg-white p-1">
                        <Image src={preview} alt="preview" width={180} height={120} className="rounded-2 object-fit-cover" />
                        <button type="button" className="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle rounded-circle" onClick={removeImage}><FiX size={14}/></button>
                      </div>
                    ) : (
                      <label className="w-100 h-100 py-3 cursor-pointer">
                        <FiUploadCloud size={32} className="text-muted mb-2" />
                        <p className="small text-muted mb-0">Upload JPG/PNG</p>
                        <input type="file" ref={fileInputRef} className="position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer" onChange={handleCoverImageChange} accept="image/*" />
                      </label>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1 text-secondary">Tech Stack</label>
                  <div className="input-group mb-2">
                    <input type="text" className="form-control shadow-none border-light bg-light" value={techInput} onChange={(e) => setTechInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())} placeholder="Press enter to add" />
                    <button className="btn btn-navy px-3" type="button" onClick={addTech}>Add</button>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {formData.techStack?.map((tech, i) => (
                      <span key={i} className="badge bg-soft-cyan text-cyan border border-info px-2 py-1 d-flex align-items-center gap-1">
                        {tech} <FiX className="cursor-pointer" onClick={() => removeTech(i)} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: CONTENT */}
            <div className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-4 text-navy border-bottom pb-2">
                <FiLayers className="text-cyan" /> <h6 className="fw-bold mb-0">3. Project Overview</h6>
              </div>
              <div className="row g-3">
                <div className="col-12 mb-2">
                  <label className="small fw-bold mb-1 text-secondary">Brief Overview</label>
                  <textarea name="overview" value={formData.overview} onChange={onChange} className="form-control shadow-none border-light bg-light" rows="2"></textarea>
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1 text-secondary">The Challenge</label>
                  <textarea name="challenges" value={formData.challenges} onChange={onChange} className="form-control shadow-none border-light bg-light" rows="3"></textarea>
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1 text-secondary">The Solution</label>
                  <textarea name="solution" value={formData.solution} onChange={onChange} className="form-control shadow-none border-light bg-light" rows="3"></textarea>
                </div>
              </div>
            </div>

            {/* SECTION 4: RESULTS */}
            <div className="mb-2">
              <div className="d-flex justify-content-between align-items-center mb-4 text-navy border-bottom pb-2">
                <div className="d-flex align-items-center gap-2">
                  <FiCheckCircle className="text-cyan" /> <h6 className="fw-bold mb-0">4. Key Results</h6>
                </div>
                <button type="button" className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold" onClick={addResultField}>
                  <FiPlus className="me-1" /> Add
                </button>
              </div>
              <div className="row g-2">
                {formData.results?.map((res, i) => (
                  <div key={i} className="col-md-6 d-flex gap-2">
                    <input type="text" value={res} onChange={(e) => updateResult(i, e.target.value)} className="form-control shadow-none border-light bg-light" placeholder="e.g. 40% performance boost" />
                    {formData.results.length > 1 && (
                      <button type="button" className="btn btn-light border text-danger px-2" onClick={() => removeResult(i)}><FiX /></button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 border-top text-end bg-light">
          <button type="button" className="btn btn-light rounded-pill px-4 me-2 border fw-bold" onClick={closeModal}>Cancel</button>
          <button type="submit" form="portfolio-form" className="btn btn-navy rounded-pill px-5 fw-bold text-white shadow-sm">
            {isEditing ? "Update Project" : "Create Project"}
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .btn-navy { background: #0a2647; border: none; }
        .btn-navy:hover { background: #081d36; }
        .bg-soft-cyan { background: rgba(44, 156, 219, 0.1); }
        .text-cyan { color: #2c9cdb; }
        .text-navy { color: #0a2647; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
};

export default PortfolioForm;