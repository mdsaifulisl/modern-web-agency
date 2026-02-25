"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); 
  };

  const isActive = (path) => pathname === path ? "active-link" : "";

  return (
    <header className="header-container">
      <div className="header-content">
        <Link href="/" className="logo">
          next<span className="brand-accent">Wave</span>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? "nav-active" : ""}`}>
          <ul className="nav-list">
            <li><Link href="/" className={isActive("/")} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className={isActive("/about")} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            
           
            <li className={`dropdown ${pathname.includes("/services") ? "active-link" : ""}`}>
              <div 
                className="dropdown-trigger" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              >
                Services <span className={`arrow-down ${isDropdownOpen ? "rotate" : ""}`}></span>
              </div>
              <ul className={`dropdown-content ${isDropdownOpen ? "show-dropdown" : ""}`}>
                <li><Link href="/services/web" onClick={toggleMenu}>Web Development</Link></li>
                <li><Link href="/services/graphics" onClick={toggleMenu}>Graphics Design</Link></li>
                <li><Link href="/services/seo" onClick={toggleMenu}>SEO Optimization</Link></li>
              </ul>
            </li>

            <li><Link href="/portfolio" className={isActive("/portfolio")} onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link href="/blog" className={isActive("/blog")} onClick={toggleMenu}>Blog</Link></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
        </button>
      </div>
    </header>
  );
}