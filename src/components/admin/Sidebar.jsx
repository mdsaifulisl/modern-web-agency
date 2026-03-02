"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiLayers,
  FiUsers,
  FiBriefcase,
  FiX,
  FiSettings,
  FiLogOut,
  FiFileText,
} from "react-icons/fi";

export default function Sidebar({ isOpen, closeSidebar }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <FiHome /> },
    { name: "Profile", path: "/admin/profile", icon: <FiUsers /> },
    { name: "Portfolio", path: "/admin/portfolio", icon: <FiBriefcase /> },
    { name: "Blog", path: "/admin/blog", icon: <FiFileText /> },
    { name: "Settings", path: "/admin/settings", icon: <FiSettings /> },
    { name: "Home", path: "/", icon: <FiHome /> },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Mobile Close */}
        <div className="d-lg-none text-end px-4 mb-3">
          <button className="btn text-white" onClick={closeSidebar}>
            <FiX size={22} />
          </button>
        </div>

        <nav className="flex-grow-1">
          {menuItems.map((item) => {
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeSidebar}
                className={`sidebar-link ${
                  active ? "active" : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button className="logout-btn">
          <FiLogOut /> Logout
        </button>
      </aside>
    </>
  );
}