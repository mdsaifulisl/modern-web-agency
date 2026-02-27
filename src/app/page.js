import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import "../style/home.css";
import {
  FiCode,
  FiBarChart,
  FiArrowRight,
  FiStar,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import Testimonials from "./_components/Testimonials";
import Service from "./_components/Service";
import Statistics from "../components/shared/Statistics";

export default function Home() {
  return (
    <main className="bg-light">
      {/* --- 1. Hero Section --- */}
      <section className="hero-section py-5 d-flex align-items-center bg-white overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-5 pointer-events-none z-index-1 d-none d-lg-block"
          style={{ zIndex: "20" }}
        >
          <div
            className="position-absolute bottom-0 end-0 center-0 translate-middle bg-cyan rounded-circle"
            style={{ width: "400px", height: "400px", filter: "blur(100px)" }}
          ></div>
        </div>
        <div className="container py-lg-5" style={{ zIndex: "30" }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="d-flex align-items-center gap-2 mb-3">
                <HiOutlineLightningBolt className="text-yellow fs-4" />
                <h6 className="text-cyan fw-bold text-uppercase ls-2 mb-0 animate-fade-in delay-1">
                  Creative Solutions
                </h6>
              </div>
              <h1 className="display-3 fw-bold text-navy mb-4 animate-slide-up delay-2">
                Elevate Your Business with{" "}
                <span className="text-cyan">nextWave</span> Agency
              </h1>
              <p className="lead text-muted mb-5 animate-slide-up delay-3">
                We specialize in Web Development, Graphics Design, and SEO to
                help your business grow in the digital era.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 animate-fade-in delay-4">
                <Button variant="cta" animated={true} href="/contact">
                  Start Your Project
                </Button>
                <Button variant="outline" href="/portfolio">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="position-relative">
                <Image
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-and-coding-websites-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                  alt="NextWave Agency Illustration"
                  width={600}
                  height={600}
                  priority
                  className="img-fluid rounded-5 shadow-lg float-animation position-relative z-index-2"
                />
                <div className="hero-blob"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Service Highlights --- */}
      <Service />

      {/* --- 3. Statistics Section --- */}

      <Statistics />

      {/* --- 4. Portfolio Highlights (NEW) --- */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-5">
            <div>
              <h2 className="fw-bold text-navy">Portfolio Highlights</h2>
              <p className="text-muted mb-0">
                A glimpse of our latest creative works
              </p>
            </div>
            <Button
              href="/portfolio"
              variant="link"
              animated={true}
              className="d-flex align-items-center gap-1"
            >
              View All Projects <FiArrowRight />
            </Button>
          </div>
          <div className="row g-4">
            {[1, 2, 3].map((item) => (
              <div className="col-md-4" key={item}>
                <div className="portfolio-card position-relative overflow-hidden rounded-4">
                  <Image
                    src={`https://img.freepik.com/free-photo/workplace-business-modern-responsive-design-concept_181624-42851.jpg`}
                    alt="Work"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                  <div className="portfolio-overlay p-4 d-flex flex-column justify-content-end">
                    <div>
                      {" "}
                      <span className="badge bg-cyan mb-2 d-inline-block">
                        Web Design
                      </span>{" "}
                    </div>
                    <h5 className="text-white fw-bold">Project Name {item}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. Testimonials --- */}
      <Testimonials />

      {/* --- 6. Final CTA --- */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="bg-navy rounded-5 p-5 text-center text-white position-relative overflow-hidden shadow-lg">
            <h2 className="display-6 fw-bold mb-4 off-white">
              Ready to launch your project?
            </h2>
            <p
              className="lead opacity-75 mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Join hundreds of successful businesses who grow with nextWave.
              Let&apos;s create something extraordinary.
            </p>
            <div className="d-flex justify-content-center">
              <Button variant="cta" animated={true} href="/contact">
                Get in Touch Now
              </Button>
            </div>
            <div className="decorative-circle"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
