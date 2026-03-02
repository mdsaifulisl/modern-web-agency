"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import { FiMenu, FiBell, FiUser } from "react-icons/fi";
import "../../../style/admin.css"
import Footer from "@/components/layout/Footer";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">

      {/* HEADER */}
      <header className="admin-header">
        <button
          className="border-0 bg-transparent d-lg-none"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu size={22} />
        </button>

        <h4 className="fw-bold m-0">
          next<span className="vibrant-cyan">Wave</span>
        </h4>

        <div className="d-flex gap-3 align-items-center">
          <FiBell />
          <div className="avatar">
            <FiUser />
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <main className="admin-content">
        {children}
      </main>
      
    </div>
  );
}