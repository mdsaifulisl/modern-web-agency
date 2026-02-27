"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // পেজ চেঞ্জ হলে মেনু অটোমেটিক বন্ধ হবে
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // একটিভ লিঙ্ক লজিক
  const getActiveClass = (path) => (pathname === path ? "active-link" : "");

  return (
    <header className="header-container">
      <div className="header-content">
        <Link href="/" className="logo">
          next<span className="brand-accent">Wave</span>
        </Link>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "nav-active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link href="/" className={getActiveClass("/")}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={getActiveClass("/about")}>About Us</Link>
            </li>

            {/* Services Dropdown */}
            <li className={`dropdown ${pathname.startsWith("/services") ? "active-parent" : ""}`}>
              <div className="dropdown-trigger" onClick={toggleDropdown}>
                Services <span className={`arrow-down ${isDropdownOpen ? "rotate" : ""}`}></span>
              </div>
              <ul className={`dropdown-content ${isDropdownOpen ? "show-dropdown" : ""}`}>
                <li><Link href="/services" className={getActiveClass("/services")}>All Services</Link></li>
                <li><Link href="/services/web" className={getActiveClass("/services/web")}>Web Development</Link></li>
                <li><Link href="/services/graphics" className={getActiveClass("/services/graphics")}>Graphics Design</Link></li>
                <li><Link href="/services/seo" className={getActiveClass("/services/seo")}>SEO Optimization</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/portfolio" className={getActiveClass("/portfolio")}>Portfolio</Link>
            </li>
            <li>
              <Link href="/blog" className={getActiveClass("/blog")}>Blog</Link>
            </li>

            {/* Mobile Button Inside Menu */}
            <li className="mobile-only-btn">
              <Link href="/contact">
                <Button variant="primary" style={{ width: "100%" }}>Get Started</Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Button & Hamburger */}
        <div className="header-actions">
          <Link href="/contact" className="desktop-only">
            <Button variant="primary">Get Started</Button>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "ex" : ""}`}></div>
          </button>
        </div>
      </div>
      
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </header>
  );
}