"use client";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section bg-navy text-white pt-5">
      <div className="container pt-4">
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="footer-logo text-decoration-none mb-3 d-inline-block">
              next<span className="text-cyan">Wave</span>
            </Link>
            <p className="text-light opacity-75 pe-lg-5">
              Empowering brands with cutting-edge web solutions, creative designs, and strategic SEO. Let&apos;s build the future of your business together.
            </p>
            <div className="social-links d-flex gap-3 mt-4">
              <a href="#" className="social-icon"><FiFacebook /></a>
              <a href="#" className="social-icon"><FiTwitter /></a>
              <a href="#" className="social-icon"><FiInstagram /></a>
              <a href="#" className="social-icon"><FiLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 text-yellow">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4 text-yellow">Services</h5>
            <ul className="list-unstyled footer-links">
              <li><Link href="/services/web">Web Development</Link></li>
              <li><Link href="/services/graphics">Graphics Design</Link></li>
              <li><Link href="/services/seo">SEO Optimization</Link></li>
              <li><Link href="/services/ui-ux">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4 text-yellow">Contact Us</h5>
            <ul className="list-unstyled contact-list">
              <li className="d-flex align-items-center gap-3 mb-3">
                <FiMapPin className="text-cyan fs-5" />
                <span className="opacity-75">Dhaka, Bangladesh</span>
              </li>
              <li className="d-flex align-items-center gap-3 mb-3">
                <FiPhone className="text-cyan fs-5" />
                <span className="opacity-75">+880 1234 567 890</span>
              </li>
              <li className="d-flex align-items-center gap-3 mb-3">
                <FiMail className="text-cyan fs-5" />
                <span className="opacity-75">hello@nextwave.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom py-4 border-top border-secondary border-opacity-25">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 opacity-50 small">
                © {currentYear} nextWave Agency. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <Link href="/privacy" className="text-white text-decoration-none opacity-50 small me-4">Privacy Policy</Link>
              <Link href="/terms" className="text-white text-decoration-none opacity-50 small">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}